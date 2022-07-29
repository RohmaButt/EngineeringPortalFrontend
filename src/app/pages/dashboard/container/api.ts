import { getEmail } from '../../../modules/auth/Common';
import { fetchMiddleWare } from '../utils/apiMiddleWare'

export const fetchOkrData = async (
    interval: string,
    portfolio?: string,
    serviceGroup?: string,
    service?: string,
    email?: boolean,
    userEmail?: string,
    errorToast?: any
) => {
    if (!email || userEmail) {
        return fetchMiddleWare(
            `KPIDashboard/getOkrData?interval=${interval}&portfolio=${portfolio ? encodeURIComponent(portfolio) : ''
            }&serviceGroup=${serviceGroup ? encodeURIComponent(serviceGroup) : ''}&service=${service ? encodeURIComponent(service) : ""}&email=${email ? userEmail : ""}`
        )
            .then((response) => {
                if (response.explanation === 'Success!') return response?.data || [];
            })
            .catch(function (error) {
                if (error) {
                    // setLoading(false)
                    // setError('{getKpiIntervals} Something went wrong with loading data from server. Please refresh.')
                    console.error('error:getKpiIntervals', error)
                    errorToast();
                }
            })
    } else {
        return fetchMiddleWare(
            `KPIDashboard/getOkrData?interval=${interval}&email=${userEmail === "" ? getEmail() : userEmail}`
        )
            .then((response) => {
                if (response.explanation === 'Success!') return response?.data || [];
            })
            .catch(function (error) {
                if (error) {
                    // setLoading(false)
                    errorToast();
                    // setError('{getKpiIntervals} Something went wrong with loading data from server. Please refresh.')
                    console.error('error:getKpiIntervals', error)
                }
            })
    }
}
