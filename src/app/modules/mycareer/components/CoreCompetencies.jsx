import React from 'react'
import {CoreCompetenciesImg} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import {
  table1,
  masterTheCraft,
  ownTheWorkAndTheResults,
  focusOnClientExperience,
  workCollaborativelyWithOthers,
  manageAmbiguityComplexity,
} from '../utils/coreTable'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'
function CoreCompetencies() {
  React.useState(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <FeedbackButton
          link='https://forms.monday.com/forms/e6117d4e9ea7e5bab89fc80e725085a4?r=use1'
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
                <img alt='' src={CoreCompetenciesImg} />
              </div>
              <div className='seperator-tall'></div>
              <div className='row'>
                <p>
                  Knowledge and behaviors, as well as role definitions, will set you up for success
                  in Afiniti. Every role at Afiniti is expected to have five core competencies
                  (behaviors), whether it is responsible for people management or specialized in
                  technological areas. Throughout your time at Afiniti, you will be expected to
                  improve these competencies, which are listed below.
                </p>
                <div className='custom-table-container'>
                  <table className='table custom-table mb-0'>
                    <thead></thead>
                    <tbody>
                      {table1.map((item) => {
                        return (
                          <>
                            <tr className='custom-table-tr'>
                              <td className='custom-th-td'>
                                <strong>{item.leftColumn}</strong>
                              </td>
                              <td className='custom-th-td'>{item.rightColumn}</td>
                            </tr>
                            <div className='separatorLine'></div>
                          </>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <h2>
                  <strong>Master the Craft</strong>
                </h2>
                <div className='custom-table-container'>
                  <table className='table  mb-0'>
                    <thead>
                      <tr className='custom-table-tr'>
                        {masterTheCraft.map((item) => {
                          return (
                            <th className='custom-th-td'>
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
                        {masterTheCraft.map((item) => {
                          return (
                            <th className='custom-th-td'>
                              {item.td.map((t) => {
                                return <p className='custom-table-text'>{t}</p>
                              })}
                            </th>
                          )
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2>
                  <strong>Own the Work and the Results</strong>
                </h2>
                <div className='custom-table-container'>
                  <table className='table  mb-0'>
                    <thead>
                      <tr className='custom-table-tr'>
                        {ownTheWorkAndTheResults.map((item) => {
                          return (
                            <th className='custom-th-td'>
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
                        {ownTheWorkAndTheResults.map((item) => {
                          return (
                            <th className='custom-th-td'>
                              {item.td.map((t) => {
                                return <p className='custom-table-text'>{t}</p>
                              })}
                            </th>
                          )
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2>
                  <strong>Focus on Client Experience</strong>
                </h2>
                <div className='custom-table-container'>
                  <table className='table  mb-0'>
                    <thead>
                      <tr className='custom-table-tr'>
                        {focusOnClientExperience.map((item) => {
                          return (
                            <th className='custom-th-td'>
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
                        {focusOnClientExperience.map((item) => {
                          return (
                            <th className='custom-th-td'>
                              {item.td.map((t) => {
                                return <p className='custom-table-text'>{t}</p>
                              })}
                            </th>
                          )
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2>
                  <strong>Work Collaboratively with Others</strong>
                </h2>
                <div className='custom-table-container'>
                  <table className='table  mb-0'>
                    <thead>
                      <tr className='custom-table-tr'>
                        {workCollaborativelyWithOthers.map((item) => {
                          return (
                            <th className='custom-th-td'>
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
                        {workCollaborativelyWithOthers.map((item) => {
                          return (
                            <th className='custom-th-td'>
                              {item.td.map((t) => {
                                return <p className='custom-table-text'>{t}</p>
                              })}
                            </th>
                          )
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2>
                  <strong>Manage Ambiguity & Complexity</strong>
                </h2>
                <div className='custom-table-container'>
                  <table className='table  mb-0'>
                    <thead>
                      <tr className='custom-table-tr'>
                        {manageAmbiguityComplexity.map((item) => {
                          return (
                            <th className='custom-th-td'>
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
                        {manageAmbiguityComplexity.map((item) => {
                          return (
                            <th className='custom-th-td'>
                              {item.td.map((t) => {
                                return <p className='custom-table-text'>{t}</p>
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
    </>
  )
}

export default CoreCompetencies
