import {fetchMiddleWare} from '../../../pages/dashboard/utils/apiMiddleWare'

export const getResourceModelRolesFromDB = async () => {
  return await fetchMiddleWare(`ResourceModelRoles/GetAllResourceModelRoles`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getResourceModelRolesFromDB', error)
        return error
      }
    })
}

export const getEmployeeSwitchKnowledgeFromDB = async () => {
  return await fetchMiddleWare(`EmployeeSwitchKnowledge/GetAllEmployeeSwitchKnowledge`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getEmployeeSwitchKnowledgeFromDB', error)
        return error
      }
    })
}
