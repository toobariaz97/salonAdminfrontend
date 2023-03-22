import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validator from 'validatorjs'
import useMessagePopup from '../../Hooks/useMessagePopup'
import { verifyEmail } from '../../services/passwordRecovery'

export const PR1 = () => {

  let navigate = useNavigate()
  const [formData, setFormData] = useState(
    {
      email: null
    }
  )
  const { email } = formData;
  const [validation, setValidation] = useState({});

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const { successPopup, errorPopup } = useMessagePopup()


  const onSubmit = async (e) => {
    e.preventDefault();
    const validator = new Validator(formData, {
      email: 'required|email',
    });
    setValidation(validator);
    if (validator.fails()) return;

    // setAlert('Email is verified', "success")
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
useEffect(()=>{


},[validation])

  return (
    <><section className="authPage">
    <div className="container login-form">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img src="images/login-main.png" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-5">
          <form  onSubmit={onSubmit}>
            <div className="pb-4 text-center">
              <img src="images/logo.png" alt="signIn" className="logo img-fluid" />
              <h4 className="login-heading mt-4 mb-2">PASSWORD RECOVERY</h4>
              <p className="login-text">Enter Your Email Address To Receive A Verification Code.</p>
            </div>
            <div className>
              <label htmlFor="email" className="input-lbl">Email Address<span>*</span></label>
              <input type="email" placeholder="Enter Your Email Address" className="all-input w-100"
              value={formData?.email} name="email" onChange={onChange}
              />
            </div>
            <span className='pt-5 text-danger'>{validation?.errors?.first("email")}</span>
            <div className="my-5 text-center">
              <button className="general-btn px-5">CONTINUE</button>
              <Link to='/login' className="login-back px-5"><i className="fas fa-long-arrow-alt-left me-2" /> Back To Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
