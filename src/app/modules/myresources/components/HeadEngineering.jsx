import {headOfEngineering} from './utils/rolesData'
import {hoE, hoE_week} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import './../../assets/myResources/agileAfiniti.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'

function HeadEngineering() {
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
                  {/* head of engineering */}
                  <div className='row' id='hoe'>
                    <div>
                      <h1>
                        <strong>Head of Engineering HoE</strong>
                      </h1>
                    </div>
                    <div className='separator-short' />
                    <div>
                      <b>{headOfEngineering.heading}</b>
                    </div>
                    <p>{headOfEngineering.paragraph}</p>
                    <div className='separator-short'></div>
                    <div>
                      <ol style={{paddingLeft: '50px'}}>
                        {headOfEngineering.dataLists.map((t, index) => {
                          return (
                            <li>
                              {t.mainHeading}
                              <ol type='I'>
                                {t.list.map((l) => {
                                  return (
                                    <li>
                                      {l.subHeading}
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
                    <h2>
                      <span>
                        <img alt='' width='100%' src={hoE} style={{marginRight: '10px'}} />
                      </span>
                    </h2>
                    <div>
                      *RAM stands for{' '}
                      <a href='https://en.wikipedia.org/wiki/Reliability_engineering'>
                        Reliability
                      </a>
                      , <a href='https://en.wikipedia.org/wiki/Availability'>Availability, </a>
                      <a href='https://en.wikipedia.org/wiki/Maintainability'>Maintainability </a>
                      and <a href='https://en.wikipedia.org/wiki/Safety'>Safety</a>.
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
                  <div className='row' id='hoe'>
                    <h2>
                      <div>
                        <b>My one week as a HoE</b>
                      </div>
                    </h2>
                    <h2>
                      <span>
                        <img alt='' src={hoE_week} width='100%' style={{marginRight: '10px'}} />
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

export default HeadEngineering
