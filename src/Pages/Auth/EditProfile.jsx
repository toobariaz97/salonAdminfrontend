import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useFileReader from '../../Hooks/useFileReader';
import { getAccessToken } from '../../utils/setAuthToken';
import Validator from 'validatorjs'
import { editProfile } from '../../services/auth';
import useMessagePopup from '../../Hooks/useMessagePopup';

export const EditProfile = () => {

  let navigate = useNavigate()
  const { user } = useSelector(state => state?.auth)
  let { getThumbnail } = useFileReader()
  const [validation, setValidation] = useState([])
  const [name, setName] = useState(null);
  const [image, setImage] = useState("");
  const { successPopup, errorPopup } = useMessagePopup()
  const [thisImage, setThisImage] = useState(null)
  console.log(image, 20);

  const onSubmit = async (e) => {
    e.preventDefault();

    let validator = new Validator({ name }, {
      name: 'required'
    })
    setValidation(validator)
    if (validator.fails()) return;

    try {

      let newData = new FormData()
      newData.append('name', name);
      newData.append('image', image);
      if (image !== undefined) {
        let { status, message } = await editProfile(newData);

        if (status) {
          successPopup({ message })
          setName(name)
          setTimeout(() => {
            navigate('/profile')
          }, 2000);

        }

      }
      else {
        throw new Error("error")
      }
    } catch (error) {
      errorPopup(error)
    }
  }

  const setFile = async (e) => {
    try {
      let file = e.target.files[0];
      console.log(file);
      let fileThumbnail = await getThumbnail(file);
      setThisImage(fileThumbnail);
      setImage(file)
      console.log(image, 60);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user?.name);
      if (user?.image_url.includes("undefined")) setThisImage("images/avatar.png")
      else setThisImage(user?.image_url)
    }
    // else navigate('/login')
  }, [user])


  return (
    <>
      <section id="configuration">
        {/* User Details Starts */}
        <div className="box py-5">
          <div className="d-flex align-items-center">
            <Link to={'/profile'} className="d-inline-block me-2">
              <img src="images/back-2.png" alt="back" /></Link>
            <h1 className="main-heading d-inline-block mb-0">Edit Profile</h1>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <span className="position-relative d-inline-block">
                {/* {
            user && (
              user?.image_url?
              <> */}
                <img src={thisImage} alt="avatar" className="userAvatar img-fluid" style={{ width: "120px", height: "120px" }} />
                <label htmlFor="picture" className="d-block">
                  <img src="images/camera-2.png" alt="" className="pro-upload-2" />
                </label>
                {/* </> */}
                {/* :
          <>
          <img src={image} alt="avatar" className="userAvatar img-fluid" style={{ width: "160px", height: "150px" }}/>
          <label htmlFor="picture" className="d-block">
            <img src="images/camera-2.png" alt="" className="pro-upload-2" />
          </label>
          </>
         
            )

          
          
          } */}
              </span>

              <div className="d-none">
                <input type="file" accept=".gif,.jpg,.png,|image/*" id="picture"
                  onChange={(e) => setFile(e)}
                />
                <input type="submit" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 mt-3">
              <label htmlFor="pass" className="input-lbl">Name<span>*</span></label>
              <input type="text" defaultValue="Mark Carson" className="all-input w-100" name="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <span> {validation?.errors?.first("name")}</span>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 mt-3">
              <label htmlFor="pass" className="input-lbl ms-0">Email:</label>
              <p className="lbl-value">{user && (user?.email)}</p>
            </div>
          </div>
          <div className="mt-5 text-center">
            <button type="submit" className="general-btn px-5" onClick={onSubmit}>Update</button>
            <button className="general-btn-3 px-5" type="button">Cancel</button>
          </div>
        </div>
      </section>

    </>
  )
}
