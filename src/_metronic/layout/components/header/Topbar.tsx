import clsx from 'clsx'
import { Modal } from 'react-bootstrap-v5'
import { keyBy } from 'lodash';
import { useLocation } from 'react-router'
import React, { FC } from 'react'
import { KTSVG } from '../../../helpers'
import { ReactComponent as LogoutLogo } from '../../../assets/logos/logout.svg'
import { useDispatch } from 'react-redux'
import { useLayout } from '../../core'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import './styles/header-custom.scss'
import { useTracking } from 'react-tracking';
import { UserContext } from '../../../../app/modules/context/UserContext'
import { removeUserSession } from '../../../../app/modules/auth/Common'
import { fetchMiddleWare } from '../../../../app/pages/dashboard/utils/apiMiddleWare';
const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1'

const Topbar: FC = () => {
  const { setComponentRights, setIUser, setUserEmail, errorText, setErrorText }: any = React.useContext(UserContext)
  const { config } = useLayout()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { trackEvent } = useTracking();
  const [impersonationError, setImpersonationError] = React.useState(false);
  const [impersonationEmail, setImpersonationEmail] = React.useState('');
  const [iEmail, setIemail] = React.useState("");

  const [showModal, setShowModal] = React.useState(false)
  const logout = () => {
    setComponentRights({})
    setIUser(null)
    removeUserSession()
    setUserEmail('')
    // setImpersonationEmail(null);
    window.location.reload()
    dispatch(auth.actions.logout())
  }
  const createImpersonate = (email: string) => {

    fetchMiddleWare(`User/getUserProfileData?email=${email}`).then((response) => {
      if (response?.responseCode === 0) {
        const keyBys = keyBy(response?.data, "code");
        setComponentRights(keyBys);
        setIUser(keyBys?.C_USER_CAT_INFO);
        setUserEmail(email)
        setErrorText('')
        setImpersonationEmail(email);
        setImpersonationError(false)
      }
      if (response?.responseCode === -3) {
        setErrorText("This user is not an authorized one for this portal")
        setImpersonationEmail(email);
        setImpersonationError(true);
        setComponentRights(
          JSON.parse(localStorage.getItem("componentRights") || "")
        );

      }
    })
      .catch((error) => {
        setImpersonationError(true);
        console.error(error);
      });
  };
  const setImpersonate = (e: any) => {
    e.preventDefault();
    createImpersonate(iEmail)
    setShowModal(false)
  };


  return (
    <>
      <div className='d-flex align-items-stretch flex-shrink-0'>
        <div className='d-flex justify-content-end align-items-center py-4 pl-3'>

          {impersonationEmail && !impersonationError && (
            <div style={{ marginRight: "14px" }}>
              You are impersonating <b>{impersonationEmail}</b>
            </div>
          )}
          {impersonationError && (
            <div style={{ marginRight: "14px", color: "red" }}>
              {errorText ? errorText : 'Unable to impersonate'} <b>{impersonationEmail}</b>
            </div>
          )}
          <div className='me-4'>
            {/* begin::Menu */}
            <button
              className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
              onClick={() => setShowModal(true)}
            >
              Impersonate
            </button>

            {/* end::Menu */}
          </div>
        </div>
        <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
          {/* begin::Menu wrapper */}
          <div
            className={clsx(
              'btn btn-icon btn-active-light-primary logout-custom',
              toolbarButtonHeightClass
            )}
            data-kt-menu-trigger='click'
            onClick={() => {
              trackEvent({
                Path: 'TopBar',
                DomSelector: "log-out",
              })
              logout()
            }}
            data-kt-menu-attach='parent'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='bottom'
          >
            <LogoutLogo
              height={24}
              width={24}
              stroke='#7e8299'
              className={toolbarButtonIconSizeClass}
            />
          </div>
        </div>
        {/* {config.header.left === 'menu' && (
          <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
            <div
              className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
              id='kt_header_menu_mobile_toggle'
            >
              <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
            </div>
          </div>
        )} */}

      </div>
      <Modal
        show={showModal}
        onHide={() => {
          trackEvent({
            Path: 'TopBar',
            DomSelector: "hide-modal-button",
          })
          setShowModal(false)
        }}
        // style={{ width: '300px' }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton={false} >
          <Modal.Title id="contained-modal-title-vcenter">
            <span style={{ fontSize: '15px' }}>

              User Impersonation
            </span>
          </Modal.Title>
          <button
            onClick={() => {
              trackEvent({
                Path: 'Imppersonation-modal',
                DomSelector: "submit-impersonation-email-button",
              })
              setShowModal(false)
            }
            }
            className="btn btn-light"
            type="submit"
            style={{ marginTop: "14px", height: '40px', width: '80px' }}
          >
            Close
          </button>
        </Modal.Header>
        <Modal.Body >
          <form onSubmit={(e) => {
            trackEvent({
              Path: 'Imppersonation-modal',
              DomSelector: "submit-impersonation-email-button",
            })
            setImpersonate(e)
          }} style={{ display: "flex", alignItems: 'end', justifyContent: 'space-between' }}>
            <input
              onChange={(e) => setIemail(e.target.value)}
              name="email"
              className="form-control"
              type="email"
              pattern=".+@afiniti\.com"
              placeholder="Enter email to impersonate"
              style={{ width: '70%', marginRight: '40px' }}
            />
            <div>
              <button
                className="btn btn-light"
                type="submit"
                style={{ marginTop: "14px", marginLeft: '20px' }}
              >
                Impersonate
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export { Topbar }
