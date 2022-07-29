import {getAvatarbase64, getUserProfile} from './chartHelper'
import {bindPopup} from './chartHelper'
import '../../../modules/assets/myTeam/orgChart.scss'

export default function ChartCardTemplate(props) {

  return (
    <>
      {props.item !== undefined ? (
        <>
          <div
            className='employeeNode'
            key={`chartNode_` + props.item.nodeId}
            id={`chartNode_` + props.item.nodeId}
            onClick={() => bindPopup(props.item)}
          >
            <div className='d-flex'>
              <div className='d-flex flex-column directReports'>
                {props.item.directReports != null && props.item.directReports !== 0
                  ? props.item.directReports
                  : ''}
                <div className='directReports-tooltip'>Direct Reports</div>
              </div>
              <div className='d-flex flex-column totalHeadcount'>
                {props.item.totalHeadcount != null && props.item.totalHeadcount !== 0
                  ? props.item.totalHeadcount
                  : ''}
                <div className='totalHeadcount-tooltip'>Span of control</div>
              </div>
            </div>
            <div className='octagonWraper'>
              <div className='octagon-img-div'>
                <img
                  id={`chartNode_` + props.item.nodeId}
                  src={getUserProfile(props.item.userName)}
                  onError={() => getAvatarbase64()}
                  alt=''
                />
              </div>
            </div>
            <div className='nodeFullName'>{props.item.name}</div>
            <div className='nodePosition'>
              {props.item.positionName.includes(',')
                ? props.item.positionName.split(',')[0]
                : props.item.positionName}
            </div>
            <div className='nodePosition-mb'>
              {props.item.positionName.includes(',') ? props.item.positionName.split(',')[1] : ''}
            </div>
          </div>
          <svg
            style={{visibility: 'hidden', position: 'absolute'}}
            width='0'
            height='0'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <defs>
              <filter id='round'>
                <feGaussianBlur in='SourceGraphic' stdDeviation='5' result='blur' />
                <feColorMatrix
                  in='blur'
                  mode='matrix'
                  values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                  result='goo'
                />
                <feComposite in='SourceGraphic' in2='goo' operator='atop' />
              </filter>
            </defs>
          </svg>
        </>
      ) : null}
    </>
  )
}
