import { fetchMiddleWare } from "../../../pages/dashboard/utils/apiMiddleWare"


export const getAllPeriodDataFromDB = async () => {
    return await fetchMiddleWare(`TsPeriodMgmt/GetAllPeriods`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:getAllPeriodDataFromDB', error)
                return error
            }
        })
}

export const GetAllWorklogsForAdmin = async () => {
    return await fetchMiddleWare(`TsWorklogs/GetAllWorklogsForAdmin`)
        .then((response) => {
            if (response != null) {
                return response
            }
        })
        .catch(function (error) {
            if (error) {
                console.error('error:GetAllWorklogsForAdmin', error)
                return error
            }
        })
}