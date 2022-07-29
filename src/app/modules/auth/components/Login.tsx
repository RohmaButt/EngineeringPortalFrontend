/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {keyBy} from 'lodash'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useHistory} from 'react-router-dom'
import {useFormik} from 'formik'
import * as auth from '../redux/AuthRedux'
import {login} from '../redux/AuthCRUD'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {setUserSession} from '../Common'
import {UserContext} from '../../context/UserContext'

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Username is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login(props: any) {
  const _userContext: any = React.useContext(UserContext)
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [hasError, setError] = useState('')
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values: any, {setStatus, setSubmitting}: any) => {
      setLoading(true)
      setTimeout(() => {
        login(values.username.replace('@afiniti.com', ''), values.password)
          .then((response) => {
            console.log('response', response)
            if (
              response?.crowdToken === null ||
              response?.crowdToken === '' ||
              response?.userDisplayName === null ||
              response?.userDisplayName === '' ||
              response?.email === null ||
              response?.email === ''
            ) {
              setLoading(false)
              setSubmitting(false)
              setStatus('Wrong username. Please contact BI Team')
              setError('Wrong username. Please contact BI Team')
              return
            }
            if (typeof response == 'string' && response.includes('Invalid credentials!')) {
              setLoading(false)
              setSubmitting(false)
              setStatus(response)
              setError(response)
              return
            }
            if (
              response?.crowdToken !== null &&
              response?.crowdToken !== '' &&
              response?.userDisplayName !== null &&
              response?.userDisplayName !== '' &&
              response?.email !== null &&
              response?.email !== ''
            ) {
              _userContext.setComponentRights(keyBy(response?.userProfileData, 'code'))
              setUserSession(response)
              setLoading(false)
              history.push(
                keyBy(response?.userProfileData, 'code')?.LANDING_PAGE?.props?.LANDING_PAGE
              )
            }
          })
          .catch((err) => {
            console.log('e', err)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
            setError('Please contact BI team')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Log In</h1>
        <div className='text-gray-400 fw-bold fs-4'>Access your dashboard </div>
      </div>
      {/* {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            continue.
          </div>
        </div>
      )} */}

      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Username</label>
        <input
          placeholder='Username'
          {...formik.getFieldProps('username')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.username && formik.errors.username},
            {
              'is-valid': formik.touched.username && !formik.errors.username,
            }
          )}
          name='username'
          autoComplete='off'
        />
        {formik.touched.username && formik.errors.username && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.username}</span>
          </div>
        )}
      </div>

      <div className='fv-row mb-5'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
          </div>
        </div>
        <input
          type='password'
          placeholder='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      <div className='mb-5'>
        {hasError && (
          <span style={{color: 'red', display: 'block'}} className='px-6'>
            {hasError.includes(
              'Invalid credentials! Please contact service desk for resetting your password.'
            ) ? (
              <>
                Invalid credentials! Please contact
                <a
                  href='mailto:servicedesk@afiniti.com'
                  style={{color: 'red'}}
                  className='text-hover-primary px-1'
                >
                  Service Desk
                </a>
                for resetting your password.
              </>
            ) : hasError.includes('Wrong username. Please contact BI Team') ? (
              <>
                Wrong username. Please contact
                <a
                  href='mailto:afinitibi@afiniti.com'
                  style={{color: 'red'}}
                  className='text-hover-primary px-1'
                >
                  BI Team
                </a>
              </>
            ) : (
              hasError
            )}
          </span>
        )}
      </div>
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

        {/* begin::Separator */}
        {/* <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div> */}
        {/* end::Separator */}

        {/* begin::Google link */}
        {/* <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Continue with Google
        </a> */}
        {/* end::Google link */}

        {/* begin::Google link */}
        {/* <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
            className='h-20px me-3'
          />
          Continue with Facebook
        </a> */}
        {/* end::Google link */}

        {/* begin::Google link */}
        {/* <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
            className='h-20px me-3'
          />
          Continue with Apple
        </a> */}
        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </form>
  )
}
