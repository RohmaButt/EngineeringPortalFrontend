import EmployeeOrgChart from './EmployeeOrgChart'
import {getEmail} from '../../../modules/auth/Common.ts'

function MyOrgChart() {
  const filterObj = {
    fetchTillLastEdge: false,
    workEmail: getEmail(),
  }

  return <EmployeeOrgChart filterObj={filterObj} />
}
export default MyOrgChart
