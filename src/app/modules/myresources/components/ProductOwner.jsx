import {productOwner} from './utils/rolesData'
import {product_owner, po_planning} from '../../../../setup/appConstants'
import '../../assets/myCareer/mycareers.scss'
import './../../assets/myResources/agileAfiniti.scss'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'

function ProductOwner() {
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
                  <div className='row' id='roles'>
                    <h1>
                      <strong>{productOwner.heading}</strong>
                    </h1>
                    <div className='separator-short' />
                    <p>{productOwner.paragraph}</p>
                    <div className='separator-short'></div>
                    <div>
                      <b>{productOwner.dataListHeading}</b>
                      {productOwner.dataList.map((t) => {
                        return (
                          <ul style={{paddingLeft: '50px'}}>
                            <li>{t}</li>
                          </ul>
                        )
                      })}
                    </div>
                    <h2>
                      <span>
                        <img
                          alt=''
                          src={product_owner}
                          width='100%'
                          style={{marginRight: '10px'}}
                        />
                      </span>
                    </h2>
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
                  <div className='row' id='roles'>
                    <h2>
                      <div>
                        <b>My one week as a Product Owner</b>
                      </div>
                    </h2>
                    <h2>
                      <span>
                        <img alt='' width='100%' src={po_planning} style={{marginRight: '10px'}} />
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

export default ProductOwner
