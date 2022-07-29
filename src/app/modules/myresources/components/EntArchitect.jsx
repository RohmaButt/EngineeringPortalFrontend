import {enterprise_architect} from './utils/rolesData'
import '../../assets/myCareer/mycareers.scss'
import './../../assets/myResources/agileAfiniti.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'

function EntArchitect() {
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
                  {/* enterprise_architect */}
                  <div className='row' id='ea'>
                    <div>
                      <h1>
                        <strong>Enterprise Architect</strong>
                      </h1>
                    </div>
                    <div className='separator-short' />
                    <p>{enterprise_architect.paragraph}</p>
                    <div className='separator-short'></div>
                    <div>
                      <ol style={{paddingLeft: '50px'}}>
                        {enterprise_architect.dataLists.map((t, index) => {
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
    </>
  )
}

export default EntArchitect
