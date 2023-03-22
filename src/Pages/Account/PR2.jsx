import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validator from 'validatorjs'
import useMessagePopup from '../../Hooks/useMessagePopup'
import { verifyCode, verifyEmail } from '../../services/passwordRecovery'

export const PR2 = () => {



  let navigate = useNavigate()
  const [email] = useState(localStorage.getItem('email'))
  const [formData, setFormData] = useState(
    {
      code: null
    }
  )
  const { code } = formData;
  const [validation, setValidation] = useState({});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const { successPopup, errorPopup } = useMessagePopup()

  const resendCode=async(e)=>{
e.preventDefault()
    try {

      let { status, message } = await verifyEmail({ email });

      if (status) {
        localStorage.setItem("email", email)
        successPopup({ message })
        setTimeout(() => {
          navigate('/verify-code');
        }, 2000);
      }
      else{
        errorPopup(message)
      }
   
    } catch (error) {
      // console.log(error)
      errorPopup(error)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const validator = new Validator(formData, {
        code: 'required',
        // password_confirmation:"required"
      });
      setValidation(validator);
      if (validator.fails()) return;

      let { status, message } = await verifyCode(code, email);

      if (status) {
        localStorage.setItem("code", code)
        successPopup({ message })
        setTimeout(() => {
          navigate('/password-reset');
        }, 2000);
      }
      else {
      }
    } catch (error) {
      console.log(error)
      errorPopup(error)
    }
    // setAlert('Email is verified', "success")

  }

  return (
    <>
      <section className="authPage">
        <div className="container login-form">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="images/login-main.png" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-5">
              <form >
                <div className="pb-4 text-center">
                  <img src="images/logo.png" alt="signIn" className="logo img-fluid" />
                  <h4 className="login-heading mt-4 mb-2">PASSWORD RECOVERY</h4>
                  <p className="login-text">Enter Verification Code To Recover Your Password.</p>
                </div>
                  <input type="hidden" value={email} name="email" id="" />
                <div className>
                  <label htmlFor="email" className="input-lbl">Verification Code<span>*</span></label>
                  <input type="number" maxLength={4} placeholder="Enter Verfication Code"
                    className="all-input w-100" value={formData?.code} onChange={onChange} name="code" />
                </div>
                <span className='text-danger'>{validation?.errors?.first("code")} </span>
                <div className='text-end text-white'>
                  <button type='submit' className='text-white' onClick={e=>resendCode(e)}>Resend again   <i className="fa fa-refresh" aria-hidden="true" style={{color:"white"}}></i> </button>
                </div>
                <div className="my-5 text-center">
                  <button type='submit' className="general-btn px-5" onClick={onSubmit}>CONTINUE</button>
                  <Link to="/login" className="login-back px-5"><i className="fas fa-long-arrow-alt-left me-2" /> Back To Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
