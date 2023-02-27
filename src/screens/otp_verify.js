import Footer from '../components/footer';
import NavBar from '../components/nav_bar';
import OTPComponent from '../components/otp'
import { useNavigate, useLocation } from "react-router-dom";
import React, {useContext} from 'react';
import { apiRequest } from '../services/generic.service';
import '../styles/login.scss'
import { useAuth, AuthProvider } from '../app/auth';
import {SuperAdminContext} from '../App';

function OTPVeify({ navBar, footer, navigation, merchant, staff, welcome, task, note }) {

  const [otp, setOTP] = React.useState("");
  const navigate = useNavigate();
  const authProvider = useAuth();
  const storage = useContext(SuperAdminContext);


  const handleChange = (otp) => {
    console.log(otp);
    setOTP(otp);
  }

  const handleClick = (otp) => {

    if (otp.length == 6) {
      window.confirmationResult.confirm(otp).then((result) => {
       const user = result.user;
        authProvider.login(user.accessToken);

        if (merchant) {
          apiRequest("/user/createUser", 'POST', {
            body: {
              phoneNumber: storage.phoneNumber,
              roleId: 2,
            }
          }).then((res) => {
            console.log("merchant response", res);
            storage.createdUser = {id: res.id, phoneNumber: res.phoneNumber, roleId: 2};
            navigate("/dashboard/addNewVendor",);
          });
          
        }
    
        if (staff) {
          apiRequest("/user/createUser", 'POST', {
            body: {
              phoneNumber: storage.phoneNumber,
              roleId: 1,
            }
          }).then((res) => {
            storage.createdUser = {id: res.id, phoneNumber: res.phoneNumber, roleId: 1};
            navigate("/dashboard/addNewVendor");
          });
        }

        navigate(navigation, { replace: true });

      }).catch((error) => {
        console.log(error);
      });
    }

  }

  return (
    <div className="pz-login-page">
      {navBar ? <NavBar /> : null}
      <div className='body'>
        <OTPComponent
          welcome={welcome}
          task={task}
          note={note} 
          handleClick={handleClick} 
        />
      </div>
      {footer ? <Footer /> : null}
    </div>
  );
}

export default OTPVeify;