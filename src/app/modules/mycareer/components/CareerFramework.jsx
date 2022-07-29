import {CareerFrameworkImg, CareerFrameworkImg2} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'
function CareerFramework() {
  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <FeedbackButton
          link='https://forms.monday.com/forms/98d71902f5d84a7f060ddd06c8df4a0a?r=use1'
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
                <img alt='' src={CareerFrameworkImg} />
              </div>
              <div className='seperator-tall'></div>
              <div className='row'>
                <h2>
                  <strong>How to Use the Career Architecture</strong>
                </h2>

                <p>
                  You can think of career architecture as a dictionary prepared to support your
                  development in the most accurate way. However, this is not an exhaustive list of
                  all you need to do in your career at Afiniti. It’s just a guide to get to know
                  your role better and prepare for the next step in your career. With this study, we
                  aim to provide more precise answers to the following questions:
                </p>
                <ul className='ul-margin'>
                  <li>
                    What is expected from you in your current role in terms of responsibilities,
                    skills & competencies and business outputs
                  </li>
                  <li>
                    What experience and skills do you need to advance to the next level of your
                    career?
                  </li>
                </ul>
                <p>
                  Use this guide to learn the scope of your role and the desired behaviors to create
                  high impact.
                </p>
                <p>
                  For managers, this career architecture will help to set expectations with your
                  teams and hold them accountable for their work.
                </p>
                <div>
                  <div>
                    <h2>
                      <strong>Dual Career Path for Technology Roles: Managerial & Technical</strong>
                    </h2>
                  </div>
                  <p>
                    We developed a dual career ladder for your career development that allows you to
                    advance in your career as a subject matter expert (SME) without needing you to
                    be in a managerial role.
                  </p>
                  <p>Career framework designed will provide opportunities for all of us who:</p>
                  <ul className='ul-margin'>
                    <li>
                      Have extensive technical skills and/or education but are not interested in or
                      inclined to pursue a management or supervisory path.
                    </li>
                    <li>
                      Who are interested in both people management and have deep technical skills.
                    </li>
                  </ul>
                  <p>
                    At each stage of your career journey, you will have a variety of career options,
                    both vertical and horizontal.
                  </p>
                  <p>
                    <b>Track 1 | Individual Contributors: </b>&nbsp;Designed for those with deep
                    expertise, broad technical skills in multiple technology domains and with an
                    ability to understand and resolve complex problems with ease. As a Distinguished
                    / Fellow you will be the go-to person for business critical initiatives with
                    high complexity.
                  </p>
                  <p>
                    <b>Track 2 | People Managers: </b>&nbsp;Designed for those with deep expertise,
                    broad technical skills in multiple technology domains and with an ability to
                    understand and resolve complex problems with ease. As a Distinguished / Fellow
                    you will be the go-to person for business critical initiatives with high
                    complexity.
                  </p>
                  <p>
                    <b>Department example: Engineering</b>&nbsp;
                  </p>
                </div>
                <img alt='' src={CareerFrameworkImg2} />
                <h2>
                  <strong>How to Navigate This Framework</strong>
                </h2>
                <ul className='ul-margin'>
                  <li>Anchor your work first and foremost on creating long-term impact.</li>
                  <li>
                    Since impact can be a bit vague, please read{' '}
                    <a
                      href='https://work.afiniti.com/my-career/what-is-impact'
                      target='_blank'
                      rel='noopener'
                    >
                      What is Impact?
                    </a>{' '}
                    section.
                  </li>
                  <li>Next, ground yourself in the expectations for your level and team.</li>
                  <li>
                    For each level, you’ll find a one-line summary description and the role’s levers
                    for impact.
                  </li>
                </ul>
                <div></div>
                <div>
                  <strong>Please keep in mind </strong>that you are expected to meet the
                  expectations of the current role in your current job domain as well as exceed
                  expectations of previous career levels
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerFramework
