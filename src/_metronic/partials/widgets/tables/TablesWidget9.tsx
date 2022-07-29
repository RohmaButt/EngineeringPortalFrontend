/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { FeedbackButton } from '../../../../app/modules/shared/FeedbackButton/FeedbackButton';
import { getDarkColorProd } from '../../../../app/pages/dashboard/utils/graphColors';
import Tooltip from '@mui/material/Tooltip';

type Props = {
  className: string
  portfName?: string
  tableName?: any
  prdName?: string
  hideTargetLabel?: boolean
  table1Data?: any
  deliverySpeedTargetScore?: string | number
  productionQualityTargetScore?: number
  qualityTargetScore?: string | number
}
const svt: any = {
  SERVICE_GROUP: "SERVICE GROUP",
  PORTFOLIO: "PORTFOLIO",
  SERVICE: "SERVICE"
};

const TablesWidget9: React.FC<Props> = (props: Props) => {

  const {
    className,
    // portfName,
    prdName,
    table1Data,
    // hideTargetLabel,
    // deliverySpeedTargetScore,
    tableName,
    productionQualityTargetScore = 0,
    qualityTargetScore,
  } = props
  const [order, setOrder] = useState(true);
  const [sortType, setSortType] = useState('');
  
  useEffect(() => {
    if (table1Data) sortTable(sortType);
  }, [table1Data])

  const [data, setData] = useState(table1Data);
  const sortTable = (sortType: any) => {
    setSortType(sortType);
    if (table1Data) {
      switch (sortType) {
        case "deliverySpeedMetric":
          setOrder(!order);
          setData([
            ...table1Data.sort((a: any, b: any) => {
              return order
                ? a.deliverySpeedMetric - b.deliverySpeedMetric
                : b.deliverySpeedMetric - a.deliverySpeedMetric;
            }),
          ]);
          break;
        case "ServiceGroups":
          setOrder(!order);
          if (order) {
            setData([
              ...table1Data.sort((a: any, b: any) =>
                a.fixedValue.localeCompare(b.fixedValue)
              ),
            ]);
          } else {
            setData([
              ...table1Data.sort((a: any, b: any) =>
                b.fixedValue.localeCompare(a.fixedValue)
              ),
            ]);
          }

          break;
        case "qualityMetric":
          setOrder(!order);
          setData([
            ...table1Data.sort((a: any, b: any) => {
              return order
                ? a.qualityMetric - b.qualityMetric
                : b.qualityMetric - a.qualityMetric;
            }),
          ]);

          break;
        case "productionQualityMetric":
          setOrder(!order);
          setData([
            ...table1Data.sort((a: any, b: any) => {
              return order
                ? a.productionQualityMetric - b.productionQualityMetric
                : b.productionQualityMetric - a.productionQualityMetric;
            }),
          ]);

          break;
        default:
      }
    }
  };
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-6 mb-1'>{svt[tableName] || ""}</span>
          {/* <span className='text-muted mt-1 fw-bold fs-7'>Over 500 members</span> */}
        </h3>
        {/* <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            New Member
          </span>
        </div> */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <FeedbackButton
            link={'https://forms.monday.com/forms/e6bd3778c478caac11abd6336ce4b605?r=use1'}
            containerStyle={{
              position: 'absolute',
              right: '13px',
              top: '24px',
              zIndex: 9,
              opacity: 0.3,
            }} />
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-120px pb-10' onClick={() => sortTable("ServiceGroups")} style={{ cursor: 'pointer' }}>{svt[tableName] || ""}</th>
                {/* <th className='min-w-140px' onClick={() => sortTable("deliverySpeedMetric")} style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  flexDirection: 'column',
                  borderBottom: '0px'
                }}>
                  {portfName}
                    <span className='text-muted fw-bold fs-7' >
                      {'target >= 1'}
                      {Number(deliverySpeedTargetScore).toFixed(1) || 0.0}
                    </span>
                  
                </th> */}
                <th className='min-w-120px pb-10' onClick={() => sortTable("qualityMetric")} >
                  <Tooltip title="Critical & blocker production bugs per user story delivered" placement="top">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      flexDirection: 'column',
                    }}>
                      Bugs per US
                    </div >
                  </Tooltip>
                  {/* <span className='text-muted fw-bold fs-7' style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    flexDirection: 'column',
                    borderBottom: '0px'
                  }}>
                    {'target <= 0.5'}
                    {Number(qualityTargetScore).toFixed(1) || 0.0}
                  </span> */}
                </th>
                <Tooltip placement="top" title={prdName === "Prod Bugs per US" ? "Critical & blocker production bugs per user story delivered" : "Average time (days) spent in QA Testing"}>
                  <th
                    onClick={() => sortTable("productionQualityMetric")}
                    className='min-w-100px'
                    style={{
                      display: 'flex',
                      cursor: 'pointer',
                      borderBottom: '0px',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    {prdName}
                    {/* {!hideTargetLabel &&
                    <span className='text-muted fw-bold d-flex justify-content-start fs-7'>
                      {'target <= 0.5'}
                      {Number(productionQualityTargetScore).toFixed(1) || 0.0}
                    </span>
                  } */}
                  </th>
                </Tooltip>
              </tr>
            </thead>
            <tbody>
              {table1Data?.map((item: any) => {
                return (
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-dark text-hover-primary fs-7'>
                            {item?.fixedValue}
                          </span>
                        </div>
                      </div>
                    </td>
                    {/* <td>
                      <span className='fw-bold fs-7' style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: `${item?.deliverySpeedMetric < 1 && deliverySpeedTargetScore !== null ? 'red' : '#51ad51'}`,
                        flexDirection: 'column',
                      }}>
                        {item?.deliverySpeedMetric}
                      </span>
                    </td> */}
                    <td>
                      <span className='fw-bold fs-7' style={{
                        display: 'flex',
                        color: qualityTargetScore === 0 ? getDarkColorProd(0) : getDarkColorProd(item?.qualityMetric || 0),
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}>
                        <Tooltip title={<span>Critical & blocker production bugs per user story delivered</span>} placement="left-start">
                          <span>
                            {Math.fround(Number(item?.qualityMetric * 100))}%{' '}
                          </span>
                        </Tooltip>
                      </span>
                    </td>
                    <td>
                      <span
                        className='fw-bold fs-7'
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: productionQualityTargetScore === 0 ? getDarkColorProd(0) : getDarkColorProd(item?.productionQualityMetric),
                          flexDirection: 'column',
                        }}
                      >
                        <Tooltip placement="left-start" title={prdName === "Prod Bugs per US" ? "Critical & blocker production bugs per user story delivered" : "Average time (days) spent in QA Testing"}>
                          <span>
                            {prdName !== 'QA Lead Time' && `${Math.fround(Number(item?.productionQualityMetric * 100))}%`}
                            {prdName === 'QA Lead Time' && item?.productionQualityMetric}
                          </span>
                        </Tooltip>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export { TablesWidget9 }
