import { fetchMiddleWare } from "../../../pages/dashboard/utils/apiMiddleWare"


export const getResourceModelProductsFromDB = async () => {
    return await fetchMiddleWare(`RmProducts/GetAllProducts`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:getResourceModelProductsFromDB', error)
                return error
            }
        })
}

export const getResourceModelRevenueBracketsFromDB = async () => {
    return await fetchMiddleWare(`RmRevenueBrackets/GetAllRevenueBrackets`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:getResourceModelRevenueBracketsFromDB', error)
                return error
            }
        })
}

export const getRolesFromDB = async () => {
    return await fetchMiddleWare(`RmRoles/GetAllRoles`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:getRolesFromDB', error)
                return error
            }
        })
}


export const GetDepartments = async () => {
    return await fetchMiddleWare(`Lookups/GetDepartments`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:GetDepartments', error)
                return error
            }
        })
}


export const GetSubDepartments = async () => {
    return await fetchMiddleWare(`Lookups/GetSubDepartments`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:GetSubDepartments', error)
                return error
            }
        })
}


export const GetTeams = async () => {
    return await fetchMiddleWare(`Lookups/GetTeams`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:GetTeams', error)
                return error
            }
        })
}
