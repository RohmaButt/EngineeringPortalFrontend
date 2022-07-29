import moment from "moment"
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete';
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import { useEffect, useState } from "react";
import { getAllPeriodDataFromDB } from "../../shared/Services/timeSheetService";
import { toast, ToastContainer } from 'react-toastify'

const TimesheetDataTable = () => {
    const [lookupData, setLookupData] = useState<any[]>([])

    useEffect(() => {
        ; (async () => {
            await getAllPeriodDataFromDB()
                .then((response: any) => {
                    if (response != null) {
                        console.log('response', response)
                        setLookupData(
                            response.map((item: any) => {
                                return {
                                    id: item.id,
                                    isActive: item.isActive,
                                    periodStartDate: item.periodStartDate,
                                    periodEndDate: item.periodEndDate,
                                    lockStatus: item.lockStatus,
                                    modifyDate: item.modifyDate,
                                    modifyUser: item.modifyUser
                                }
                            })
                        )
                    }
                })
                .catch((error: any) => {
                    toast.error('Something went wrong. Please reload page or contact BI team')
                    console.error('Exception happened:getAllPeriodDataFromDB', error)
                })

        })()
    }, [])
    return (
        <div className='card-body py-2'>
            <div className='table-responsive'>
                {/* <h3 className='card-title align-items-start' style={{ width: '20rem' }}>
                    <span className='text-muted mt-1 fw-bolder fs-5 text-hover-primary'>
                        {moment().format('ddd MMM DD YYYY')} - {moment().format('ddd MMM DD YYYY')}
                    </span>
                </h3> */}
                <table className='table table-row-bordered table-row-gray-300 align-middle gs-0 gy-1'>
                    <thead>
                        <tr className='fw-bolder text-start text-muted'>
                            <th className='min-w-10px text-hover-primary'>Key</th>
                            <th className='min-w-10px text-hover-primary'>Summary</th>
                            <th className='min-w-10px text-hover-primary'>Week 1</th>
                            <th className='min-w-10px text-hover-primary'>Week 2</th>
                            <th className='min-w-10px text-hover-primary'>Week 3</th>
                            <th className='min-w-10px text-hover-primary'>Week 4</th>
                            <th className='min-w-10px text-hover-primary'>Week 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lookupData
                            .sort((a: any, b: any) => moment(b.periodStartDate).weeks() - moment(a.periodStartDate).weeks())
                            .map((item: any) => {
                                return (
                                    <tr key={item.id}>
                                        <td className='text-start'>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                    ADM-TIME
                                                </span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                    Time keeping and Administration
                                                </span>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            <div className='d-flex justify-content-start flex-row'>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Double click to edit
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <EditableContainer
                                                            id='name'
                                                            doubleClick={true}
                                                            handleEnter={(e: any) => {
                                                                console.log('handleEntersfdfd', e)
                                                                ///   handleSidRegion(e, regionItem.id)
                                                            }}
                                                            className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                                                        >
                                                            10 %
                                                            {/* {regionItem.name} */}
                                                        </EditableContainer>
                                                    </span>
                                                </Tooltip>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Click to delete logged hours
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <DeleteIcon fontSize="small" color="primary" />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            <div className='d-flex justify-content-start flex-row'>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Double click to edit
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <EditableContainer
                                                            id='name'
                                                            doubleClick={true}
                                                            handleEnter={(e: any) => {
                                                                console.log('handleEntersfdfd', e)
                                                                ///   handleSidRegion(e, regionItem.id)
                                                            }}
                                                            className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                                                        >
                                                            10 %
                                                            {/* {regionItem.name} */}
                                                        </EditableContainer>
                                                    </span>
                                                </Tooltip>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Click to delete logged hours
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <DeleteIcon fontSize="small" color="primary" />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            <div className='d-flex justify-content-start flex-row'>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Double click to edit
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <EditableContainer
                                                            id='name'
                                                            doubleClick={true}
                                                            handleEnter={(e: any) => {
                                                                console.log('handleEntersfdfd', e)
                                                                ///   handleSidRegion(e, regionItem.id)
                                                            }}
                                                            className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                                                        >
                                                            10 %
                                                            {/* {regionItem.name} */}
                                                        </EditableContainer>
                                                    </span>
                                                </Tooltip>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Click to delete logged hours
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <DeleteIcon fontSize="small" color="primary" />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            <div className='d-flex justify-content-start flex-row'>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Double click to edit
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <EditableContainer
                                                            id='name'
                                                            doubleClick={true}
                                                            handleEnter={(e: any) => {
                                                                console.log('handleEntersfdfd', e)
                                                                ///   handleSidRegion(e, regionItem.id)
                                                            }}
                                                            className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                                                        >
                                                            10 %
                                                            {/* {regionItem.name} */}
                                                        </EditableContainer>
                                                    </span>
                                                </Tooltip>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Click to delete logged hours
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <DeleteIcon fontSize="small" color="primary" />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </td>
                                        <td className='text-start'>
                                            <div className='d-flex justify-content-start flex-row'>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Double click to edit
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <EditableContainer
                                                            id='name'
                                                            doubleClick={true}
                                                            handleEnter={(e: any) => {
                                                                console.log('handleEntersfdfd', e)
                                                                ///   handleSidRegion(e, regionItem.id)
                                                            }}
                                                            className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                                                        >
                                                            10 %
                                                            {/* {regionItem.name} */}
                                                        </EditableContainer>
                                                    </span>
                                                </Tooltip>
                                                <Tooltip
                                                    title={
                                                        <span
                                                            style={{
                                                                padding: '6px 6px',
                                                                borderRadius: '6px',
                                                            }}
                                                        >
                                                            Click to delete logged hours
                                                        </span>
                                                    }
                                                    placement='top'
                                                >
                                                    <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                                                        <DeleteIcon fontSize="small" color="primary" />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TimesheetDataTable