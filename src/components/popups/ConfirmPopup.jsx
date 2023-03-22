import React, { useEffect } from 'react'
import propTypes from 'prop-types'
import { Modal } from 'bootstrap'


function ConfirmPopup({ title, message, onCancel, onConfirm, active }) {

  const toggleModal = (value) => {
    const confirmModal = Modal.getOrCreateInstance(document.getElementById('user-active-modal'))
    if (value) {
      confirmModal.show();
    } else {
      confirmModal.hide();
      // confirmModal.hide();
    }
  };
  const handleModalHide = function (event) {
    document.querySelectorAll('.modal-backdrop.show').forEach(el => el.remove());
  };
  const registerListener = () => {
    var myModalEl = document.getElementById('user-active-modal');
    if (myModalEl) {

      myModalEl.addEventListener('hide.bs.modal', handleModalHide);
    }
  };
  const unRegisterListener = () => {
    var myModalEl = document.getElementById('user-active-modal');
    if (myModalEl) {

      return myModalEl.removeEventListener('hide.bs.modal', handleModalHide);
    }
  };
  const handleCancel = (e) => {

    e.preventDefault()
    toggleModal(false);
    onCancel();
  };
  const handleConfirm = (e) => {

    e.preventDefault()
    toggleModal(false);

    onConfirm();
  };

  useEffect(() => {
    registerListener();
  }, []);

  useEffect(() => {
    if (!active) {
      return unRegisterListener();
    }
    toggleModal(active);
  }, [active]);

  return (
    <>


<div className="modal fade"  id='user-active-modal' tabIndex={-1} aria-labelledby="logoutModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" /></button>
      </div>
      <div className="modal-body pb-5">
        <div className="text-center">
          <img src="../../images/question.png" alt="" />
        </div>
        <div className="main-modal-msg my-2">
          <p className="modal-heading">{message}</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="general-btn mb-2" 
          data-bs-dismiss="modal" data-bs-toggle="modal"
          onClick={handleConfirm}>Yes</button>
          <button type="button" className="general-btn-3 mb-2" data-bs-dismiss="modal" onClick={handleCancel}>No</button>
        </div>
      </div>
    </div>
  </div>
</div>




{/* 
      <div className="default-modal modal fade active_popup" id='user-active-modal' tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-0">
            <div className="head-green">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <i aria-hidden="true" className="fa fa-times" />
              </button>
              <img src="../../images/logout_icon.png" />
            </div>
            <div className="modal-body py-0 row">
              <div className="col-md-12 py-4 text-center">
                <p className="mb-0">{message}</p>
              </div>
              <div className="col-md-12 button text-center mb-5">
                <a href="#" className="btn_darkbluep mt-0 d-inline-block px-5 me-2" data-bs-toggle="modal" data-bs-target=".inactive_popup2" onClick={handleConfirm}>Yes</a>
                <a href="#" className="btn_orangebor mt-0 d-inline-block px-5" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}>No</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}

ConfirmPopup.propTypes = {

  active: propTypes.bool,
  onConfirm: propTypes.func,
  onCancel: propTypes.func,
  message: propTypes.string,
}


ConfirmPopup.defaultProps = {
  active: false,
  onConfirm: () => { },
  onCancel: () => { },
  title: 'System Message!',
  message: 'Are you sure you want this?',
};

export default ConfirmPopup
