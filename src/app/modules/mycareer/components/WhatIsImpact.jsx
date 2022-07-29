import {WhatIsImpactImg} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'

function WhatIsImpact() {
  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <div className='content'></div>
        <div className='container'>
          <div className='doc-container'>
            <div className='doc-content'>
              <div className='row'>
                <img alt='' src={WhatIsImpactImg} />
              </div>
              <div className='seperator-tall'></div>
              <div className='row'>
                <h2>
                  <strong>What is Impact?</strong>
                </h2>
                <div>
                  <p>
                    Business Impact starts and ends with better serving our customers, which, in
                    turn, helps Afiniti succeed as a business.
                  </p>
                  <p>
                    Every one of us at Afiniti has an impact on our business results due to the
                    roles we play in the company. On the other hand, defining and quantifying this
                    impact may be difficult. The purpose of including a "business impact" section in
                    job role profiles is to define explicitly how each role creates that impact by
                    defining key responsibilities and results (KPIs) that are aligned with business
                    objectives. 
                  </p>
                  {/* <p>
                    We know that making a positive impact on Afiniti and its customers will give you
                    the upper-hand when it comes to managing your career. That’s why we’ve described
                    the impact of each criteria on Afiniti and customers, we’ve listed the exact
                    criteria we consider when creating a role profile, so that you know what matters
                    most to Afiniti and our customers.
                  </p> */}
                </div>

                <div>
                  <h2>
                    <strong>Role Profiles</strong>
                  </h2>
                </div>
                <p>The profiling criteria below will help you understand your role in details.</p>
                <p dir='auto'>
                  <strong>Responsibilities</strong>
                </p>
                <p>
                  You are an authority at Afiniti on a particular domain. This could be a platform,
                  particular field of computer science, or product category. Responsibility is what
                  we use to describe the work and functions that you need to perform in a particular
                  role. It is also the obligation of your role to perform the duty or task assigned
                  to you.
                </p>
                <p dir='auto'>
                  <strong>Business Impact</strong>
                </p>
                <p>
                  You excel at identifying high-impact ideas (either technical or product) that you
                  and the team build and that successfully improve our products or productivity. You
                  are both a force behind the creation of sustainable solutions for these ideas, and
                  successful in getting the needed momentum behind them to see them realized. Your
                  impact comes through keeping Afiniti on the leading edge of our space and market.
                </p>
                <p dir='auto'>
                  <strong>Technical Expertise</strong>
                </p>
                <p>
                  Everybody knows what an expert looks like. However, it turns out surprisingly
                  difficult to provide a formal definition that everybody can agree with. At
                  Afiniti, expertise is your know-how and ability to carry out actions to create an
                  impact in your role. The ability and expertise of you, as determined by the level
                  in Afiniti career management framework, greatly affects the use of information.
                </p>
                <p dir='auto'>
                  <strong>Leadership and Interpersonal Skills</strong>
                </p>

                <p>
                  Leaders are people who do the right thing via using interpersonal and
                  communication skills. Your actions give your teammates and colleagues an
                  inspiration about doing better in their jobs. While progressing in your career at
                  Afiniti, you set direction, build an inspiring vision, and create something new.
                  It is important to build a “win-win culture” as a team and an organization.
                </p>
                <p dir='auto'>
                  <strong> Problem Solving</strong>
                </p>
                <p>
                  You are a role model for excellence in your role, and you actively level up those
                  around you through the practice of your craft, guidance, and problem solving.
                  Impact comes through how you contribute to solutions, and how you handle with
                  problems with your knowledge and abilities. It is also critical to think and learn
                  about new models while progressing in your career.
                </p>
                <p dir='auto'>
                  <strong>Technical Skills</strong>
                </p>
                <p dir='auto'>
                  Our business environment is complex and changing at a fast pace. Tough business
                  problems require broad and deep technical skills to create sustainable solutions.
                  With technical expertise, you work more efficiently with greater confidence and
                  ultimately you will feel more valuable in your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatIsImpact
