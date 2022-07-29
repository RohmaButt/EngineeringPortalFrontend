import {afinitiData1, afinitiDataPara2} from './utils/agile@afinitiData'
import {sprintTable, RACITable} from './utils/agile@afinitiData'
import {
  agileFlow,
  sprintCalendar,
  cwtLogo,
  dailyLogo,
  groomingLogo,
  mqLogo,
  phcLogo,
  qmplogo,
  sprintPlanning,
  srLogo,
  srvLogo,
} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import './../../assets/myResources/agileAfiniti.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'

function AgileAfiniti() {
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
        <div className='container'>
          <div className='doc-container'>
            <div className='doc-content'>
              <div className='row'>
                <div className='col-12'>
                  <div id='top'>
                    <h1>
                      <strong>Agile @Afiniti</strong>
                    </h1>
                  </div>
                  {/* agile data */}
                  <div className='separator-short' />
                  <div className='row'>
                    <div className='separator-short'></div>
                    <b>{afinitiData1.listHeading}</b>
                    {afinitiData1.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                    <span>
                      Followings show us our monthly and quarterly new rhythm to adapt in all levels
                      of engineering organization:
                    </span>
                    <h1>
                      <span
                        data-toggle='modal'
                        data-target='#exampleModal'
                        style={{cursor: 'pointer'}}
                      >
                        <img
                          alt=''
                          src={agileFlow}
                          width='115%'
                          style={{marginRight: '10px', marginLeft: '-50px'}}
                        />
                      </span>
                    </h1>
                    {afinitiDataPara2.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                    <b>2 weeks sprint calendar will be as follows: </b>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={sprintCalendar}
                          width='100%'
                          style={{marginRight: '10px'}}
                        />
                      </span>
                    </h2>
                  </div>
                  <div className='separator-short' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card mb-5 mb-xl-10'>
        <div className='doc-container'>
          <div className='doc-content'>
            <div className='row'>
              <div className='col-12'>
                <div className='separator-short' />
                <div className='row'>
                  <div className='separator-short'></div>

                  {/* sprint table */}
                  <div className='custom-table-container'>
                    <table className='table'>
                      <thead>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item) => {
                            return (
                              <th scope='col' className='custom-th-td'>
                                {item.th.map((t) => {
                                  return <p>{t}</p>
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                      </thead>
                      <tbody>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th
                                scope='row'
                                className='custom-th-td'
                                style={{
                                  padding: '0 !important',
                                  paddingTop: '20px',
                                  // maxWidth: "351px",
                                  // /* width: fit-content, */
                                  // minWidth: "277px",
                                }}
                              >
                                {item.td.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            height={24}
                                            style={{marginRight: '4px'}}
                                            src={sprintPlanning}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td2.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            height={24}
                                            style={{marginRight: '4px'}}
                                            src={dailyLogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td3.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            style={{marginRight: '4px'}}
                                            height={24}
                                            src={groomingLogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td4.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            height={24}
                                            style={{marginRight: '4px'}}
                                            src={phcLogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td5.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            style={{marginRight: '4px'}}
                                            height={24}
                                            src={cwtLogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td6.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            style={{marginRight: '4px'}}
                                            height={24}
                                            src={srLogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td7.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            height={24}
                                            style={{marginRight: '4px'}}
                                            src={srvLogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td8.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            style={{marginRight: '4px'}}
                                            height={24}
                                            src={mqLogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {sprintTable.map((item, index) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td9.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        {index === 0 && (
                                          <img
                                            width={24}
                                            style={{marginRight: '4px'}}
                                            height={24}
                                            src={qmplogo}
                                          />
                                        )}
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='separator-short' />
                <span style={{color: 'red'}}>
                  *Please note that sprint duration will be determined depending on business
                  requirements and teams' decision. In this page engineering rhythm arranged
                  according to two weeks sprint. If sprint duration gets longer then all durations
                  should be adapted.
                </span>
                <div className='separator-short' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card mb-5 mb-xl-10'>
        <div className='doc-container'>
          <div className='doc-content'>
            <div className='row'>
              <div className='col-12'>
                <div className='separator-short' />
                <div className='row'>
                  <div className='separator-short'></div>
                  {/* RACI table */}
                  <div className='custom-table-container'>
                    <table className='table'>
                      <thead>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='col' className='custom-th-td'>
                                {item.th.map((t) => {
                                  return <p>{t}</p>
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                      </thead>
                      <tbody>
                        <tr className='custom-table-tr font-weight-bold'>
                          {RACITable.map((item) => {
                            return (
                              <th
                                scope='row'
                                className='custom-th-td'
                                style={{
                                  padding: '0 !important',
                                  paddingTop: '20px',
                                }}
                              >
                                {item.td.map((t) => {
                                  return (
                                    <div style={{display: 'flex'}}>
                                      <p>{t}</p>
                                    </div>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td2.map((t) => {
                                  return (
                                    <div style={{display: 'flex'}}>
                                      <p className='custom-table-text'>{t}</p>
                                    </div>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td3.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td4.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td5.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td6.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td7.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th scope='row' className='custom-th-td'>
                                {item.td8.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td9.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td10.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td11.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td12.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td13.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td14.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td15.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td16.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td17.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td18.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td19.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td20.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td21.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td22.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td23.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td24.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td25.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td26.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td27.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td28.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td29.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td30.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td31.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td32.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                        <div className='separatorLine'></div>
                        <tr className='custom-table-tr'>
                          {RACITable.map((item) => {
                            return (
                              <th className='custom-th-td'>
                                {item.td33.map((t) => {
                                  return (
                                    <>
                                      <div style={{display: 'flex'}}>
                                        <p className='custom-table-text'>{t}</p>
                                      </div>
                                    </>
                                  )
                                })}
                              </th>
                            )
                          })}
                        </tr>
                      </tbody>
                    </table>
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

export default AgileAfiniti
