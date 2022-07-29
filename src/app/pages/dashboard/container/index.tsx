import React, {useState, useEffect} from 'react'
import {compact} from 'lodash'
import {toast} from 'react-toastify'
import {keyBy} from 'lodash'
import {getEmail, removeUserSession, setKPIBulkData} from '../../../modules/auth/Common'
import {UserContext} from '../../../modules/context/UserContext'
import {DashboardWrapper} from '../DashboardWrapper'
import {fetchMiddleWare} from '../utils/apiMiddleWare'
import {fetchOkrData} from './api'
import {ReactComponent as LoadingIcon} from '../../../../_metronic/assets/logos/loading.svg'
import {getKpiFilterData} from './getKpiFilterData'
import {useHistory} from 'react-router-dom'

const api_types: any = {
  SERVICE_GROUP: 'ServiceGroup',
  PORTFOLIO: 'Portfolio',
  SERVICE: 'Service',
}

export const Container = () => {
  const {
    componentRights,
    kpiBulkData,
    setKpiBulkData,
    impersonatedUser,
    userEmail,
    kpiTableData,
    setIUser,
    setComponentRights,
    setKpiTableData,
    setUserEmail,
    setOkrServices,
    okrServices,
  }: any = React.useContext(UserContext)
  const [isLoading, setLoading] = useState(true)
  const [hasError, setError] = useState('')
  const [serviceCatalogueList, setServiceCatalogueList] = useState([])
  const [serviceGroupValue, setServiceGroupValue] = useState('WFM')
  const [table1Data, setTable1Data] = useState({})
  const [filterTermValue, setFilterTermValue] = useState('')
  const [serviceGroupsTreeList, setServiceGroupsTreeList] = useState([])
  const [serviceTreeList, setServiceTreeList] = useState([])
  const [serviceGroupsList, setServiceGroupsList] = useState([])
  const [portfoliosList, setPortfoliosList] = useState([])
  const [portListRelations, setPortListRelations]: any = useState({})
  const [okrLoading, setOkrLoading] = useState(false)

  const [portfolioFilterTree, setPortfolioFilterTree] = useState('ALL')
  const [serviceGFilterTree, setServiceGFilterTree] = useState('ALL')
  const [serviceFilterTree, setServiceFilterTree] = useState('ALL')
  const [filterByEmail, setFilterByEmail] = useState(true)
  const [treeInterval, setTreeInterval] = useState('')

  const [mainTreeFilters, setTreeFilterData] = useState<any>(null)
  const [portfoliosTreeList, setTreePortfoliosList] = useState([])
  const [intervalsList, setIntervalsList] = React.useState([])
  const [kpiIntervals, setKpiIntervalsList] = useState([])
  const [intervalValue, setIntervalValue] = React.useState('')
  const [intervalLabel, setIntervalLabel] = React.useState('')
  const [portfolioValue, setPortfolioValue] = useState(
    componentRights?.C_KPI_UL_DDL?.props?.DEFAULT_VALUE
  )
  const [isMega, setIsMega] = useState(false)
  const [deliverySpeedData, setDeliverySpeedData] = useState({})
  const [qualityData, setQualityData] = useState({})
  const [prdQualityData, setPrdQualityData] = useState({})
  const [okrTreeData, setOkrTreeData] = useState([])
  const errorToast = () =>
    toast.error('Something went wrong, Please reload page or contact BI team')

  const history = useHistory()
  useEffect(() => {
    console.log('KPI Index LANDING_PAGE', componentRights?.LANDING_PAGE?.props?.LANDING_PAGE)
    // eslint-disable-next-line no-restricted-globals
    if (componentRights?.LANDING_PAGE?.props?.LANDING_PAGE === '/my-career/career-framework')
      history.push('/my-career')
  }, [componentRights?.LANDING_PAGE?.props?.LANDING_PAGE, history])

  useEffect(() => {
    setIsMega(portListRelations[portfolioValue]?.isMega || false)
  }, [portfolioValue, portListRelations, serviceGroupValue])

  useEffect(() => {
    if (mainTreeFilters && mainTreeFilters.serviceGroupFilterData) {
      if (portfolioFilterTree !== 'ALL') {
        const seen = new Set()
        const filteredArr = compact(
          mainTreeFilters?.serviceGroupFilterData.map((i: any) =>
            portfolioFilterTree === i.portfolio ? i : undefined
          )
        ).filter((el: any) => {
          const duplicate = seen.has(el.serviceGroup)
          seen.add(el.serviceGroup)
          return !duplicate
        })
        const uniqueServiceGroups: any = filteredArr.map((s: any) => {
          return {
            label: s.serviceGroup,
            value: s.serviceGroup,
          }
        })
        setServiceGroupsTreeList(uniqueServiceGroups)
      } else {
        const servData: any = [
          //@ts-ignore
          ...new Set(
            compact(mainTreeFilters?.serviceGroupFilterData.map((d: any) => d.serviceGroup))
          ),
        ].map((i) => {
          return {
            label: i,
            value: i,
          }
        })
        setServiceGroupsTreeList(servData)
      }
    }
  }, [portfolioFilterTree, mainTreeFilters])

  useEffect(() => {
    if (serviceGFilterTree !== 'ALL') {
      const filterServiceGroup: any = mainTreeFilters?.serviceFilterData.map((s: any) => {
        if (serviceGFilterTree === s.serviceGroup) {
          return {
            label: s.service,
            value: s.service,
          }
        }
      })
      setServiceTreeList(compact(filterServiceGroup))
    } else {
      const serviceData: any = [
        //@ts-ignore
        ...new Set(compact(mainTreeFilters?.serviceFilterData.map((d: any) => d.service))),
      ].map((i) => {
        return {
          label: i,
          value: i,
        }
      })
      setServiceTreeList(serviceData)
    }
  }, [serviceGFilterTree, mainTreeFilters])
  // service filter serviceFilterTree
  useEffect(() => {
    if (mainTreeFilters) {
      if (serviceFilterTree !== 'ALL') {
        const filterServiceGroup: any = mainTreeFilters?.serviceFilterData.map((s: any) => {
          if (serviceFilterTree === s.service) {
            return {
              label: s.serviceGroup,
              value: s.serviceGroup,
            }
          }
        })
        const filterPorts: any = mainTreeFilters?.serviceFilterData.map((s: any) => {
          if (serviceFilterTree === s.service) {
            return {
              label: s.portfolio,
              value: s.portfolio,
            }
          }
        })
        setTreePortfoliosList(compact(filterPorts))
        setServiceGroupsTreeList(compact(filterServiceGroup))
      } else {
        const servData: any = [
          //@ts-ignore
          ...new Set(
            compact(mainTreeFilters?.serviceGroupFilterData.map((d: any) => d.serviceGroup))
          ),
        ].map((i) => {
          return {
            label: i,
            value: i,
          }
        })
        setServiceGroupsTreeList(servData)
        setTreePortfoliosList(
          mainTreeFilters.portfolioFilterData.map((item: any) => ({
            label: item.portfolio,
            value: item.portfolio,
          }))
        )
      }
    }
  }, [serviceFilterTree, mainTreeFilters])

  const handlePortfolioValue = (selectedOption: any) => {
    setPortfolioValue(selectedOption.value)
    setFilterTermValue(selectedOption.value)
  }
  const handleServiceGroupValue = (selectedOption: any) => {
    setServiceGroupValue(selectedOption.value)
    setIntervalValue(selectedOption.value)
  }
  const handleTreePortfolioValue = (selected: any) => {
    setPortfolioFilterTree(selected?.value || 'ALL')
  }
  const handleTreeServiceGroup = (selected: any) => {
    setServiceGFilterTree(selected?.value || 'ALL')
  }
  const handleTreeServices = (selected: any) => {
    setServiceFilterTree(selected?.value || 'ALL')
  }
  const handleTreeIntervals = (selected: any) => {
    setTreeInterval(selected?.value || '2021')
  }
  useEffect(() => {
    // console.log(
    //   'componentRights.C_KPI_UL_DDL.props.DEFAULT_VALUE',
    //   componentRights.C_KPI_UL_DDL?.props?.DEFAULT_VALUE
    // )
    // console.log(
    //   'componentRights.C_KPI_UL_DDL.props.DEFAULT_VALUE',
    //   componentRights.C_KPI_UL_DDL?.props?.DEFAULT_VALUE
    // )
    if (componentRights?.C_KPI_UL_DDL?.props?.DEFAULT_VALUE)
      setFilterTermValue(componentRights.C_KPI_UL_DDL.props.DEFAULT_VALUE)
    setPortfolioValue(componentRights?.C_KPI_UL_DDL?.props?.DEFAULT_VALUE)
  }, [componentRights, impersonatedUser])
  useEffect(() => {
    // console.log(
    //   'componentRights.C_KPI_INT_DDL?.props.DEFAULT_VALUE',
    //   componentRights.C_KPI_INT_DDL?.props.DEFAULT_VALUE
    // )
    // console.log(
    //   'componentRights.C_KPI_INT_DDL?.props.DEFAULT_VALUE',
    //   componentRights.C_KPI_INT_DDL?.props.DEFAULT_VALUE
    // )

    if (componentRights && componentRights?.C_KPI_INT_DDL && componentRights?.C_KPI_INT_DDL?.props)
      setIntervalLabel(componentRights.C_KPI_INT_DDL?.props.DEFAULT_VALUE || '')
    setIntervalValue(componentRights.C_KPI_INT_DDL?.props.DEFAULT_VALUE || '')
    setTreeInterval(componentRights.C_KPI_INT_DDL?.props.DEFAULT_VALUE || '')
  }, [componentRights, impersonatedUser])
  // url: string, params: any, type: ApiType
  useEffect(() => {
    if (componentRights?.C_KPI_UL_DDL?.props?.DATA_TYPE) {
      const svt: any = {
        SERVICE_GROUP: 'SERVICEGROUP',
        PORTFOLIO: 'PORTFOLIO',
        SERVICE: 'SERVICE',
      }

      getKpiFilterData(svt[componentRights?.C_KPI_UL_DDL?.props?.DATA_TYPE], errorToast).then(
        (data: any) => {
          setPortListRelations(keyBy(data, 'value'))
          const filteredData = data.map((i: any) => {
            return {
              label: i.value,
              value: i.value,
            }
          })
          setPortfoliosList(filteredData)
        }
      )
    }
  }, [portfolioValue, componentRights])
  const emailUp = getEmail()
  useEffect(() => {
    ;(async () => {
      var email = userEmail ? userEmail : getEmail()
      setLoading(true)
      await fetchMiddleWare(`KPIDashboard/getServiceGroups`)
        .then((response) => {
          if (response.responseCode === 401) {
            setComponentRights({})
            setIUser(null)
            removeUserSession()
            setUserEmail('')
          }
          setServiceGroupsList(
            response.data.map((item: any) => ({
              label: item,
              value: item,
            }))
          )
        })
        .catch((err) => {
          if (err) {
            setError(
              '{getServiceGroups} Something went wrong. Error in loading data from server. Please refresh.'
            )
            errorToast()
            console.error('error:getPortfolios', err)
          }
        })

      await fetchMiddleWare(`KPIDashboard/getCatalogueInfo?email=${email}`)
        .then((response) => {
          setServiceCatalogueList(response?.data)
        })
        .catch(function (error) {
          if (error) {
            errorToast()
            setError(
              '{getCatalogueInfo} Something went wrong with loading data from server. Please refresh.'
            )
            console.error('error:getCatalogueInfo', error)
          }
        })

      await fetchMiddleWare(`KPIDashboard/getOkrIntervals`)
        .then((response) => {
          setIntervalsList(
            response.data.map((v: any) => {
              return {value: v, label: v}
            })
          )
        })
        .catch(function (error) {
          if (error) {
            errorToast()
            setError(
              '{getOkrIntervals} Something went wrong with loading data from server. Please refresh.'
            )
            console.error('error:getOkrIntervals', error)
          }
        })
      await fetchMiddleWare(`KPIDashboard/getKpiIntervals`)
        .then((response) => {
          setKpiIntervalsList(
            response.data.map((v: any) => {
              return {value: v.value, label: v.value}
            })
          )
        })
        .catch(function (error) {
          if (error) {
            errorToast()
            setError(
              '{getKpiIntervals} Something went wrong with loading data from server. Please refresh.'
            )
            console.error('error:getKpiIntervals', error)
          }
        })
      setLoading(false)
    })()
  }, [userEmail, emailUp, filterByEmail])
  useEffect(() => {
    ;(async () => {
      var email = userEmail ? userEmail : getEmail()
      await fetchMiddleWare(`KPIDashboard/getOkrFilterData?email=${filterByEmail ? email : ''}`)
        .then((response: any) => {
          setTreePortfoliosList(
            response.portfolioFilterData.map((item: any) => ({
              label: item.portfolio,
              value: item.portfolio,
            }))
          )
          const servData: any = [
            //@ts-ignore
            ...new Set(compact(response?.serviceGroupFilterData.map((d: any) => d.serviceGroup))),
          ].map((i) => {
            return {
              label: i,
              value: i,
            }
          })
          const serviceData: any = [
            //@ts-ignore
            ...new Set(compact(response?.serviceFilterData.map((d: any) => d.service))),
          ].map((i) => {
            return {
              label: i,
              value: i,
            }
          })
          setServiceGroupsTreeList(servData)
          setTreeFilterData(response)
          setOkrServices(response)
          setServiceTreeList(serviceData)
        })
        .catch(function (error) {
          if (error) {
            errorToast()
            setError(
              '{getOkrFilterData} Something went wrong with loading data from server. Please refresh.'
            )
            console.error('error:getOkrFilterData', error)
          }
        })
    })()
    setLoading(false)
  }, [filterByEmail])

  useEffect(() => {
    ;(async () => {
      setOkrLoading(true)
      if (treeInterval) {
        const pf = portfolioFilterTree === 'ALL' ? '' : portfolioFilterTree
        const sgf = serviceGFilterTree === 'ALL' ? '' : serviceGFilterTree
        const sf = serviceFilterTree === 'ALL' ? '' : serviceFilterTree
        const oD = await fetchOkrData(
          treeInterval,
          pf,
          sgf,
          sf,
          filterByEmail,
          userEmail,
          errorToast
        )
        setOkrTreeData(oD)
      }
      setOkrLoading(false)
    })()
  }, [
    treeInterval,
    portfolioFilterTree,
    serviceGFilterTree,
    serviceFilterTree,
    filterByEmail,
    userEmail,
  ])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const gfb = api_types[componentRights?.C_KPI_GRAHPS?.props?.DATA_TYPE]
      if (intervalValue && gfb) {
        const tfb = api_types[componentRights?.C_KPI_TABLE?.props?.DATA_TYPE]
        fetchMiddleWare(
          `KPIDashboard/getChartData/bulk?interval=${intervalValue}&graphsFixedBy=${gfb}&tableFixedBy=${tfb}`
        )
          .then((response) => {
            setKPIBulkData(response)
            setKpiBulkData(response)
          })
          .catch(function (error) {
            if (error) {
              errorToast()
              setError('{bulk} Something went wrong with loading data from server. Please refresh.')
              console.error('error:bulk', error)
            }
          })
      }
      setLoading(false)
    })()
  }, [intervalValue, componentRights])

  // C_KPI_TABLE
  useEffect(() => {
    setLoading(true)
    const tfb = api_types[componentRights?.C_KPI_TABLE?.props?.DATA_TYPE]
    if (intervalValue && tfb) {
      fetchMiddleWare(
        `KPIDashboard/getChartData/bulk?interval=${intervalValue}&tableFixedBy=${tfb}`
      )
        .then((response) => {
          setKpiTableData(response)
        })
        .catch(function (error) {
          if (error) {
            errorToast()
            setError('{bulk} Something went wrong with loading data from server. Please refresh.')
            console.error('error:bulk', error)
          }
        })
      setLoading(false)
    }
  }, [intervalValue, componentRights])

  useEffect(() => {
    let kpiDataFromState = kpiBulkData
    if (kpiBulkData && kpiBulkData.length !== 0) {
      let qualityDataFromServer = kpiDataFromState?.qualityData?.filter(
        (f: any) => f.fixedValue === portfolioValue
      )[0]
      setQualityData({
        data: qualityDataFromServer?.metrics,
        qualityDataPoint:
          qualityDataFromServer?.metrics[qualityDataFromServer?.metrics?.length - 1].metricValue,
        qualityDataDateValue:
          qualityDataFromServer?.metrics[qualityDataFromServer?.metrics.length - 1]?.date,
      })

      let deliverySpeedDataFromServer = kpiDataFromState?.deliverySpeedData?.filter(
        (f: any) => f.fixedValue === portfolioValue
      )[0]
      setDeliverySpeedData({
        data: deliverySpeedDataFromServer?.metrics,
        deliverySpeedDataPoint:
          deliverySpeedDataFromServer?.metrics[deliverySpeedDataFromServer?.metrics.length - 1]
            .metricValue,
        deliverySpeedDateValue:
          deliverySpeedDataFromServer?.metrics[deliverySpeedDataFromServer?.metrics.length - 1]
            ?.date,
      })

      let PrdQualityDataFromServer = kpiDataFromState?.productionQualityData?.filter(
        (f: any) => f.fixedValue === portfolioValue
      )[0]

      setPrdQualityData({
        data: PrdQualityDataFromServer?.metrics,
        prdQualityDataPoint:
          PrdQualityDataFromServer?.metrics[PrdQualityDataFromServer?.metrics.length - 1]
            .metricValue,
        prdQualityDateValue:
          PrdQualityDataFromServer?.metrics[PrdQualityDataFromServer?.metrics.length - 1]?.date,
      })
      /*Table1*/
      setTable1Data(kpiDataFromState.tableData)
    }
  }, [kpiBulkData, portfolioValue])

  if (isLoading) return <LoadingIcon />
  return (
    <DashboardWrapper
      errorToast={errorToast}
      isMega={isMega}
      setError={setError}
      hasError={hasError}
      okrLoading={okrLoading}
      isLoading={isLoading}
      setLoading={setLoading}
      table1Data={table1Data}
      userEmail={userEmail}
      kpiBulkData={kpiBulkData}
      kpiIntervals={kpiIntervals}
      filterByEmail={filterByEmail}
      okrTreeData={okrTreeData}
      treeInterval={treeInterval}
      qualityData={qualityData}
      kpiTableData={kpiTableData}
      intervalLabel={intervalLabel}
      intervalValue={intervalValue}
      intervalsList={intervalsList}
      setTable1Data={setTable1Data}
      portfolioValue={portfolioValue}
      prdQualityData={prdQualityData}
      portfoliosList={portfoliosList}
      filterTermValue={filterTermValue}
      componentRights={componentRights}
      serviceTreeList={serviceTreeList}
      setIntervalValue={setIntervalValue}
      setFilterByEmail={setFilterByEmail}
      setIntervalsList={setIntervalsList}
      setIntervalLabel={setIntervalLabel}
      serviceGroupsList={serviceGroupsList}
      deliverySpeedData={deliverySpeedData}
      serviceFilterTree={serviceFilterTree}
      handleTreeServices={handleTreeServices}
      portfoliosTreeList={portfoliosTreeList}
      setFilterTermValue={setFilterTermValue}
      serviceGFilterTree={serviceGFilterTree}
      handleTreeIntervals={handleTreeIntervals}
      portfolioFilterTree={portfolioFilterTree}
      serviceCatalogueList={serviceCatalogueList}
      handlePortfolioValue={handlePortfolioValue}
      serviceGroupsTreeList={serviceGroupsTreeList}
      handleTreeServiceGroup={handleTreeServiceGroup}
      handleTreePortfolioValue={handleTreePortfolioValue}
      handleServiceGroupValue={handleServiceGroupValue}
    />
  )
}
