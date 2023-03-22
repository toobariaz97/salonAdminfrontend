import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Validator from 'validatorjs';
import useMessagePopup from '../../Hooks/useMessagePopup';
import { changePassword } from '../../services/auth';

export const ChangePassword = () => {

  const [validation, setValidation] = useState({});
  const [formData, setFormData] = useState({
    current_password: null,
    password: null,
    password_confirmation: null
  })

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const [value, setValue] = useState({
    current_password: "",
    showCurrentPassword: false
  })
  const [passwordValue, setPasswordValue] = useState({
    password: "",
    showPassword: false
  })
  const [passwordConfirmationValue, setPasswordConfirmationValue] = useState({
    passwordConfirmation: "",
    showPasswordConfirmation: false
  })


  const handleCurrentPassword = (e) => {
    setValue({ ...value, showCurrentPassword: !value.showCurrentPassword })
  }

  const handlePassword = (e) => {
    setPasswordValue({ ...passwordValue, showPassword: !passwordValue.showPassword })
  }
  const handleConfirmationPassword = (e) => {
    setPasswordConfirmationValue({ ...passwordConfirmationValue, showPasswordConfirmation: !passwordConfirmationValue.showPasswordConfirmation })
  }
  const { successPopup, errorPopup } = useMessagePopup();

  const onSubmit = async (e) => {
    e.preventDefault()
    let validator = new Validator(formData, {
      current_password: 'required',
      password: 'required|confirmed',
      password_confirmation: 'required'
    })
    setValidation(validator)
    if (validator.fails()) return;

    try {
      let { status, message } = await changePassword(formData);
      console.log(message);
      console.log(formData?.current_password)
      if (status) {
        successPopup({ message })
        setFormData({
          current_password:"",
          password:"",
          password_confirmation:""
        })
      }
      else {
        errorPopup(message)
      }
    } catch (error) {
      console.log(error)
      errorPopup(error)
    }
  }

  return (
    <>
      <section id="configuration">
        {/* User Details Starts */}
        <div className="box py-5">
          <div className="d-flex align-items-center">
            <Link to="/profile" className="d-inline-block me-2"><img src="images/back-2.png" alt="" /></Link>
            <h1 className="main-heading d-inline-block mb-0">Change Password</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 mt-3">
              <label htmlFor="pass" className="input-lbl">Current Password<span>*</span></label>
              <div className="position-relative">
                <input type={value?.showCurrentPassword ? "text" : "password"} className="all-input w-100 right-icon-input enter-input-3" placeholder="Enter Current Password" name="current_password" id="current_password"
                  value={formData?.current_password} onChange={onChange}
                />
                <button onClick={handleCurrentPassword}>
                  <i className="fa fa-eye-slash enter-icon-3 right-icon passDisplay" aria-hidden="true" />
                </button>
              </div>
              <span className='text-danger'>{validation.errors?.first("current_password")}</span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 mt-3">
              <label htmlFor="pass" className="input-lbl">New Password<span>*</span></label>
              <div className="position-relative">
                <input type={passwordValue.showPassword ? "text" : "password"} className="all-input w-100 right-icon-input enter-input"
                  placeholder="Enter New Password" name="password" id="password" value={formData?.password} onChange={onChange} />
                <button onClick={handlePassword}>

                  <i className="fa fa-eye-slash enter-icon right-icon passDisplay" aria-hidden="true" />

                </button>
              </div>
              <span className='text-danger'>{validation.errors?.first("password")}</span>

            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 mt-3">
              <label htmlFor="pass" className="input-lbl">Confirm Password<span>*</span></label>
              <div className="position-relative">
                <input type={passwordConfirmationValue?.showPasswordConfirmation ? "text" : "password"} className="all-input w-100 right-icon-input enter-input-2" placeholder="Confirm Password"
                  name="password_confirmation" id="password_confirmation" value={formData?.password_confirmation} onChange={onChange} />
                <button onChange={handleConfirmationPassword}>

                  <i className="fa fa-eye-slash enter-icon-2 right-icon passDisplay" aria-hidden="true" />
                </button>
              </div>
              <span className='text-danger'>{validation.errors?.first("password-confirmation")}</span>

            </div>
          </div>
          <div className="mt-5 text-center">
            <button type='submit' className="general-btn px-5"  onClick={onSubmit}>Update</button>
          </div>
        </div>
      </section>

    </>
  )
}
