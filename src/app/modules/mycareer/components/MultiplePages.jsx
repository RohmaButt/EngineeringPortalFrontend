import {
  CareerFrameworkImg2,
  technicalExpertiseIcon,
  leadershipAndInterpersonalSkillsIcon,
  problemSolvingIcon,
  corecompetencyIcon,
  businessImpactIcon,
  responsibilitiesIcon,
} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'
import {
  menüList,
  serviceLeadData,
  srPrincipalSoftwareEngineerData,
  qaSDETEngineer2Data,
  seniorQASDETEngineerData,
  leadQASDETEngineerData,
  srPrincipalQAAutomationEngineerData,
  PrincipalQAAutomationEngineerData,
  LeadQAAutomationEngineerData,
  srQAAutomationEngineerData,
  QAAutomationEngineer2Data,
  QAAutomationEngineer1Data,
  principalQASDETEngineerData,
  srPrincipalQASDETEngineerData,
  devOpsPlatformEngineerData1,
  devOpsPlatformEngineerData2,
  sdevOpsPlatformEngineerData,
  leadDevOpsPlatformEngineerData,
  principalDevOpsPlatformEngineerData,
  srPrincipalDevOpsPlatformEngineerData,
  telephonyEngineer1Data,
  telephonyEngineer2Data,
  sTelephonyEngineerData,
  leadTelephonyEngineerData,
  principalTelephonyEngineerData,
  sPrincipalTelephonyEngineerData,
  serviceGroupArchitect1Data,
  serviceGroupArchitect2Data,
  srServiceGroupArchitectData,
  scrumMaster1Data,
  scrumMaster2Data,
  scrumMaster3Data,
  agileCoachData,
  serviceGroupLeaderData,
  srServiceGroupLeaderData,
} from '../utils/menulist'
function EngineeringPrinciples() {
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
            <div className='doc-content' id='engineering-section'>
              <div className='doc-title'>Engineering Roles</div>
              <div className='row'>
                {menüList.map((item, i) => {
                  return (
                    <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                      <a className='mx-6 text-dark'>
                        <strong>{item.mainMenu}</strong>
                      </a>
                      <ul className='sub-menu-with-metronic'>
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
              {
                /* Software Engineer I */
                <div className='row'>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Career Opportunities</strong>
                    </h1>
                  </div>
                  <img alt='' src={CareerFrameworkImg2} />
                  <div className='seperator-tall'></div>

                  <a name='softwareEngineer1'>
                    <div className='doc-title'>Software Engineer I</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I deliver high quality production-ready code with direction from the
                              team.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={responsibilitiesIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Responsibilities</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        My primary craft focus is on learning the fundamentals of reading and
                        writing code within a large, long-lived codebase, gaining familiarity with
                        the technologies in my area of work, and learning to work against plans and
                        schedules.
                      </li>
                      <li>
                        I execute on defined tasks and contribute to solving problems with defined
                        solutions.
                      </li>
                      <li>
                        I work within the scope of my team with specific guidance from my manager.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={businessImpactIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Business Impact</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I work with my manager to prioritize tasks that add the most value and
                        deliver high-quality results for my customer.
                      </li>
                      <li>
                        I understand and effectively participate in the core processes of my team.
                      </li>
                      <li>
                        I follow through on my commitments, take responsibility for my work, and
                        deliver my work on time.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={technicalExpertiseIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Technical Expertise</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I have a high standard of excellence for code fluency.</li>
                      <li>
                        I translate ideas into clear code, written to be read as well as executed.
                      </li>
                      <li>
                        My code is free of glaring errors – bugs are in edge cases or design, not
                        mainline paths – and is well documented and well tested with appropriate use
                        of manual vs automated tests.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={leadershipAndInterpersonalSkillsIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Leadership and Interpersonal Skills</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I listen to understand others and ask clarifying questions.</li>
                      <li>
                        I share relevant information on my project including difficult task-level
                        trade-offs that impact the product to my manager and team.
                      </li>
                      <li>I provide guidance to interns.</li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={problemSolvingIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Problem Solving</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I escalate to my manager when I get stuck and reflect on ways that I can
                        improve from my mistakes.
                      </li>
                      <li>
                        I contribute to functional specifications and participates in code reviews
                        to solve problems.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={corecompetencyIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Core Competencies</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>Exhibit Respect and Trust - level 1</li>
                      <li>Master the Craft - level 1</li>
                      <li>Own the Work and the Results - level 1</li>
                      <li>Focus on Client Experience - level 1</li>
                      <li>Work Collaboratively Others - level 1</li>
                      <li>Manage Ambiguity and Complexity - level 1</li>
                    </ul>
                  </>
                </div>
                /* Software Engineer I */
              }
              {
                /* Software Engineer II */
                <div className='row'>
                  <a name='softwareEngineer2'>
                    <div className='doc-title'>Software Engineer II</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I am prolific at delivering resilient and sustainable software
                              projects from design to implementation and rollout.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={responsibilitiesIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Responsibilities</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I execute on defined projects to achieve team-level goals.</li>
                      <li>
                        I am increasingly mastering my craft and leverage it for higher impact.
                      </li>
                      <li>
                        I break large requests down into sub-tasks, gives higher-level status
                        updates.
                      </li>
                      <li>I may mentor new hires, interns, or more junior engineers.</li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={businessImpactIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Business Impact</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I work with my manager to prioritize tasks that add the most value and
                        deliver high-quality results for my customer.
                      </li>
                      <li>
                        I understand and effectively participate in the core processes of my team.
                      </li>
                      <li>
                        I follow through on my commitments, take responsibility for my work, and
                        deliver my work on time.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={technicalExpertiseIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Technical Expertise</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        My code is free of glaring errors – bugs are in edge cases or design, not
                        mainline paths – and is well documented and well tested with appropriate use
                        of manual vs automated tests.
                      </li>
                      <li>
                        I’m able to read and navigate through a large code base and effectively
                        debug others’ code
                      </li>
                      <li>
                        I’m able to understand the existing designs and technology choices within my
                        area, and I make appropriate adjustments to existing designs when necessary.
                      </li>
                      <li>
                        I use and understand tools needed to debug and diagnose issues in a test
                        and/or simple production environment.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={leadershipAndInterpersonalSkillsIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Leadership and Interpersonal Skills</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I provide guidance to entry-level engineers.</li>
                      <li>
                        I proactively ask for feedback from those I work with and identify ways to
                        act upon it.
                      </li>
                      <li>I have self-awareness about my strengths and areas for development.</li>
                      <li>
                        I drive discussions with my manager about aspirational goals and seek out
                        opportunities to learn and grow.
                      </li>
                      <li>
                        I am able to represent my team’s initiatives and goals to candidates in a
                        compelling way.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={problemSolvingIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Problem Solving</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I can design and complete a given task independently with a known problem.
                      </li>
                      <li>
                        I independently define the right solutions or use existing approaches to
                        solve defined problems.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={corecompetencyIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Core Competencies</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>Exhibit Respect and Trust - level 1</li>
                      <li>Master the Craft - level 1</li>
                      <li>Own the Work and the Results - level 1</li>
                      <li>Focus on Client Experience - level 1</li>
                      <li>Work Collaboratively Others - level 1</li>
                      <li>Manage Ambiguity and Complexity - level 1</li>
                    </ul>
                  </>
                </div>
                /* Software Engineer II */
              }
              {
                /*Sr. Software Engineer */
                <div className='row'>
                  <a name='srSoftwareEngineer'>
                    <div className='doc-title'>Sr. Software Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I independently identify and deliver software solutions through a set
                              of milestones spanning a specific product focus or a multi-component
                              system.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={responsibilitiesIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Responsibilities</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I write tech specs and identify risks before starting major projects.</li>
                      <li>
                        I define and deliver well-scoped milestones for a project and may be a
                        technical lead for projects on my team.
                      </li>
                      <li>
                        I actively keep customer needs in mind and leverage input from product
                        stakeholders as available to determine the right technical solutions to
                        deliver customer value quickly.
                      </li>
                      <li>
                        I proactively identify new opportunities and advocate for and implement
                        improvements to the current state of projects.
                      </li>
                      <li>I mentor new hires, interns, or more junior engineers.</li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={businessImpactIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Business Impact</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I take responsibility for the works that directly affect the team.</li>
                      <li>I understand my customers, the business’s goals and my team’s goals.</li>
                      <li>
                        I can identify when my results aren’t moving the needle for our team goals
                        or serving the needs of customers in a meaningful way and work with manager
                        to redirect my focus.
                      </li>
                      <li>
                        I make informed decisions by consulting the right stakeholders and balancing
                        details with the big picture.
                      </li>
                      <li>
                        I proactively share information so the right people are informed and
                        aligned.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={technicalExpertiseIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Technical Expertise</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I have mastered the fundamentals of code fluency and ensure my team produces
                        high-quality code and have a well-rounded set of software design skills that
                        allow me to build correct, maintainable software components.
                      </li>
                      <li>
                        I have mastered the tools needed to develop, debug and diagnose issues in
                        any type of environment.
                      </li>
                      <li>
                        I am able to independently design software components in well scoped
                        scenarios, with simplicity and maintenance as key considerations.
                      </li>
                      <li>
                        I proactively identify issues with technical dependencies of my project that
                        are owned by other teams and surface them.
                      </li>
                      <li>I have a good understanding of all services of my product.</li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={leadershipAndInterpersonalSkillsIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Leadership and Interpersonal Skills</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I deliver feedback in a constructive manner.</li>
                      <li>I help focus discussion on important aspects.</li>
                      <li>
                        I actively level up less-experienced members of my team by helping them with
                        their craft, providing guidance, and setting a good example.
                      </li>
                      <li>I contribute to a positive sense of community on the team.</li>
                      <li>
                        I am capable of working with cross-functional stakeholders to identify
                        technical blindspots and clarify ambiguity in their ideas.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={problemSolvingIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Problem Solving</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I participate in code reviews and can sign off on features.</li>
                      <li>
                        I can write functional specifications for small features to solve a new
                        problem.
                      </li>
                      <li>
                        I’m able to navigate ambiguity and remain resilient through ups and downs.I
                        execute the development roadmap for complex, multi-phase projects, possibly
                        as a project tech lead.
                      </li>
                      <li>I can design and implement a solution for a new problem.</li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={corecompetencyIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Core Competencies</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>Exhibit Respect and Trust - level 2</li>
                      <li>Master the Craft - level 2</li>
                      <li>Own the Work and the Results - level 2</li>
                      <li>Focus on Client Experience - level 2</li>
                      <li>Work Collaboratively Others - level 2</li>
                      <li>Manage Ambiguity and Complexity - level 2</li>
                    </ul>
                  </>
                </div>
                /* Sr. Software Engineer */
              }
              {
                /*Lead Software Engineer */
                <div className='row'>
                  <a name='leadSoftwareEngineer'>
                    <div className='doc-title'>Lead Software Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I autonomously deliver ongoing business impact across a team, product
                              capability, or technical system.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={responsibilitiesIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Responsibilities</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I am an expert at identifying the right solutions to solve ambiguous,
                        open-ended problems that require tough prioritization
                      </li>
                      <li>
                        Technical Strategy: I play a key role in setting medium-to-long term
                        strategy for business-impacting projects
                      </li>
                      <li>
                        Project Leadership: I autonomously define and deliver technical roadmaps of
                        larger projects, often involving cross-team dependencies.,
                      </li>
                      <li>
                        Product Expertise: I actively keep customer needs in mind and leverage input
                        from product stakeholders as available to determine the right technical
                        solutions to deliver customer value quickly
                      </li>
                      <li>
                        Mentorship: I actively level up less-experienced members of my team by
                        helping them with their craft, providing guidance, and setting a good
                        example
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={businessImpactIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Business Impact</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I take responsibility for the works that directly affect the service and the
                        company.
                      </li>
                      <li>
                        I play a major role in ensuring the quality of my team’s technical work,
                        both code and software designs.
                      </li>
                      <li>
                        I can identify when my results aren’t moving the needle for our business
                        goals or serving the needs of customers in a meaningful way and work with
                        manager to redirect my focus.
                      </li>
                      <li>
                        I get work to a simple place by focusing on the heart of the problem and
                        prioritizing the right things.
                      </li>
                      <li>
                        I proactively identify new opportunities and advocate for and implement
                        improvements to the current state of projects — potentially having broader
                        business impact across teams or products.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={technicalExpertiseIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Technical Expertise</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I have mastered in development of best practices. I write tech specs and
                        identify risks before starting major projects.
                      </li>
                      <li>
                        I understand the limits of our tools and when a problem that exceeds those
                        limits deserves the effort of producing a new tool.
                      </li>
                      <li>
                        My understanding of business context and purpose enables me to make
                        technical decisions aligned with longer term needs, not just immediate
                        requirements.
                      </li>
                      <li>
                        I understand the scope and relationships of features and production stack
                        for their area.
                      </li>
                      <li>
                        I have a strong understanding of all products relevant to own areas of
                        expertise.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={leadershipAndInterpersonalSkillsIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Leadership and Interpersonal Skills</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I guide more junior engineers to correct solutions while encouraging
                        collaboration.
                      </li>
                      <li>
                        I drive discussions with my manager about aspirational goals and seek out
                        opportunities to learn and grow.
                      </li>
                      <li>
                        I build relationships and drive coordination across teams & disciplines,
                        helping get to positive outcomes.
                      </li>
                      <li>I provide technical leadership.</li>
                      <li>
                        I act as a partner to my manager in setting the cultural tone for the team.
                        I support an environment where all Afiniti employees are included and heard.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={problemSolvingIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Problem Solving</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>I handle large-scale technical debt and refactoring.</li>
                      <li>
                        I am beginning to push boundaries to generate and implement ideas that aim
                        to drive our products and tools forward.
                      </li>
                      <li>
                        I define the technical roadmap for complex projects, refining it as the
                        projects progress, and provide leadership for the people executing on the
                        project.
                      </li>
                      <li>
                        I can write functional specifications for features to solve a new problem.
                      </li>
                      <li>
                        Given a poorly understood problem, I can explore the solution space to
                        determine correct course of action.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={corecompetencyIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Core Competencies</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>Exhibit Respect and Trust - level 3</li>
                      <li>Master the Craft - level 3</li>
                      <li>Own the Work and the Results - level 3</li>
                      <li>Focus on Client Experience - level 2</li>
                      <li>Work Collaboratively Others - level 2</li>
                      <li>Manage Ambiguity and Complexity - level 2</li>
                    </ul>
                  </>
                </div>
                /* Lead Software Engineer */
              }
              {
                /*Expert Software Engineer / Service Lead */
                <div className='row'>
                  <a name='principalSoftwareEngineer'>
                    <div className='doc-title'>Expert Software Engineer / Service Lead</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I set the multi-year, multi-team technical strategy and deliver it
                              through direct implementation or broad technical leadership.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={responsibilitiesIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Responsibilities</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        Domain Expertise: I demonstrate a high level of depth in a particular
                        platform or product category that brings unique business value.
                      </li>
                      <li>
                        Technical Strategy: I excel at defining the vision for and delivering large
                        business-impacting projects with multiple constraints.
                      </li>
                      <li>
                        Product Expertise: I increasingly influence or make product decisions/scope
                        and determine the right technical tradeoffs to deliver customer value
                        quickly.
                      </li>
                      <li>Mentorship: I serve as a role model for other Afiniti engineers</li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={businessImpactIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Business Impact</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I take responsibility for the works that directly affect the service and the
                        company.
                      </li>
                      <li>
                        I play a major role in ensuring the quality of my team’s technical work,
                        both code and software designs.
                      </li>
                      <li>
                        I can identify when my results aren’t moving the needle for our business
                        goals or serving the needs of customers in a meaningful way and work with
                        manager to redirect my focus.
                      </li>
                      <li>
                        I get work to a simple place by focusing on the heart of the problem and
                        prioritizing the right things.
                      </li>
                      <li>
                        I proactively identify new opportunities and advocate for and implement
                        improvements to the current state of projects — potentially having broader
                        business impact across teams or products.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={technicalExpertiseIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Technical Expertise</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I design software components that are difficult to misuse and flexible in
                        the face of an increase in the number of adjacent use cases as appropriate
                        to the direction of the business.
                      </li>
                      <li>
                        I reduce complex concepts to simple foundational components through correct
                        choices of data structures, algorithms or other deep insight into the
                        problem space (ex: 3 tree model in sync engine).
                      </li>
                      <li>
                        I may have deep expertise in implementation or principles behind some of the
                        libraries, platforms and systems relevant to my team’s work.
                      </li>
                      <li>
                        I’m capable of owning the overall health and engineering quality of a system
                        or collection of features and ensuring that the health and maintenance of my
                        systems do not depend on the maintainers having my expertise.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={leadershipAndInterpersonalSkillsIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Leadership and Interpersonal Skills</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I am a role model for other Afiniti employees and model a standard of
                        excellence that supports a culture of high performance on my team.
                      </li>
                      <li>I invest time to coach and mentor my teammates.</li>
                      <li>
                        I help break down silos within and across functions and influence others to
                        reach the best outcome for Afiniti.
                      </li>
                      <li>
                        I start to build cross-functional relationships, facilitate the right
                        conversations.
                      </li>
                      <li>
                        I personify Afiniti’s culture and values. I champion community building
                        efforts and inclusion initiatives.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={problemSolvingIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Problem Solving</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>
                        I think both strategically and tactically, keeping in mind both technical
                        goals and company goals.
                      </li>
                      <li>
                        I push boundaries to generate and implement breakthrough ideas that aim to
                        create new products or advance existing products and drive our tools
                        forward.
                      </li>
                      <li>
                        I participate in and support initiatives outside of main area of
                        responsibility.
                      </li>
                      <li>
                        I anticipate challenges and am able to influence the technical direction of
                        the team or org to execute on that vision even in the face of potential
                        significant misalignment.
                      </li>
                      <li>
                        I am an expert firefighter who is often called in to make things right.
                      </li>
                    </ul>
                  </>
                  <>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={corecompetencyIcon}
                          width={50}
                          height={50}
                          style={{marginRight: '10px'}}
                        />
                        <b>Core Competencies</b>
                      </span>
                    </h2>
                    <ul style={{paddingLeft: '50px'}}>
                      <li>Exhibit Respect and Trust - level 3</li>
                      <li>Master the Craft - level 3</li>
                      <li>Own the Work and the Results - level 3</li>
                      <li>Focus on Client Experience - level 3</li>
                      <li>Work Collaboratively Others - level 3</li>
                      <li>Manage Ambiguity and Complexity - level 3</li>
                    </ul>
                  </>
                </div>
                /*Expert Software Engineer / Service Lead */
              }
              {
                /*Service Lead */
                <div className='row'>
                  <a name='serviceLead'>
                    <div className='doc-title'>Service Lead</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I guide Service Team members to deliver business impact with support
                              from my manager
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My key behaviors</strong>
                    </h1>
                  </div>
                  {serviceLeadData.map((item) => {
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
                /*Service Lead*/
              }
              {
                /*Sr. Expert Software Engineer / Service Lead */
                <div className='row'>
                  <a name='srPrincipalSoftwareEngineer'>
                    <div className='doc-title'>Sr. Expert Software Engineer / Service Lead</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I deliver results against a strategic company-level business
                              objective.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {srPrincipalSoftwareEngineerData.map((item) => {
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
                /*Sr. Expert Software Engineer / Service Lead*/
              }
              {
                /*QA/SDET Engineer II*/
                <div className='row'>
                  <a name='qaSDETEngineer2'>
                    <div className='doc-title'>SDET Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I plan and drive testing for the high risk projects developed by my
                              team(s) and identify and fix simple quality process.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {qaSDETEngineer2Data.map((item) => {
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
                /*QA/SDET Engineer II*/
              }
              {
                /*Senior QA/SDET Engineer*/
                <div className='row'>
                  <a name='seniorQASDETEngineer'>
                    <div className='doc-title'>Sr. SDET Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I scale myself, the teams and projects I support through my expertise
                              in testing and test planning and I leverage my expertise to drive
                              effective quality process.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {seniorQASDETEngineerData.map((item) => {
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
                /*Senior QA/SDET Engineer*/
              }
              {
                /*Lead QA/SDET Engineer*/
                <div className='row'>
                  <a name='leadQASDETEngineer'>
                    <div className='doc-title'>Lead SDET Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I fundamentally improve the quality process exercised by my group and
                              drive very broad or highly technical projects.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {leadQASDETEngineerData.map((item) => {
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
                /*Lead QA/SDET Engineer*/
              }
              {
                /*Principal QA/SDET Engineer*/
                <div className='row'>
                  <a name='principalQASDETEngineer'>
                    <div className='doc-title'>Expert SDET Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I set and drive holistic quality direction/strategy on extremely
                              complex, multi-group projects/process.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {principalQASDETEngineerData.map((item) => {
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
                /*Principal QA/SDET Engineer*/
              }
              {
                /*Sr. Principal QA/SDET Engineer*/
                <div className='row'>
                  <a name='srPrincipalQASDETEngineer'>
                    <div className='doc-title'>Sr. Expert SDET Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I deliver results against a strategic company-level business
                              objective.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {srPrincipalQASDETEngineerData.map((item) => {
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
                /*Sr. Principal QA/SDET Engineer*/
              }

              {/* dfs */}
              {
                /*QA Automation Engineer I*/
                <div className='row'>
                  <a name='qaAutomationEngineer1'>
                    <div className='doc-title'>QA Automation Engineer I</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I report bugs and work with the development team to resolve identified
                              defects using QA methodology and practices, within the application of
                              SDLC.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {QAAutomationEngineer1Data.map((item) => {
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
                /*QA Automation Engineer I*/
              }
              {
                /*QAAutomation Engineer II*/
                <div className='row'>
                  <a name='qaAutomationEngineer2'>
                    <div className='doc-title'>QA Automation Engineer II</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I review the requirement, identify test cases, write test cases,
                              execute tests and produce QA reports for my manager.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {QAAutomationEngineer2Data.map((item) => {
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
                /*QA/SDET Engineer II*/
              }
              {
                /*Senior QA Automation Engineer*/
                <div className='row'>
                  <a name='seniorQAAutomationEngineer'>
                    <div className='doc-title'>Sr. QA Automation Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I report issues, work with engineering teams to resolve identified
                              defects, and make informed decisions by consulting the right
                              stakeholders and balancing details with the big picture.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {srQAAutomationEngineerData.map((item) => {
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
                /*Senior QA Automation Engineer*/
              }
              {
                /*Lead QA Automation Engineer*/
                <div className='row'>
                  <a name='leadQAAutomationEngineer'>
                    <div className='doc-title'>Lead QA Automation Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I lead my team for meetings to identify variance & defects while
                              working closely with clients to define and develop the best approach
                              for quality assurance.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {LeadQAAutomationEngineerData.map((item) => {
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
                /*Lead QA Automation Engineer*/
              }
              {
                /*Principal QA Automation Engineer*/
                <div className='row'>
                  <a name='principalQAAutomationEngineer'>
                    <div className='doc-title'>Expert QA Automation Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I set a strategy for managing result variance & defects and I report
                              variances/defects in user experience, usability, process flows,
                              functionalities to the stakeholders.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {PrincipalQAAutomationEngineerData.map((item) => {
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
                /*Principal QA Automation Engineer*/
              }
              {
                /*Sr. Principal QA Automation Engineer*/
                <div className='row'>
                  <a name='srPrincipalQAAutomationEngineer'>
                    <div className='doc-title'>Sr. Expert QA Automation Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I lead the implementation of quality standards and ensure adherence to
                              quality practices to take responsibility for the works that directly
                              affect the service and the company.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {srPrincipalQAAutomationEngineerData.map((item) => {
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
                /*Sr. Principal QA Automation Engineer*/
              }
              {
                /*DevOps/Platform Engineer1*/
                <div className='row'>
                  <a name='devOpsPlatformEngineer1'>
                    <div className='doc-title'>DevOps/Platform Engineer I</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I'm learning to excel at delivering resilient and long-lasting devops
                              processes, from design to implementation.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {devOpsPlatformEngineerData1.map((item) => {
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
                /*DevOps/Platform Engineer1*/
              }
              {
                /*DevOps/Platform Engineer2*/
                <div className='row'>
                  <a name='devOpsPlatformEngineer2'>
                    <div className='doc-title'>DevOps/Platform Engineer II</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I improve communication and software deployment within the entire
                              organization with scripting and automation.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {devOpsPlatformEngineerData2.map((item) => {
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
                /*DevOps/Platform Engineer2*/
              }
              {
                /*Senior DevOps/Platform Engineer*/
                <div className='row'>
                  <a name='sdevOpsPlatformEngineer'>
                    <div className='doc-title'>Senior DevOps/Platform Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I advise on the alignment of operations with information systems,
                              writing code and scripts, and ensuring the seamless deployment of
                              software.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {sdevOpsPlatformEngineerData.map((item) => {
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
                /*Senior DevOps/Platform Engineer*/
              }
              {
                /*Lead DevOps/Platform Engineer*/
                <div className='row'>
                  <a name='leadDevOpsPlatformEngineer'>
                    <div className='doc-title'>Lead DevOps/Platform Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I am a key member of DevOps team and apply my knowledge of design
                              principles, practices in the implementation of complex,
                              enterprise-scale software systems.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {leadDevOpsPlatformEngineerData.map((item) => {
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
                /*Lead DevOps/Platform Engineer*/
              }
              {
                /*Principal DevOps/Platform Engineer*/
                <div className='row'>
                  <a name='principalDevOpsPlatformEngineer'>
                    <div className='doc-title'>Expert DevOps/Platform Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I am responsible for continuous improvement enabling frictionless
                              delivery of value to my customers.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {principalDevOpsPlatformEngineerData.map((item) => {
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
                /*Principal DevOps/Platform Engineer*/
              }
              {
                /*Sr. Principal DevOps/Platform Engineer*/
                <div className='row'>
                  <a name='srPrincipalDevOpsPlatformEngineer'>
                    <div className='doc-title'>Sr. Expert DevOps/Platform Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I take ownership for architecture, design, build and automation of our
                              CI/CD pipeline and infrastructure
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {srPrincipalDevOpsPlatformEngineerData.map((item) => {
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
                /*Sr. Principal DevOps/Platform Engineer*/
              }
              {
                /*Telephony Engineer I*/
                <div className='row'>
                  <a name='telephonyEngineer1'>
                    <div className='doc-title'>Telephony Engineer I</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I repair and examine telephony related problems, install and align
                              telephony devices connected to the servers.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {telephonyEngineer1Data.map((item) => {
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
                /*Telephony Engineer I*/
              }
              {
                /*Telephony Engineer II*/
                <div className='row'>
                  <a name='telephonyEngineer2'>
                    <div className='doc-title'>Telephony Engineer II</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I am prolific at building resilient and sustainable processes from
                              design to implementation.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {telephonyEngineer2Data.map((item) => {
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
                /*Telephony Engineer II*/
              }
              {
                /*Senior Telephony Engineer*/
                <div className='row'>
                  <a name='sTelephonyEngineer'>
                    <div className='doc-title'>Senior Telephony Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I am delivering telephony design, implementation and support for
                              employees, managers and clients.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {sTelephonyEngineerData.map((item) => {
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
                /*Senior Telephony Engineer*/
              }
              {
                /*Lead Telephony Engineer*/
                <div className='row'>
                  <a name='leadTelephonyEngineer'>
                    <div className='doc-title'>Lead Telephony Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I autonomously deliver ongoing business impact across a team, product
                              capability, or technical system.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {leadTelephonyEngineerData.map((item) => {
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
                /*Lead Telephony Engineer*/
              }
              {
                /*Principal Telephony Engineer*/
                <div className='row'>
                  <a name='principalTelephonyEngineer'>
                    <div className='doc-title'>Expert Telephony Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I have experienced in the multi-year, multi-team technical strategy
                              executions and deliver it through broad technical leadership.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {principalTelephonyEngineerData.map((item) => {
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
                /*Principal Telephony Engineer*/
              }

              {
                /*Senior Principal Telephony Engineer*/
                <div className='row'>
                  <a name='sPrincipalTelephonyEngineer'>
                    <div className='doc-title'>Sr. Expert Telephony Engineer</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I deliver results in align with the company-level business objective.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {sPrincipalTelephonyEngineerData.map((item) => {
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
                /*Senior Principal Telephony Engineer*/
              }

              {
                /*Service Group Architect I*/
                <div className='row'>
                  <a name='serviceGroupArchitect1'>
                    <div className='doc-title'>Service Group Architect I</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I deliver architectural designs and principles for my services and
                              collaborate with other Service Group Architects and Enterprise
                              Architects to ensure quality and consistency.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My key behaviors</strong>
                    </h1>
                  </div>
                  {serviceGroupArchitect1Data.map((item) => {
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
                /*Service Group Architect I*/
              }

              {
                /*Service Group Architect II*/
                <div className='row'>
                  <a name='serviceGroupArchitect2'>
                    <div className='doc-title'>Service Group Architect II</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I deliver architectural designs and principles for my services; solve
                              technical architectural conflicts among services and service groups.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My key behaviors</strong>
                    </h1>
                  </div>
                  {serviceGroupArchitect2Data.map((item) => {
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
                /*Service Group Architect II*/
              }
              {
                /*Sr. Service Group Architect / Enterprise Architect*/
                <div className='row'>
                  <a name='srServiceGroupArchitect'>
                    <div className='doc-title'>
                      Sr. Service Group Architect / Enterprise Architect
                    </div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I deliver architectural standards and guide engineering teams to
                              ensure architectural consistency.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My key behaviors</strong>
                    </h1>
                  </div>
                  {srServiceGroupArchitectData.map((item) => {
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
                /*Sr. Service Group Architect / Enterprise Architect*/
              }
              {
                /*Scrum Master I*/
                <div className='row'>
                  <a name='scrumMaster1'>
                    <div className='doc-title'>Scrum Master I</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I facilitate scrum teams in adapting lean practices and ensure
                              coordinating quality & timely delivery.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {scrumMaster1Data.map((item) => {
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
                /*Scrum Master I*/
              }
              {
                /*Scrum Master II*/
                <div className='row'>
                  <a name='scrumMaster2'>
                    <div className='doc-title'>Scrum Master II</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I coach, facilitate and train Scrum Teams in adopting lean practices
                              at service group/product level.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {scrumMaster2Data.map((item) => {
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
                /*Scrum Master II*/
              }
              {
                /*Scrum Master III*/
                <div className='row'>
                  <a name='scrumMaster3'>
                    <div className='doc-title'>Scrum Master III</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I’m a true leader and create a self-managing environment for scrum
                              teams.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {scrumMaster3Data.map((item) => {
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
                /*Scrum Master III*/
              }
              {
                /*Agile Coach*/
                <div className='row'>
                  <a name='agileCoach'>
                    <div className='doc-title'>Agile Coach</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I coach scrum teams on Agile Frameworks and create Continuous Learning
                              Environment for scrum teams to be more effective and self-managing in
                              producing Quality Outcomes.
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My Role Profile</strong>
                    </h1>
                  </div>
                  {agileCoachData.map((item) => {
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
                /*Agile Coach*/
              }
              {
                /*Service Group Leader*/
                <div className='row'>
                  <a name='serviceGroupLeader'>
                    <div className='doc-title'>Group Leader I</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I independently lead a team of engineers delivering direct business
                              impact
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My key behaviors</strong>
                    </h1>
                  </div>
                  {serviceGroupLeaderData.map((item) => {
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
                /*Service Group Leader*/
              }
              {
                /*Sr Service Group Leader*/
                <div className='row'>
                  <a name='srServiceGroupLeader'>
                    <div className='doc-title'>Group Leader II</div>
                  </a>
                  <div>
                    <section className='doc-layout note'>
                      <div>
                        <span>
                          <b>
                            <i>
                              I manage significant complexity with skill to deliver multiple major
                              workstreams simultaneously in service of the overall business
                            </i>
                          </b>
                        </span>
                      </div>
                    </section>
                  </div>
                  <div>
                    <h1 className='doc-sub-title'>
                      <strong>My key behaviors</strong>
                    </h1>
                  </div>
                  {srServiceGroupLeaderData.map((item) => {
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
                /*Sr Service Group Leader*/
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EngineeringPrinciples
