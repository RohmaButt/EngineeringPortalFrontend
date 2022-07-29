import { IDataTableProps } from 'react-data-table-component'
import {KTSVG} from '../../../../_metronic/helpers'

const DataTable: React.FC = () => {
  return (
    <>
      <div className='card-header border-0 pt-5'>
        {/*     
//     
//         <h3 className='card-title align-items-start flex-column'>
//           <span className='card-label fw-bolder fs-3 mb-1'>Resource Model Roles</span>
//           <span className='text-muted mt-1 fw-bold fs-7'>
//             {props.data.length || 0} model roles
//           </span>
//         </h3>
//         <div
//           className='card-toolbar'
//           data-bs-toggle='tooltip'
//           data-bs-placement='top'
//           data-bs-trigger='hover'
//           title='Click to add a user'
//         >
//           <button
//             className='btn btn-sm btn-light-primary me-4'
//             onClick={() => {
//               setToggleNewResounceModel(true)
//             }}
//           >
//             <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />+ New Model
//             Role
//           </button>
//           <button
//             className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
//             onClick={() => {
//               setConfirmationOpen(0)
//               trackEvent({
//                 Path: 'delete-region-confirmation-call',
//                 DomSelector: 'submit-delete-region-confirmation-button',
//               })
//             }}
//           >
//             <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
//           </button>
//         </div>
//       </div>
//       <div className='card-body py-3'>
//         <div className='table-responsive'>
//           <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
//             <thead>
//               <tr className='fw-bolder text-muted'>
//                 <th className='w-25px'>
//                   <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                     <input
//                       className='form-check-input'
//                       type='checkbox'
//                       onChange={toggleDeleteCheckForAll}
//                       checked={deleteAllCheck}
//                     />
//                   </div>
//                 </th>
//                 <th className='min-w-140px text-hover-primary'>Role Resource Model</th>
//                 <th className='min-w-150px text-hover-primary'>Role Group Name</th>
//                 <th className='min-w-140px text-hover-primary'>Paycom Sub Department</th>
//                 <th className='min-w-120px text-hover-primary'>Status</th>
//                 <th className='min-w-120px text-hover-primary'>Is Dedicated</th>
//                 <th className='min-w-120px text-hover-primary'>Shifts</th>
//                 <th className='min-w-100px text-end'></th>
//               </tr>
//             </thead>
//             <tbody>
//               {props.data
//                 .sort((a, b) => a.id - b.id)
//                 .map((resourceRoleItem: IResourceModelRole) => {
//                   return (
//                     <tr key={resourceRoleItem.id}>
//                       <td>
//                         <div className='form-check form-check-sm form-check-custom form-check-solid'>
//                           <input
//                             className='form-check-input'
//                             type='checkbox'
//                             key={'deleteCheckbox_' + resourceRoleItem.id}
//                             checked={resourceRoleItem.deleteCheck}
//                             onChange={(e) => toggleDeleteCheck(e, resourceRoleItem.id)}
//                           />
//                         </div>
//                       </td>
//                       <td className='text-start'>
//                         <div className='d-flex justify-content-start flex-column'>
//                           <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
//                             <EditableContainer
//                               id='roleResourceModel'
//                               doubleClick={true}
//                               handleEnter={(e: any) =>
//                                 handleRoleResourceModelPatch(
//                                   e,
//                                   resourceRoleItem.id,
//                                   'roleResourceModel'
//                                 )
//                               }
//                               className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
//                             >
//                               {resourceRoleItem.roleResourceModel}
//                             </EditableContainer>
//                           </span>
//                           <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
//                             {resourceRoleItem.id}
//                           </span>
//                         </div>
//                       </td>
//                       <td className='text-start'>
//                         <div className='d-flex justify-content-start flex-column'>
//                           <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
//                             <EditableCreateableSelect
//                               doubleClick={true}
//                               id='roleGroupName'
//                               data={resourceModelGroups}
//                               itemId={resourceRoleItem.roleGroupId}
//                               selectedValue={resourceRoleItem.roleGroupName}
//                               onChange={(e: any) => {
//                                 handleRoleResourceModelPatch(
//                                   e,
//                                   resourceRoleItem.id,
//                                   'roleGroupName'
//                                 )
//                                 trackEvent({
//                                   Path: 'resource-model-mapping',
//                                   DomSelector: 'resource-model-mapping-roleGroup-input',
//                                 })
//                               }}
//                             >
//                               {resourceRoleItem.roleGroupName}
//                             </EditableCreateableSelect>
//                           </span>
//                           <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
//                             {resourceRoleItem.roleGroupId}
//                           </span>
//                         </div>
//                       </td>
//                       <td className='text-start'>
//                         <div className='d-flex justify-content-start flex-column'>
//                           <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
//                             <EditableDDL
//                               doubleClick={true}
//                               id='paycomSubDepartment'
//                               data={departmentsData}
//                               itemId={resourceRoleItem.paycomSubDepartment}
//                               selectedValue={getDeptName(resourceRoleItem.paycomSubDepartment)}
//                               onChange={(e: any) => {
//                                 handleRoleResourceModelPatch(
//                                   e,
//                                   resourceRoleItem.id,
//                                   'paycomSubDepartment'
//                                 )
//                                 trackEvent({
//                                   Path: 'resource-model-mapping',
//                                   DomSelector: 'resource-model-mapping-dept-input',
//                                 })
//                               }}
//                             >
//                               {getDeptName(resourceRoleItem.paycomSubDepartment)}
//                             </EditableDDL>
//                           </span>
//                           <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
//                             {resourceRoleItem.paycomSubDepartment}
//                           </span>
//                         </div>
//                       </td>
//                       <td className='text-start'>
//                         <div className='d-flex justify-content-start flex-column'>
//                           <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
//                             <EditableDDL
//                               doubleClick={true}
//                               id='status'
//                               data={statusData}
//                               itemId={resourceRoleItem.status}
//                               selectedValue={getStatus(resourceRoleItem.status)}
//                               onChange={(e: any) => {
//                                 handleRoleResourceModelPatch(e, resourceRoleItem.id, 'status')
//                                 trackEvent({
//                                   Path: 'resource-model-mapping',
//                                   DomSelector: 'resource-model-mapping-status-input',
//                                 })
//                               }}
//                             >
//                               {getStatus(resourceRoleItem.status)}
//                             </EditableDDL>
//                           </span>
//                         </div>
//                       </td>
//                       <td className='text-start'>
//                         <div className='d-flex justify-content-start flex-column'>
//                           <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
//                             <EditableDDL
//                               doubleClick={true}
//                               id='isDedicated'
//                               data={dedicatedData}
//                               itemId={resourceRoleItem.isDedicated}
//                               selectedValue={resourceRoleItem.isDedicated}
//                               onChange={(e: any) => {
//                                 handleRoleResourceModelPatch(e, resourceRoleItem.id, 'isDedicated')
//                                 trackEvent({
//                                   Path: 'resource-model-mapping',
//                                   DomSelector: 'resource-model-mapping-dedicated-input',
//                                 })
//                               }}
//                             >
//                               {resourceRoleItem.isDedicated}
//                             </EditableDDL>
//                           </span>
//                         </div>
//                       </td>
//                       <td className='text-start'>
//                         <div className='d-flex justify-content-start flex-column'>
//                           <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
//                             <EditableDDL
//                               doubleClick={true}
//                               id='shifts'
//                               data={shiftsData}
//                               itemId={resourceRoleItem.shifts}
//                               selectedValue={resourceRoleItem.shifts}
//                               onChange={(e: any) => {
//                                 handleRoleResourceModelPatch(e, resourceRoleItem.id, 'shifts')
//                                 trackEvent({
//                                   Path: 'resource-model-mapping',
//                                   DomSelector: 'resource-model-mapping-shifts-input',
//                                 })
//                               }}
//                             >
//                               {resourceRoleItem.shifts}
//                             </EditableDDL>
//                           </span>
//                         </div>
//                       </td>
//                       <td>
//                         <div className='d-flex justify-content-end flex-shrink-0'>
//                           <button
//                             className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
//                             onClick={() => {
//                               setConfirmationOpen(resourceRoleItem.id)
//                               trackEvent({
//                                 Path: 'delete-resource-model-mapping-confirmation-call',
//                                 DomSelector:
//                                   'submit-delete-resource-model-mapping-confirmation-button',
//                               })
//                             }}
//                           >
//                             <KTSVG
//                               path='/media/icons/duotune/general/gen027.svg'
//                               className='svg-icon-3'
//                             />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   )
//                 })}
//             </tbody>
//           </table>
//         </div> */}
      </div>
    </>
  )
}

export {DataTable}
