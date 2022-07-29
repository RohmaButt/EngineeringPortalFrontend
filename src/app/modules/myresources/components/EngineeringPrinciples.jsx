import {
  EngineeringPrinciplesImg,
  EngineeringPrinciplesImg2,
} from  '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import { FeedbackButton } from  '../../shared/FeedbackButton/FeedbackButton'

function EngineeringPrinciples() {
  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <FeedbackButton
          link="https://forms.monday.com/forms/88f9120bdece660501251463d9a964ea?r=use1"
          containerStyle={{
            position: "absolute",
            right: '20px',
            top: '30px',
            zIndex: 9,
            opacity: 0.3,
          }}
        />
        <div className="content"></div>
        <div className="container">
          <div className="doc-container">
            <div className="doc-content">
              <div className="row">
                <img alt="" src={EngineeringPrinciplesImg} />
              </div>
              <div className="seperator-tall"></div>
              <div className="row">
                <p>
                  We aim our engineering team to be able perform around simple
                  and valuable principles. We defined our engineering principles
                  for&nbsp; our way of working and also created expected
                  behaviors in career ladder in harmony with those.
                </p>
                <p>
                  You may find our 6 main principles and rationale behind those
                  in a nutshell;
                </p>
                <img alt="" src={EngineeringPrinciplesImg2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngineeringPrinciples;
