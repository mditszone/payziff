import React from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/phone_entry.scss';
import { ConfirmationResult } from "firebase/auth";
import { apiRequest } from '../services/generic.service';
import { SuperAdminContext } from '../index';

export default function OTPComponent({handleClick, welcome, task, note}) {
    const [otp, setOTP] = React.useState("");
    const navigate = useNavigate();
    const location = useLocation();
    

    const handleChange = (otp) => {
        console.log(otp);
        handleClick(otp);
        setOTP(otp);
    }

    // const handleClick = () => {
        
    //     window.confirmationResult.confirm(otp).then((result) => {
    //         // User signed in successfully.
    //         const user = result.user;
    //         console.log(user);

    //         apiRequest("/user/createUser", 'POST', {body: {
    //             phoneNumber: location.state.phoneNumber,
    //             roleId: 1,
    //         }}).then((res) => {
    //             console.log(res);
    //             navigate("/dashboard/welcome", {state: {merchant: res}});
    //         });
    //         // ...
    //       }).catch((error) => {
    //         // User couldn't sign in (bad verification code?)
    //         // ...
    //       });
        
    // }

    return(
        <div className='phone-screen-container'>
            <div className="phone-screen">
            <div className="header">
                <span className="welcome">{welcome}</span>
                <span className="logo">{task}</span>
                <span className='note'>{note}</span>
            </div>
            <div className='pz-otp'>
                <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span>-</span>}
                    inputStyle={{width: '45px', height: '45px'}}
                />     
            </div>
            <div className="button">
                <input type="submit" value="Next" onClick={handleClick}></input>
            </div>
        </div>
        </div>
    );
}
