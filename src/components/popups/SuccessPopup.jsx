import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types';
import { Modal } from 'bootstrap';



const SuccessPopup = function ({ title, message, isError, active, delay, closed }) {


    const toggleModal = ((value) => {

        const myModal = new Modal(document.getElementById("success-popup"), {});
        if (value) {
            myModal.show();
        } else {
            myModal.hide();
        }
    });
    useEffect(() => {
        var myModalEl = document.getElementById('success-popup');
        if (myModalEl) {

            myModalEl.addEventListener('hide.bs.modal', function (event) {
                document.querySelectorAll('.modal-backdrop.show').forEach(el => el.remove());
                closed();
            });
        }
    }, []);

    useEffect(() => {
        toggleModal(active);
    }, [active])

    return (
        <>



<div className="modal fade" tabIndex={-1}  id="success-popup"  aria-labelledby="confirmLogoutLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" /></button>
      </div>
      <div className="modal-body pb-5 px-5">
        <div className="text-center">
        <img src={!isError ? "/images/check.png" : 'images/cancel.png'} />
        </div>
        <div className="main-modal-msg my-3">
          <h4 className="modal-heading mb-3">{message? message:""}</h4>
          <button type="button" className="general-btn mb-2 px-5" data-bs-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>
</div>



        {/* // */}
         


            {/* SIGN UP SUCCESS MESSAGE */}

        </>
    )
}

SuccessPopup.propTypes = {


}

export default SuccessPopup
