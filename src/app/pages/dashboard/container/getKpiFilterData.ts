import { fetchMiddleWare } from '../utils/apiMiddleWare'

export const getKpiFilterData = async (
    dataType: string,
    errorToast?: any
) => {
    return fetchMiddleWare(
        `KPIDashboard/getKpiFilterData?dataType=${dataType}`
    )
        .then((response) => {
            if (response.explanation === 'Success!') return response?.data || [];
        })
        .catch(function (error) {
            if (error) {
                console.error('error:getKpiIntervals', error)
                errorToast();
            }
        })
}
