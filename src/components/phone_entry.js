import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, } from "firebase/auth";

/* global grecaptcha */

import '../styles/phone_entry.scss';
import { apiRequest } from '../services/generic.service';
import { SuperAdminContext } from '../index';


export default function PhoneEntry({ welcome, task, note, clickHandler, buttonId, onChange, buttonState }) {

    return (
        <div className='phone-screen-container'>
            <div className="phone-screen">
                <div className="header">
                    <span className="welcome">{welcome}</span>
                    <span className="logo">{task}</span>
                    <span className='note'>{note}</span>
                </div>
                <div className="input">
                    <input
                        type="number"
                        onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                        pattern="[1-9]{5}-[0-9]{5}"
                        title="Please enter exactly 10 digits"
                        placeholder='enter your phone number'
                        onChange={e => onChange(e.target.value)}
                    />
                </div>
                <div className="button">
                    <input
                        type="submit"
                        value="Next"
                        id={buttonId}
                        onClick={clickHandler}
                        disabled={buttonState}></input>
                </div>
            </div>
        </div>
    );
}
