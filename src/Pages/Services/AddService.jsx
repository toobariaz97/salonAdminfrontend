import { Modal } from 'bootstrap';
import React, { useState } from 'react'
import Validator from 'validatorjs';
import useMessagePopup from '../../Hooks/useMessagePopup';
import { addService } from '../../services/service';

export const AddService = ({services}) => {

  const [serviceName, setServiceName] = useState("");
  const [validation, setValidation] = useState([]);
  const { successPopup, errorPopup } = useMessagePopup()

  const onSubmit = async (e) => {
    e.preventDefault()
    let validator = new Validator({ serviceName }, (
      {
        serviceName: "required"
      }))
      setValidation(validator);
      if(validator.fails()) return
    try {
      let popup= Modal.getOrCreateInstance(document.querySelector('#add-service'))

      let { status, message } = await addService({serviceName} );
      if (status) {
        successPopup({ message })
        popup.hide();
        setServiceName("")
        services()
     
      }
    

    } catch (error) {
      console.log(error);
      errorPopup(error)
    }
  }
  return (
    <>
    <div className="modal fade" id="add-service" tabIndex={-1} aria-labelledby="logoutModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" /></button>
      </div>
      <div className="modal-body pb-5">
        <div className="main-modal-msg my-2">
          <p className="modal-heading">Add New service</p>
        </div>
        <div className="text-left">
          <label htmlFor className="input-lbl">Service Name<span>*</span></label>
          <input type="text" placeholder="Enter Service Name" className="all-input w-100"
          name='serviceName' value={serviceName} onChange={e=>setServiceName(e.target.value)}
          />
        </div>
        <span >{validation.errors?.first("serviceName")}</span>
        <div className="modal-footer">
          <button type="button" className="general-btn mb-2"
          onClick={(e)=>onSubmit(e)}
          >CREATE SERVICE</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
