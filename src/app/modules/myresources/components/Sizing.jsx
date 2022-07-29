import {sizingDataPara1, table1Data, figure1Para, figure2Para, lastPara} from './utils/sizingData'
import {
  product_backlog,
  backlog_items,
  suggested_process,
  user_story,
} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import './../../assets/myResources/agileAfiniti.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'

function Sizing() {
  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <FeedbackButton
          link='https://forms.monday.com/forms/243eed0e0a55dfe412c1b94f6043297b?r=use1'
          containerStyle={{
            position: 'absolute',
            right: '20px',
            top: '30px',
            zIndex: 9,
            opacity: 0.3,
          }}
        />
        <div className='content'></div>
        <div className='container afiniti-container' style={{margin: '0'}}>
          <div className='doc-container'>
            <div className='doc-content'>
              <div className='row'>
                <div className='col-12'>
                  {/* Sizing section */}
                  <div className='row'>
                    <h1 id='sizing'>
                      <strong>Sizing</strong>
                    </h1>
                    <div className='separator-short' />
                    <p>{sizingDataPara1.firstHeading}</p>
                    {sizingDataPara1.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={product_backlog}
                          width='100%'
                          style={{marginLeft: '50px'}}
                        />
                      </span>
                    </h2>
                    <h2>
                      <p>{table1Data.firstHeading}</p>
                    </h2>
                    {table1Data.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                    <h2>
                      <span>
                        <img alt='' src={backlog_items} width='100%' style={{marginLeft: '50px'}} />
                      </span>
                    </h2>
                    <i style={{marginLeft: '50px'}}>
                      Figure 1: Breakdown of product backlog items and estimations
                    </i>
                    <div className='separator-short' />
                    <p>{figure1Para.paragraph}</p>
                    <h2>
                      <div className='separator-short' />
                      <div>Suggested Process:</div>
                      <span>
                        <img
                          alt=''
                          src={suggested_process}
                          width='100%'
                          style={{marginLeft: '50px'}}
                        />
                      </span>
                    </h2>
                    <i style={{marginLeft: '50px'}}>
                      Figure 2: Breaking down and estimation process
                    </i>
                    <div className='separator-short' />
                    <p>{figure2Para.heading}</p>
                    {figure2Para.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                    <h2>
                      <span>
                        <img alt='' src={user_story} width='100%' style={{marginLeft: '50px'}} />
                      </span>
                    </h2>
                    <h2>
                      <p>{lastPara.heading}</p>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      {lastPara.dataList1.map((t) => {
                        return <li>{t}</li>
                      })}
                    </ul>
                    <ol style={{paddingLeft: '50px'}}>
                      {lastPara.dataList2.map((t) => {
                        return <li>{t}</li>
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sizing
