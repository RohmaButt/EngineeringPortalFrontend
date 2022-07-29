/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import Tree from 'react-animated-tree-v2'
import Select from 'react-select'
import Tooltip from '@mui/material/Tooltip';

import { ChartsWidget3, TablesWidget9 } from '../../../_metronic/partials/widgets'
import './dashboard-custom.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as LoadingIcon } from "../../../_metronic/assets/logos/loading.svg"
import { useTracking } from 'react-tracking';

import {
  getDarkColorProd,
  getProductionQualityTargetLightColor,
} from './utils/graphColors';
import { getEmail } from '../../modules/auth/Common'
import { KTSVG } from '../../../_metronic/helpers'
import { FeedbackButton } from '../../modules/shared/FeedbackButton/FeedbackButton'
import { ToastContainer } from 'react-toastify'
import { close } from './utils/icons';

const style = {
  control: (base: any) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
  }),
}

const DashboardPage: FC<DashboardProps> = ({
  portfoliosList,
  isLoading,
  portfolioValue,
  isMega,
  serviceGroupsTreeList,
  userEmail,
  intervalLabel,
  // deliverySpeedData,
  kpiIntervals,
  handleTreeServiceGroup,
  // serviceGroupsList,
  okrLoading,
  // serviceCatalogueList,
  serviceTreeList,
  okrTreeData,
  treeInterval,
  handlePortfolioValue,
  portfoliosTreeList,
  handleTreeIntervals,
  handleTreePortfolioValue,
  handleServiceGroupValue,
  setFilterByEmail,
  filterByEmail,
  kpiTableData,
  kpiBulkData,
  // setIntervalValue,
  handleTreeServices,
  serviceFilterTree,
  serviceGFilterTree,
  componentRights,
  // setIntervalLabel,
  qualityData,
  intervalsList,
  portfolioFilterTree,
  filterTermValue,
  prdQualityData,
}) => {
  const [expandTree, setExandTree] = useState(true);
  // use trackEvent to track any activity
  const { trackEvent } = useTracking();

  // tree links which open feedback url in new tab
  const handleHyperLink = (url: string) => {
    if (url) {
      //@ts-ignore
      window?.open(url, '_blank').focus();
    }
  }
  return (
    <>
      {/* begin::Row */}
      <div className='d-flex flex-stack'>
        <div className='w-200px w-md-200px px-1 py-5' style={{ border: 'none' }}>
          {/* Portfolio combo box */}
          <Select
            options={portfoliosList}
            styles={style}
            placeholder={portfolioValue || portfoliosList[0]?.label}
            onChange={(e) => {
              handlePortfolioValue(e)
              trackEvent({
                Path: 'kpi',
                DomSelector: "portfolio-dropdown-input",
              })
            }}
            isLoading={isLoading || !portfoliosList || portfoliosList.length === 0}
          />
        </div>
        <div className='w-200px w-md-200px px-1 py-5' style={{ border: 'none' }}>
          {/* kpi combo box */}
          <Select
            options={kpiIntervals}
            styles={style}
            onChange={(e) => {
              handleServiceGroupValue(e)
              trackEvent({
                Path: 'kpi',
                DomSelector: "intervals-dropdown-input",
              })
            }}
            placeholder={intervalLabel}
            isLoading={!kpiIntervals || kpiIntervals?.length === 0}
          />
        </div>
      </div>
      <div className='row gy-5 g-xl-8'>
        {okrLoading &&
          <div>
            <LoadingIcon width={24} height={24} />
          </div>
        }
        {/* <div className='col-lg-4'>
          <ChartsWidget3
            className='card-xxl-stretch-55 mb-xl-8'
            chartHeight={220}
            portfolioValue={portfolioValue}
            name={
              portfolioValue === 'Mega Voice' ||
                portfolioValue === 'Mega Cloud' ||
                portfolioValue === `Mega Omni` ||
                isMega
                ? 'Delivery Speed Story Points'
                : 'Delivery Speed'
            }

            description={
              portfolioValue === 'Mega Voice' ||
                portfolioValue === 'Mega Cloud' ||
                portfolioValue === `Mega Omni` ||
                isMega
                ? 'Storypoints for User Stories Delivered per Staff per Month'
                : 'User stories delivered per staff per month'
            }
            hideTargetLabel={
              portfolioValue === 'Mega Voice' ||
              portfolioValue === 'Mega Cloud' ||
              portfolioValue === 'Mega Omni' ||
              isMega
            }
            intervalLabel={intervalLabel}
            pointStroke={kpiTableData?.tableData?.deliverySpeedTargetScore === null ? getDarkColor(1) : getDarkColor(deliverySpeedData.deliverySpeedDataPoint)}
            pointFill={kpiTableData?.tableData?.deliverySpeedTargetScore === null ? getLightColor(1) : getLightColor(deliverySpeedData.deliverySpeedDataPoint)}
            table1Data={kpiTableData?.tableData || []}
            targetScore={kpiTableData?.tableData?.deliverySpeedTargetScore || 0}
            data={deliverySpeedData.data || []}
            feedbackLink="https://forms.monday.com/forms/2cc11f2433408cd04040309eb09e1fae?r=use1"
            dataPoint={deliverySpeedData.deliverySpeedDataPoint || 0}
            speedDateValue={deliverySpeedData.deliverySpeedDateValue || 0}
          />
        </div> */}
        <div className='col-lg-6'>
          <ChartsWidget3
            className='card-xxl-stretch-55 mb-xl-8 mb-4'
            chartHeight={220}
            portfolioValue={portfolioValue}
            name='Bugs per US'
            description='Critical & blocker bugs per user story delivered'
            feedbackLink="https://forms.monday.com/forms/556aeaea4bf63638f5a7c8764f29ae94?r=use1"
            pointStroke={kpiTableData?.tableData?.qualityTargetScore === 0 ? getDarkColorProd(0) : getDarkColorProd(qualityData.qualityDataPoint || 0)}
            pointFill={kpiTableData?.tableData?.qualityTargetScore === 0 ? getProductionQualityTargetLightColor(0) : getProductionQualityTargetLightColor(qualityData.qualityDataPoint || 0)}
            table1Data={kpiTableData?.tableData || []}
            hideTarget={kpiTableData?.tableData?.qualityTargetScore === 0}
            intervalLabel={intervalLabel}
            data={qualityData?.data || []}
            targetScore={kpiTableData?.tableData?.qualityTargetScore}
            dataPoint={qualityData.qualityDataPoint || 0}
            speedDateValue={qualityData.qualityDataDateValue || 0}
          />
        </div>
        <div className='col-lg-6'>
          <ChartsWidget3
            className='card-xxl-stretch-55 mb-xl-8 mb-4'
            chartHeight={220}
            portfolioValue={portfolioValue}
            name={
              portfolioValue === 'Mega Voice' ||
                portfolioValue === 'Mega Cloud' ||
                portfolioValue === `Mega Omni` ||
                isMega
                ? 'QA Lead Time'
                : 'Prod Bugs per US '
            }
            description={
              portfolioValue === 'Mega Voice' ||
                portfolioValue === 'Mega Cloud' ||
                portfolioValue === `Mega Omni` ||
                isMega
                ? 'Average time (days) spent in QA Testing'
                : 'Critical & blocker production bugs per user story delivered'
            }
            hideTargetLabel={
              portfolioValue === 'Mega Voice' ||
              portfolioValue === 'Mega Cloud' ||
              portfolioValue === 'Mega Omni' ||
              isMega
            }
            pointStroke={kpiTableData?.tableData?.productionQualityTargetScore === 0 ? getDarkColorProd(0) : getDarkColorProd(prdQualityData.prdQualityDataPoint)}
            pointFill={kpiTableData?.tableData?.productionQualityTargetScore === 0 ? getProductionQualityTargetLightColor(0) : getProductionQualityTargetLightColor(prdQualityData.prdQualityDataPoint)}
            table1Data={kpiTableData?.tableData || []}
            hideTarget={kpiTableData?.tableData?.productionQualityTargetScore === 0}
            intervalLabel={intervalLabel}
            feedbackLink="https://forms.monday.com/forms/e7c525c11a437a8aecc49509570cf18b?r=use1"
            targetScore={kpiTableData?.tableData?.productionQualityTargetScore || 0}
            data={prdQualityData?.data || []}
            dataPoint={prdQualityData?.prdQualityDataPoint || 0}
            speedDateValue={prdQualityData?.prdQualityDateValue || 0}
          />
        </div>
      </div>
      {/* Service table */}
      <TablesWidget9
        className='mb-5 mb-xl-8'
        tableName={componentRights?.C_KPI_TABLE?.props?.DATA_TYPE}
        portfName={"Bugs per US"}
        prdName={
          portfolioValue === 'Mega Voice' ||
            portfolioValue === 'Mega Cloud' ||
            portfolioValue === `Mega Omni` || isMega
            ? 'QA Lead Time'
            : 'Prod Bugs per US '
        }
        hideTargetLabel={
          portfolioValue === 'Mega Voice' ||
          portfolioValue === 'Mega Cloud' ||
          portfolioValue === 'Mega Omni' ||
          isMega
        }
        table1Data={kpiBulkData?.tableData?.data.filter((f: any) => f.filterTerm === filterTermValue)}
        deliverySpeedTargetScore={kpiTableData?.tableData?.deliverySpeedTargetScore}
        productionQualityTargetScore={kpiTableData?.tableData?.productionQualityTargetScore}
        qualityTargetScore={kpiTableData?.tableData?.qualityTargetScore}
      />
      <div className={`card mb-5 mb-xl-8`}>
        {/* begin::Header */}

        <div className='card-header border-0'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-6'> OKR (Objectives and Key Results)</span>
            {/* <span className='text-muted mt-1 fw-bold fs-7'>Over 500 members</span> */}
          </h3>
        </div>
        <div className='card-header border-0'>
          <div className='mw-600px pb-5' style={{
            display: 'flex',
            border: 'none',
            flexDirection: 'row',
          }}>

            <div className='mw-250px py-5' style={{ marginRight: '6px' }}>
              <Select
                isClearable={true}
                options={portfoliosTreeList}
                defaultValue={portfolioFilterTree}
                placeholder='Portfolio'
                onChange={(e) => {
                  trackEvent({
                    Path: 'kpi',
                    DomSelector: "portfolio-kpi-dropdown-input",
                  })
                  handleTreePortfolioValue(e)
                }}
                isLoading={isLoading || portfoliosList.length === 0}
              />
            </div>
            <div className='mw-250px py-5' style={{ marginRight: '6px' }} >
              <Select
                isClearable={true}
                options={serviceGroupsTreeList}
                onChange={(e) => {
                  trackEvent({
                    Path: 'kpi',
                    DomSelector: "service-group-okr-dropdown-input",
                  })
                  handleTreeServiceGroup(e)
                }}
                placeholder='Service Group'
                isLoading={isLoading}
              />
            </div>
            <div className='mw-250px py-5' >
              <Select
                isClearable={true}
                options={serviceTreeList}
                onChange={(e) => {
                  trackEvent({
                    Path: 'kpi',
                    DomSelector: "service-okr-dropdown-input",
                  })
                  handleTreeServices(e)
                }}
                placeholder='Service'
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid pb-5'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              name='filteremail'
              defaultChecked={filterByEmail}
              onChange={() => {
                trackEvent({
                  Path: 'kpi',
                  DomSelector: "filter-by-email-okr-toggle-kpi",
                })
                setFilterByEmail(!filterByEmail)
              }}
            />
            <label className='form-check-label'>Only My Objectives</label>
          </div>
          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid  pb-5'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              name='notifications'
              style={{ marginLeft: '18px' }}
              defaultChecked={expandTree}
              onChange={() => {
                trackEvent({
                  Path: 'kpi',
                  DomSelector: "expand-tree-okr-toggle-kpi",
                })
                setExandTree(!expandTree)
              }}
            />
            <label className='form-check-label'>Expand Tree</label>
          </div>
          <div className='pb-5' >
            <Select
              defaultValue={treeInterval}
              options={intervalsList}
              onChange={(e) => {
                trackEvent({
                  Path: 'kpi',
                  DomSelector: "tree-interval-okr-dropdown",
                })
                handleTreeIntervals(e)
              }}
              placeholder={treeInterval}
              isLoading={isLoading || intervalsList.length === 0}
            />
          </div>
        </div>
        <div className='card-xxl-stretch-55 mb-xl-8 tree-table px-8' style={{ paddingLeft: '3px', width: '100%' }}>
          <FeedbackButton
            link={'https://forms.monday.com/forms/bcd061a0857903d9a79a5363827ed640?r=use1'}
            containerStyle={{
              position: 'absolute',
              right: '13px',
              top: '12px',
              zIndex: 9,
              opacity: 0.3,
            }} />
          {okrLoading && (<span className='indicator-progress' style={{ display: 'block', }}>
            Fetching OKR data...{' '}
            <span className='spinner-border spinner-border-sm align-center ms-2'></span>
          </span>)}
          {okrTreeData && okrTreeData.map((item: any, index: any) => {
            return (
              <Tree icons={{ closeIcon: close }} itemId={index} content={<><Tooltip placement='top' title="please double click to go to Jira"><span className='fs-7 fw-bolder font-family-tree bword' ><KTSVG path="/media/menuIcons/users-solid.svg" className='svg-icon-4 px-2' />{item.portfolio}</span></Tooltip></>} canHide={false} open={expandTree} >
                <div onDoubleClick={() => {
                  trackEvent({
                    Path: 'kpi',
                    DomSelector: "issue-link-portfolioOkrIssueLink",
                  })
                  handleHyperLink(item?.portfolioOkrIssueLink)
                }}>
                  <Tree icons={{ closeIcon: close }} itemId={index + 1} content={<><Tooltip placement='top' title="please double click to go to Jira"><span className='bword'>{item.portfolioOkrDesc}</span></Tooltip></>} open={expandTree}>
                    {item.serviceGroupOkrs && (
                      //@ts-ignore
                      <Tree icons={{ closeIcon: close }} content={<span className='fs-7 fw-bolder font-family-tree bword'><KTSVG path="/media/menuIcons/users-solid.svg" className='svg-icon-4 px-2' />{item?.serviceGroupOkrs[0].serviceGroup} </span>} open={expandTree}>
                        {item.serviceGroupOkrs && item.serviceGroupOkrs.map((child: any) => {
                          return (
                            <div onDoubleClick={() => {
                              trackEvent({
                                Path: 'kpi',
                                DomSelector: "issue-link-serviceGroupOkrIssueLink",
                              })
                              handleHyperLink(child?.serviceGroupOkrIssueLink)
                            }}>
                              <Tree itemId={index + 2} icons={{ closeIcon: close }} content={<><Tooltip placement='top' title="please double click to go to Jira"><span className='bword'>{child.serviceGroupOkrDesc}</span></Tooltip></>} open={expandTree}>
                                {child?.serviceOkrs && child.serviceOkrs.map((serviceOkr: any) => {
                                  return (
                                    <Tree itemId={index + 3} icons={{ closeIcon: close }} content={<span className='fs-7 fw-bolder font-family-tree bword'><KTSVG path="/media/menuIcons/users-solid.svg" className='svg-icon-4 px-2' />{serviceOkr?.service}</span>} open={expandTree} >
                                      {/* @ts-ignore */}
                                      <Tooltip placement='top' title="please double click to go to Jira">
                                        <div onDoubleClick={() => {
                                          trackEvent({
                                            Path: 'kpi',
                                            DomSelector: "issue-link-serviceOkrIssueLink",
                                          })
                                          handleHyperLink(serviceOkr?.serviceOkrIssueLink)
                                        }}>
                                          <Tree itemId={index + 3} icons={{ closeIcon: close }} content={serviceOkr.serviceOkrDesc} />
                                        </div>
                                      </Tooltip>
                                    </Tree>
                                  )
                                })}
                              </Tree>
                            </div>
                          )
                        })}
                      </Tree>
                    )}
                  </Tree>
                </div>
              </Tree>
            )
          })}
          {/* case when no content is available  */}
          {!okrLoading && okrTreeData && okrTreeData.length === 0 &&
            <Tree icons={{ closeIcon: close }} itemId={'0'} content={`No data for ${treeInterval} ${portfolioFilterTree !== 'ALL' && !filterByEmail ? portfolioFilterTree : ''} ${serviceGFilterTree !== 'ALL' && !filterByEmail ? serviceGFilterTree : ''} ${serviceFilterTree !== 'ALL' && !filterByEmail ? serviceFilterTree : ''} ${filterByEmail && userEmail ? userEmail : getEmail()}`} />
          }
        </div>
      </div>
    </>
  )
}
//Props
interface DashboardProps {
  isMega: boolean
  table1Data: any
  qualityData: any
  isLoading: boolean
  hasError: string
  treeInterval: string
  kpiTableData: any
  kpiBulkData: any
  errorToast: any
  okrTreeData?: any[]
  filterByEmail: boolean
  prdQualityData: any
  portfoliosList: any[]
  componentRights: any
  intervalsList: any[]
  setFilterByEmail: any
  serviceGFilterTree: string
  serviceFilterTree: string
  serviceTreeList: any[]
  okrLoading: boolean;
  intervalLabel: string
  userEmail: string
  portfolioValue: string
  filterTermValue: string
  deliverySpeedData: any
  intervalValue?: string
  kpiIntervals?: any[]
  serviceGroupsList: any
  serviceCatalogueList: any[]
  handleTreeIntervals: any
  portfoliosTreeList: any[]
  setError: (value: any) => void
  portfolioFilterTree: string
  setLoading: (value: any) => void
  serviceGroupsTreeList: any
  setTable1Data: (value: any) => void
  setIntervalsList: (value: any) => void
  setIntervalValue: (value: any) => void
  setIntervalLabel: (value: any) => void
  setFilterTermValue: (value: any) => void
  handlePortfolioValue: (value: string) => void
  handleTreePortfolioValue: (value: any) => void
  handleTreeServiceGroup: (value: any) => void
  handleTreeServices: (value: any) => void
  handleServiceGroupValue: (value: string) => void;
}
const DashboardWrapper: FC<DashboardProps> = ({ ...props }) => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage {...props} />
      <ToastContainer />
    </>
  )
}

export { DashboardWrapper }
