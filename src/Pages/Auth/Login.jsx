import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import useMessagePopup from '../../Hooks/useMessagePopup';
import Validator from 'validatorjs';
import { login } from '../../services/auth';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

let navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });


  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  const [value, setValue] = useState(
    {
      password: '',
      showPassword: false
    }
  );
  const handleClickShowPassword = (e) => {
    console.log(value);
    setValue({ ...value, showPassword: !value.showPassword });
  };
  const { successPopup, errorPopup } = useMessagePopup();

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const validator = new Validator(formData, {
      email: 'required|email',
      password: "required"
    });
    setValidation(validator);
    if (validator.fails()) return;


    try {
      navigate('/')
      let { status, message } = await login(formData);
      if (status) {
        successPopup({ message: message });
        // setTimeout(() => {
        // }, 2000);
      }

    } catch (error) {
      errorPopup(error);
      // setError(error)
      console.log(error);
    }
  });



  return (
    <>
      <section className="authPage">
        <div className="container login-form">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="images/main1.jpg" alt="" className="img-fluid" style={{ opacity: 0.6 }} />
            </div>
            <div className="col-lg-5">
              <form>
                <div className="pb-4 text-center">
                  <img src="images/logo.png" alt="signIn" className="logo img-fluid" />
                  <h4 className="login-heading mt-4 mb-2">LOGIN</h4>
                  <p className="login-text">Login To Your Account</p>
                </div>
                <div className>
                  <label htmlFor="email" className="input-lbl">Email Address<span>*</span></label>
                  <input type="email" placeholder="Enter Your Email Address" className="all-input w-100"
                    value={formData?.email} name="email" onChange={onChange}
                  />
                </div>
                <span className='pt-5 text-danger'>{validation?.errors?.first("email")}</span>
                <span className='pt-5' style={{ color: "red" }}>{error.message}</span>

                <div className="my-3">
                  <label htmlFor="pass" className="input-lbl">Password<span>*</span></label>
                  <div className="position-relative">
                    <input type={value?.showPassword ? "text" : "password"} className="all-input w-100 right-icon-input enter-input" placeholder="Enter Password"
                      name="password"
                      value={formData?.password}
                      onChange={onChange}
                    />
                    <label onClick={handleClickShowPassword}>

                      <i className="fa fa-eye-slash enter-icon right-icon passDisplay" aria-hidden="true" />
                    </label>
                  </div>
                  <span className='pt-5 text-danger'>{validation?.errors?.first("password")}</span>

                </div>
                <div className="d-sm-flex justify-content-between align-items-center">
                  <p className="checkbx mb-0">
                    <input type="checkbox" id="c1" name="cb" />
                    <label htmlFor="c1">Remember Me</label>
                  </p>
                  <Link to={'/verify-email'} className="forgot-pwd">Forgot Password?</Link>
                </div>
                <div className="my-5 text-center">
                  <button type='submit' className="general-btn px-5" onClick={()=>onSubmit()}>LOGIN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
