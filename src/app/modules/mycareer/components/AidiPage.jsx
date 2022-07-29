import {
  dataEngr,
  dataEngineerI,
  dataEngineerII,
  srDataEngineer,
  leadDataEngineer,
  dataArchitectI,
  dataArchitectII,
  dataScientistI,
  dataScientistII,
  srdataScientist,
  leaddataScientist,
  prdataScientist,
  srPrdataScientist,
  aiAdvocateI,
  aiAdvocateII,
  srAiAdvocate,
  ldAiAdvocate,
  prAiAdvocate,
  srPrAiAdvocate,
  biSpecialistI,
  biSpecialistII,
  srBiSpecialist,
  ldBiSpecialist,
  biArchitect,
  srBiArchitect,
  analystI,
  analystII,
  sranalyst,
  ldCds,
  softwareEngineerI,
  softwareEngineerII,
  srSoftwareengineer,
  leadSoftwareEngineer,
  PrincipleSoftweareEngineer,
  srPrincipleSoftwareEngineer,
  managerCds,
  srManagerCds,
  srmanager,
  manager,
  associateDirector,
  director,
  researchScI,
  researchScII,
  srResearchSc,
  ldResearchScI,
  staffResearchScientist,
  srStaffResearchScientist,
} from '../utils/dataEngineerContent'
import {AIDI_Roadmap} from '../../../../setup/appConstants'

export const AIDI = () => {
  return (
    <div className='card mb-5 mb-xl-10' id='aidi'>
      <div className='content'></div>
      <div className='container'>
        <div className='doc-container'>
          <div className='doc-title py-6'>AIDI Roles</div>
          <div className='doc-content'>
            <div className='row'>
              {dataEngr.map((item, i) => {
                return (
                  <div className='col-sm-12 col-md-8 col-lg-6 col-xl-4 px-0'>
                    <a className='mx-4 text-dark'>
                      <strong>{item.mainMenu}</strong>
                    </a>
                    <ul className='sub-menu-with-metronic px-5'>
                      {item.subMenu.map((t) => {
                        return (
                          <div className='timeline-label'>
                            <li id={t.id}>
                              <div className='timeline-item'>
                                <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
                                <div className='timeline-badge'>
                                  {i === 0 ? (
                                    <i className='fa fa-genderless text-success fs-1'></i>
                                  ) : i === 1 ? (
                                    <i className='fa fa-genderless text-warning fs-1'></i>
                                  ) : i === 2 ? (
                                    <i className='fa fa-genderless text-danger fs-1'></i>
                                  ) : i === 3 ? (
                                    <i className='fa fa-genderless text-primary fs-1'></i>
                                  ) : i === 4 ? (
                                    <i className='fa fa-genderless text-secondary fs-1'></i>
                                  ) : i === 5 ? (
                                    <i className='fa fa-genderless text-muted fs-1'></i>
                                  ) : (
                                    <i className='fa fa-genderless text-info fs-1'></i>
                                  )}
                                </div>
                                <div className='ps-1'>
                                  <a href={t.href}>{t.text}</a>
                                </div>
                              </div>
                            </li>
                          </div>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className='row'>
              <div>
                <h1 className='doc-sub-title'>
                  <strong>My Career Opportunities</strong>
                </h1>
              </div>
              <img alt='' src={AIDI_Roadmap} />
              <div className='seperator-tall'></div>

              <a name='dataEngineerI'>
                <div className='doc-title fw-bold'>Data Engineer I</div>
              </a>

              <div>
                <h1 className='doc-sub-title'>
                  <strong>My Role Profile</strong>
                </h1>
              </div>
              {dataEngineerI.map((item) => {
                return (
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={item.icon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>{item.title}</b>
                      </span>
                    </h2>
                    {item.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                  </>
                )
              })}
            </div>
            <div className='row'>
              <a name='dataEngineerII'>
                <div className='doc-title'>Data Engineer II</div>
              </a>
              <div className='seperator-tall'></div>
              <div>
                <h1 className='doc-sub-title'>
                  <strong>My Role Profile</strong>
                </h1>
              </div>
              {dataEngineerII.map((item) => {
                return (
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={item.icon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>{item.title}</b>
                      </span>
                    </h2>
                    {item.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                  </>
                )
              })}
            </div>
            <div className='row'>
              <a name='srDataEngineerI'>
                <div className='doc-title'>Senior Data Engineer</div>
              </a>
              <div className='seperator-tall'></div>
              <div>
                <h1 className='doc-sub-title'>
                  <strong>My Role Profile</strong>
                </h1>
              </div>
              {srDataEngineer.map((item) => {
                return (
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={item.icon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>{item.title}</b>
                      </span>
                    </h2>
                    {item.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                  </>
                )
              })}
            </div>
            <div className='row'>
              <a name='leadDataEngineerI'>
                <div className='doc-title'>Lead Data Engineer</div>
              </a>
              <div className='seperator-tall'></div>
              <div>
                <h1 className='doc-sub-title'>
                  <strong>My Role Profile</strong>
                </h1>
              </div>
              {leadDataEngineer.map((item) => {
                return (
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={item.icon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>{item.title}</b>
                      </span>
                    </h2>
                    {item.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                  </>
                )
              })}
            </div>
            <div className='row'>
              <a name='dataArchitectI'>
                <div className='doc-title'>Data Architect</div>
              </a>
              <div className='seperator-tall'></div>
              <div>
                <h1 className='doc-sub-title'>
                  <strong>My Role Profile</strong>
                </h1>
              </div>
              {dataArchitectI.map((item) => {
                return (
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={item.icon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>{item.title}</b>
                      </span>
                    </h2>
                    {item.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                  </>
                )
              })}
            </div>
            <div className='row'>
              <a name='dataArchitectII'>
                <div className='doc-title'>Sr. Data Architect</div>
              </a>
              <div className='seperator-tall'></div>
              <div>
                <h1 className='doc-sub-title'>
                  <strong>My Role Profile</strong>
                </h1>
              </div>
              {dataArchitectII.map((item) => {
                return (
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={item.icon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>{item.title}</b>
                      </span>
                    </h2>
                    {item.dataList.map((t) => {
                      return (
                        <ul style={{paddingLeft: '50px'}}>
                          <li>{t}</li>
                        </ul>
                      )
                    })}
                  </>
                )
              })}
            </div>
          </div>
          <div className='row'>
            <a name='datascience1'>
              <div className='doc-title'>Data Scientist I</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {dataScientistI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='datascience2'>
              <div className='doc-title'>Data Scientist II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {dataScientistII.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srdatascience'>
              <div className='doc-title'>Sr Data Scientist II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srdataScientist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='leaddatasciencer'>
              <div className='doc-title'>Lead Data Scientist II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {leaddataScientist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='principaldatascience'>
              <div className='doc-title'>Data Science Architect</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {prdataScientist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srPrincipaldatascience'>
              <div className='doc-title'>Sr. Data Science Architect</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srPrdataScientist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='aiAdvocate1'>
              <div className='doc-title'>AI Advocate I</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {aiAdvocateI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='aiAdvocate2'>
              <div className='doc-title'>AI Advocate II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {aiAdvocateII.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='sraiAdvocate'>
              <div className='doc-title'>Senior AI Advocate</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srAiAdvocate.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='leadaiAdvocater'>
              <div className='doc-title'>Lead AI Advocate</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {ldAiAdvocate.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='principalaiAdvocate'>
              <div className='doc-title'>Staff AI Advocate</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {prAiAdvocate.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srPrincipalaiAdvocate'>
              <div className='doc-title'>Sr. Staff AI Advocate</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srPrAiAdvocate.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srpraiAdvocate'>
              <div className='doc-title'>Senior Principle AI Advocate</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srPrAiAdvocate.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='bispecialistI'>
              <div className='doc-title'>BI Specialist I</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {biSpecialistI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='bispecialistII'>
              <div className='doc-title'>BI Specialist II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {biSpecialistII.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srbispecialist'>
              <div className='doc-title'>Senior BI Specialist</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srBiSpecialist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='ldbispecialist'>
              <div className='doc-title'>Lead BI Specialist</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {ldBiSpecialist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='biArchitect'>
              <div className='doc-title'>BI Atchitect</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {biArchitect.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srbiArchitect'>
              <div className='doc-title'>Senior BI Atchitect</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srBiArchitect.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='analyst'>
              <div className='doc-title'>Analyst I</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {analystI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='analystII'>
              <div className='doc-title'>Analyst II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {analystII.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='Sranalyst'>
              <div className='doc-title'>Senior Analyst</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {sranalyst.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='ldCds'>
              <div className='doc-title'>Manager, CDS Lead, Data Analytics</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {ldCds.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='managerCds'>
              <div className='doc-title'>Sr. Manager, CDS Expert, Data Analytics</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {managerCds.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srmanagerCds'>
              <div className='doc-title'>Associate Director, CDS Sr. Expert, Data Analytics</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srManagerCds.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          {/* engineer */}
          <div className='row'>
            <div className='doc-title'>Cerise</div>
            <a name='softwareEngineer1'>
              <div className='doc-title'>Software Engineer I</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {softwareEngineerI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='softwareEngineer2'>
              <div className='doc-title'>Software Engineer II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {softwareEngineerII.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srSoftwareEngineer'>
              <div className='doc-title'>Senior Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srSoftwareengineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='leadSoftwareEngineer'>
              <div className='doc-title'>Lead Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {leadSoftwareEngineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='principalSoftwareEngineer'>
              <div className='doc-title'>Staff Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {PrincipleSoftweareEngineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srPrincipalSoftwareEngineer'>
              <div className='doc-title'>Sr. Staff Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srPrincipleSoftwareEngineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <div className='doc-title'>Data Engineer Development</div>
            <a name='softwareEngineer1d'>
              <div className='doc-title'>Software Engineer I</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {softwareEngineerI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='softwareEngineer2d'>
              <div className='doc-title'>Software Engineer II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {softwareEngineerII.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srSoftwareEngineerd'>
              <div className='doc-title'>Senior Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srSoftwareengineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='leadSoftwareEngineerd'>
              <div className='doc-title'>Lead Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {leadSoftwareEngineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='principalSoftwareEngineerd'>
              <div className='doc-title'>Expert Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {PrincipleSoftweareEngineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          <div className='row'>
            <a name='srprincipalSoftwareEngineerd'>
              <div className='doc-title'>Sr. Expert Software Engineer</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srPrincipleSoftwareEngineer.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          {/* Manager*/}
          <div className='row'>
            <a name='manager'>
              <div className='doc-title'>Manager</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {manager.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          {/* Sr. Manager*/}
          <div className='row'>
            <a name='srManager'>
              <div className='doc-title'>Sr. Manager</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srmanager.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          {/* Associate Director */}

          <div className='row'>
            <a name='associateDirector'>
              <div className='doc-title'>Associate Director</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {associateDirector.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          {/* Director */}
          <div className='row'>
            <a name='director'>
              <div className='doc-title'>Director</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {director.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>

          {/* Research Scientist I*/}
          <div className='row'>
            <a name='researchScI'>
              <div className='doc-title'>Research Scientist I</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {researchScI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>

          {/*  Research Scientist II*/}
          <div className='row'>
            <a name='researchScII'>
              <div className='doc-title'>Research Scientist II</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {researchScII.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>

          {/*  Senior Research Scientist*/}
          <div className='row'>
            <a name='srResearchSc'>
              <div className='doc-title'>Senior Research Scientist</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srResearchSc.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          {/*  Lead Research Scientist*/}
          <div className='row'>
            <a name='ldResearchScI'>
              <div className='doc-title'>Lead Research Scientist</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {ldResearchScI.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
          {/*  Staff Research Scientist */}
          <div className='row'>
            <a name='staffResearchScientist'>
              <div className='doc-title'>Staff Research Scientist</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {staffResearchScientist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>

          {/* Sr. Staff Research Scientist */}
          <div className='row'>
            <a name='srStaffResearchScientist'>
              <div className='doc-title'>Sr. Staff Research Scientist</div>
            </a>
            <div className='seperator-tall'></div>
            <div>
              <h1 className='doc-sub-title'>
                <strong>My Role Profile</strong>
              </h1>
            </div>
            {srStaffResearchScientist.map((item) => {
              return (
                <>
                  <h2>
                    <span>
                      <img
                        alt=''
                        src={item.icon}
                        width={50}
                        height={50}
                        style={{marginRight: '10px'}}
                      />
                      <b>{item.title}</b>
                    </span>
                  </h2>
                  {item.dataList.map((t) => {
                    return (
                      <ul style={{paddingLeft: '50px'}}>
                        <li>{t}</li>
                      </ul>
                    )
                  })}
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
