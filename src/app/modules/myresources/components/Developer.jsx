import {developer} from './utils/rolesData'
import {sl_week} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import './../../assets/myResources/agileAfiniti.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'

function Developer() {
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
                  {/* developer */}
                  <div className='row' id='dev'>
                    <h1>
                      <strong>Developer</strong>
                    </h1>
                    <div className='separator-short' />
                    <p>{developer.paragraph}</p>
                    <div className='separator-short'></div>
                    <div>
                      <ol style={{paddingLeft: '50px'}}>
                        {developer.dataLists.map((t, index) => {
                          return (
                            <li>
                              {t.mainHeading && t.mainHeading}
                              <ol type='I'>
                                {t.list &&
                                  t.list.map((l) => {
                                    return (
                                      <li>
                                        {l.subHeading && l.subHeading}
                                        <ul>
                                          {l.listData &&
                                            l.listData.map((d) => {
                                              return <li>{d}</li>
                                            })}
                                        </ul>
                                      </li>
                                    )
                                  })}
                              </ol>
                            </li>
                          )
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card mb-5 mb-xl-10'>
        <div className='content'></div>
        <div className='container afiniti-container' style={{margin: '0'}}>
          <div className='doc-container'>
            <div className='doc-content'>
              <div className='row'>
                <div className='col-12'>
                  <div className='row' id='dev'>
                    <h2>
                      <div>
                        <b>My one week as a Developer</b>
                      </div>
                    </h2>
                    <h2>
                      <span>
                        <img alt='' src={sl_week} width='100%' style={{marginRight: '10px'}} />
                      </span>
                    </h2>
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

export default Developer
