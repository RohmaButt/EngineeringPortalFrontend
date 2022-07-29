import ChartCardTemplate from './ChartCardTemplate'

export default function SideChartCard(props) {
  const {sideChartData} = props
  return (
    <div
      className='d-flex flex-nowrap flex-sm-nowrap flex-direction-row'
      style={{transform: 'scale(0.60)', width: '50px', marginTop: '5%', height: '300px'}}
    >
      {sideChartData &&
        sideChartData.map((item, index) => (
          <ChartCardTemplate item={item} index={index} onClick={() => bindPopup(item)} />
        ))}
    </div>
  )
}
