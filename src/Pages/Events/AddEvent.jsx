import React from 'react'
import { useState } from 'react'
import Validator from 'validatorjs';
import useMessagePopup from '../../Hooks/useMessagePopup';
import { addEvent } from '../../services/events';
import {Modal} from 'bootstrap'
import { useEffect } from 'react'
import PropTypes from 'prop-types'


export const AddEvent = ({events}) => {

  const [eventName, setEventName] = useState("");
  const [validation, setValidation] = useState([]);
  const { successPopup, errorPopup } = useMessagePopup()

  const onSubmit = async (e) => {
    e.preventDefault()
    let validator = new Validator({ eventName }, (
      {
        eventName: "required"
      }))
      setValidation(validator);
      if(validator.fails()) return
    try {
      let popup= Modal.getOrCreateInstance(document.querySelector('#add-event'))

      let { status, message } = await addEvent({eventName} );
      if (status) {
        successPopup({ message })
        popup.hide();
        setEventName("")
        events()
     
      }
    

    } catch (error) {
      console.log(error);
      errorPopup(error)
    }
  }

  return (
    <>
      <div className="modal fade" id="add-event" tabIndex={-1} aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" /></button>
            </div>
            <div className="modal-body pb-5">
              <div className="main-modal-msg my-2">
                <p className="modal-heading">Add New event</p>
              </div>
              <div className="text-left">
                <label htmlFor className="input-lbl">Event Type Name<span>*</span></label>
                <input type="text" placeholder="Enter Event Type Name" className="all-input w-100" value={eventName}
                 name="event_name" onChange={e => setEventName(e.target.value)} required/>
              </div>
              <span className='text-danger'>{validation?.errors?.first("eventName")}</span>
              <div className="modal-footer">
                <button type="submit" className="general-btn mb-2" onClick={(e)=>onSubmit(e)}>CREATE EVENT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

AddEvent.propType={
  events:PropTypes.func.isRequired
}