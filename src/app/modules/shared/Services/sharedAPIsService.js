import { fetchMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'

/*All common API calls are residing here in this service class*/
export const getPaycomEmployeesFromDB = async () => {
  return await fetchMiddleWare(`OrganizationChart/GetAllUsers`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getPaycomEmployeesFromDB', error)
        return error
      }
    })
}

export const getAllSIDRegionsFromDB = async (url) => {
  return await fetchMiddleWare(`SidRpRegions/GetAllSidRpRegions/${url}`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getAllSIDRegionsFromDB', error)
        return error
      }
    })
}

export const getAllSIDRolesFromDB = async () => {
  return await fetchMiddleWare(`Lookups/GetRoles?teamName=SID`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getAllSIDRolesFromDB', error)
        return error
      }
    })
}

export const getAcctRegionMappingFromDB = async () => {
  return await fetchMiddleWare(`AccountRegionMapping/GetAllAccountRegionMapping`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getAcctRegionMappingFromDB', error)
        return error
      }
    })
}

export const getEmployeesRegionMappingFromDB = async () => {
  return await fetchMiddleWare(`EmployeeRegionMapping/GetAllEmployeeRegionMapping`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getAcctRegionMappingFromDB', error)
        return error
      }
    })
}

export const getEmployeesRoleMappingFromDB = async () => {
  return await fetchMiddleWare(`EmployeeRoleMapping/GetAllEmployeeRoleMapping`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getEmployeesRoleMappingFromDB', error)
        return error
      }
    })
}

export const getPaycomDepartmentsFromDB = async () => {
  return await fetchMiddleWare(`Lookups/GetPaycomDepartmentsInfo`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getPaycomDepartmentsFromDB', error)
        return error
      }
    })
}

export const getResourceModelGroupsFromDB = async () => {
  return await fetchMiddleWare(`Lookups/GetGroups`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetGroups', error)
        return error
      }
    })
}

export const getSIDEmplpyeesFromDB = async () => {
  return await fetchMiddleWare(`Lookups/GetSIDEmployees`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetGroups', error)
        return error
      }
    })
}

export const GetSwitchPlatforms = async () => {
  return await fetchMiddleWare(`Lookups/GetSwitchPlatforms`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetSwitchPlatforms', error)
        return error
      }
    })
}

export const GetSwitchProviders = async () => {
  return await fetchMiddleWare(`Lookups/GetSwitchProviders`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetSwitchProviders', error)
        return error
      }
    })
}

export const getEmployeesSwitchKnowledgeMappingFromDB = async () => {
  return await fetchMiddleWare(`EmployeeSwitchKnowledge/GetAllEmployeeSwitchKnowledge`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:getEmployeesSwitchKnowledgeMappingFromDB', error)
        return error
      }
    })
}

export const GetSwitchPlatformsKnowledgeHeader = async () => {
  return await fetchMiddleWare(`EmployeeSwitchKnowledge/GetSwitchPlatformsKnowledgeHeader`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetSwitchPlatformsKnowledgeHeader', error)
        return error
      }
    })
}

export const GetJiraIssueCategories = async () => {
  return await fetchMiddleWare(`Lookups/GetJiraIssueCategories`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetJiraIssueCategories', error)
        return error
      }
    })
}

export const GetJiraIssueTypes = async () => {
  return await fetchMiddleWare(`Lookups/GetJiraIssueTypes`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetJiraIssueTypes', error)
        return error
      }
    })
}

export const GetHermesAccountsForJiraIssues = async () => {
  return await fetchMiddleWare(`Lookups/GetHermesAccountsForJiraIssues`)
    .then((response) => {
      if (response != null) {
        return response
      }
    })
    .catch(function (error) {
      if (error) {
        console.error('error:GetHermesAccountsForJiraIssues', error)
        return error
      }
    })
}