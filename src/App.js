import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Router} from './routes/Router'
import { loadUser } from './services/auth';
import { setAuth } from './store/actions/auth';
import store from './store/store';
import event from './utils/event';
import { getAccessToken, setAuthToken } from './utils/setAuthToken';
import ConfirmPopup from './components/popups/ConfirmPopup'
import SuccessPopup from './components/popups/SuccessPopup'
import { updateSuccessPopup } from './store/actions/alert';
import { ToastContainer } from 'react-toastify';

function App() {

  const { successPopup, success_popup_params: successPopupParams } = useSelector((state) => state.alert);

  const [confirmPopupParams, setConfirmPopupParams] = useState({
    visibility: false,
  });

  const showConfirmPopupHandler = (event) => {
    setConfirmPopupParams(event.detail);
  };

  const handler = (callback) => {
    if (confirmPopupParams[callback]) confirmPopupParams[callback]();

    setConfirmPopupParams({ visibility: false });
  };

  
  let dispatch = useDispatch();

  const data = async () => {
    if (getAccessToken) {
      setAuthToken(localStorage.tucker_app);
      store.dispatch(loadUser);
      let data = await loadUser();
      console.log(data)
      dispatch(setAuth(data));
    }
  };



  useEffect(() => {
    event.subscribe("showConfirmPopup", showConfirmPopupHandler);
    return () => event.unsubscribe("showConfirmPopup", showConfirmPopupHandler);
  }, []);
  useEffect(() => {
    data();
  }, [localStorage?.tucker_app]);

  return (
    <div className="App">
      <Router />
   <SuccessPopup
        isError={successPopupParams.isError}
        active={successPopup}
        closed={() => dispatch(updateSuccessPopup(false, {}))}
        title={successPopupParams.title}
        message={successPopupParams.message}
        delay={successPopupParams.delay}
      ></SuccessPopup>
      <ConfirmPopup
        active={confirmPopupParams?.visibility}
        onConfirm={() => handler("onConfirm")}
        onCancel={() => handler("onCancel")}
        message={confirmPopupParams?.message}
      />
      {/* <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      /> */}
  
    </div>
  );
}

export default App;
