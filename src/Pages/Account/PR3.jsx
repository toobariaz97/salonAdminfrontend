import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Validator from 'validatorjs'
import useMessagePopup from '../../Hooks/useMessagePopup'
import { passwordReset } from '../../services/passwordRecovery'

export const PR3 = () => {
let navigate=useNavigate()

  const [validation, setValidation] = useState([]);
  const { successPopup, errorPopup } = useMessagePopup()

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  
  const [email]=useState(localStorage.getItem("email"));
  const [code]= useState(localStorage?.getItem('code'))
  const [formData, setFormData] = useState({
    email:email,
    code:code,
    password: null,
    password_confirmation: null
  })

  const [value, setValue] = useState({
    passwordReset: "",
    showPassword: false
  })


  const handleCurrentPassword = (e) => {
    setValue({ ...value, showPassword: !value.showPassword })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const validator = new Validator(formData, {
        password : 'required|confirmed',
      });
      setValidation(validator);
      if (validator.fails()) return;
      let { status, message } = await passwordReset(formData)
      if (status) {
        successPopup({ message })
        localStorage.removeItem("email")
        localStorage.removeItem('code');
        setFormData({
          password:"",
          password_confirmation:""
        })
      }

      setTimeout(() => {
        navigate('/login')
      }, 2000);

    } catch (error) {
errorPopup(error)
    }
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
              <form>
                <div className="pb-4 text-center">
                  <img src="images/logo.png" alt="signIn" className="logo img-fluid" />
                  <h4 className="login-heading mt-4 mb-2">PASSWORD RECOVERY</h4>
                  <p className="login-text">Please Enter New Password</p>
                </div>
                <div className="my-3">
                  <label htmlFor="pass" className="input-lbl">New Password<span>*</span></label>
                  <div className="position-relative">
                    <input type="hidden" value={formData?.email} name="email" />
                    <input type="hidden" value={formData?.code}  name="code" />
                    <input type={value?.showPassword?"text":"password"} className="all-input w-100 right-icon-input enter-input" placeholder="Enter New Password" name="password"
                    value={formData?.password} onChange={onChange}
                    id />
                    <i className="fa fa-eye-slash enter-icon right-icon passDisplay" aria-hidden="true" onClick={handleCurrentPassword} />
                  </div>

                  <span className='text-danger'>{validation?.errors?.first("password")}</span>
                </div>
                <div className="my-3">
                  <label htmlFor="pass" className="input-lbl">Confirm Password<span>*</span></label>
                  <div className="position-relative">
                    <input type={value?.showPassword?"text":"password"} className="all-input w-100 right-icon-input enter-input-2"
                     placeholder="Confirm Password" name="password_confirmation"
                    value={formData?.password_confirmation} onChange={onChange}
                    id />
                    <i className="fa fa-eye-slash enter-icon-2 right-icon passDisplay" aria-hidden="true"  onClick={handleCurrentPassword}/>
                  </div>
                  <span className='text-danger'>{validation?.errors?.first("password_confirmation")}</span>
                </div>
                <div className="my-5 text-center">
               
                  <button type='submit' className="general-btn px-5" onClick={onSubmit}>Update</button>
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
