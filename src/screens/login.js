import Footer from '../components/footer';
import NavBar from '../components/nav_bar';
import PhoneEntry from '../components/phone_entry';
import { useNavigate } from "react-router-dom";
import React, {useContext} from 'react';

import '../styles/login.scss'
import { useAuth, AuthProvider } from '../app/auth';
import { fireBaseLogin } from '../mdits_modules/firebase_authentication';
import { phoneNumberFormatter } from '../app/utils';
import {SuperAdminContext} from '../App';

function LoginPage({navBar, footer, navigation, welcome, task,  note}) {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const navigate = useNavigate();
  const authProvider = useAuth();
  const signInButtonId = "sign-in-button";
  const [btnState, setButtonState] = React.useState(true);
  const storage = useContext(SuperAdminContext);

  const changeHandler = (value) => {
    if (value.length == 10) {
      setButtonState(false);
      setPhoneNumber(phoneNumberFormatter(value));
      storage.phoneNumber = phoneNumberFormatter(value);
      console.log("phoneNumber", storage.phoneNumber);
    }
  }

  const navigateHandler = () => {
    navigate(navigation, {replace: true});
  }

  const loginHandler = () => {
    
    //navigateHandler();
    
    fireBaseLogin({
      fireBaseURL: "/firebase/getfirebaseConfig",
      buttonId: signInButtonId,
      phoneNumber: phoneNumber,
      navigateHandler: navigateHandler
    });

  }

  return (
    <div>
      {navBar ? <NavBar /> : null}
        <div className='body'>
          <PhoneEntry
            buttonId={signInButtonId} 
            welcome={welcome} 
            task={task} 
            note={note}
            clickHandler={loginHandler}
            onChange={changeHandler}
            buttonState={btnState}
            />
        </div>
        {footer ? <Footer /> : null}
    </div>
  );
};

export default LoginPage;