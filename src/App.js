import './App.css';
import React, { useContext, createContext } from 'react';
import HomePage from './screens/home_page';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginPage from './screens/login';
import OTPVeify from './screens/otp_verify';
import Contactus from './screens/contact_us';
import Welcome from './screens/welcom';
import TransactionServices from './screens/transactions';
import MerchantServices from './screens/merchant_management';
import AddNewVendor from './screens/add_new_vendor';
import PhoneEntry from './components/phone_entry';
import OTPComponent from './components/otp';
import StaffManagement from './screens/staff_management';
import { ProtectedLayout } from './components/protected';
import { TransActions } from './components/actions';
export const SuperAdminContext = createContext();

const storage = {
  createdUser: {},
  currentUser: {}
};


export default function App() {
  return (
    <SuperAdminContext.Provider value={storage}>
      <Routes>
      <Route>
        <Route path="/" element={<PayZiffLogin />} />
        <Route path="verify" element={<PayZiffOTPVerify />} />
      </Route>
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="welcome" element={<Welcome />} />
        <Route path="merchants" element={<MerchantServices />} />
        <Route path="addNewVendor" element={<AddNewVendor />} />
        <Route path="merchantRegistration" element={<MerchantRegistrationLogin />} />
        <Route path="merchantRegistrationOtp" element={<MerchatRegistrationOTPVerify />} />
        <Route path="staffRegistration" element={<StaffRegistrationLogin />} />
        <Route path="staffRegistrationOtp" element={<StaffRegistratingOTPVerify />} />
        <Route path="staffManagement" element={<StaffManagement />} />
        <Route path="transactions" element={<TransactionServices />} />
        <Route path="edit" element={<AddNewVendor />} />
        <Route path="view" element={<AddNewVendor />} />
      </Route>
    </Routes>
    </SuperAdminContext.Provider>
  );
}


function PayZiffLogin() {
  return <LoginPage 
    navBar={true} 
    footer={true} 
    navigation="/verify" 
    welcome="PayZiff Staff"
    task="Login"
    note="please enter your mobile number to login"
    />
}

function PayZiffOTPVerify() {
  return <OTPVeify
    welcome="Payziff Staff"
    task="Login"
    note="please enter otp sent on your phone" 
    navBar={true} 
    footer={true} 
    navigation="/dashboard/welcome" 
    />
}
function MerchantRegistrationLogin() {
  return <LoginPage 
    navBar={false} 
    footer={false} 
    navigation="/dashboard/merchantRegistrationOtp" 
    welcome="Merchant"
    task="Registration"
    note="please enter your mobile number to register with payziff"
    />
}

function MerchatRegistrationOTPVerify() {
  return <OTPVeify 
    welcome="Merchant"
    task="Registration"
    note="please enter otp sent on your phone"
    navBar={false} footer={false} navigation="/dashboard/addNewVendor" merchant={true} staff={false} />
}

function StaffRegistrationLogin() {
  return <LoginPage 
    navBar={false} 
    footer={false} 
    navigation="/dashboard/staffRegistrationOtp" 
    welcome="Staff"
    task="Registration"
    note="please enter your mobile number to register with payziff"
    />
}

function StaffRegistratingOTPVerify() {
  return <OTPVeify 
    welcome="Staff"
    task="Registration"
    note="please enter otp sent on your phone" 
    navBar={false} footer={false} navigation="/dashboard/addNewVendor" staff={true} merchant={false} />
}

// <Route path="merchantRegistration" element={<PhoneEntry welcome="Merchant" logo="Registration" note="Enter phone number to start registration" clickHandler={loginHandler} />} />

{/*           <Route path="registration" element={<PhoneEntry />} />
              <Route path="contact" element={<LoginPage />} />
              <Route path="registration" element={<PhoneEntry />} />
              <Route path="merchatStaffOtp" element={<OTPComponent />} />
              <Route path="welcome" element={<Welcome />} />
              <Route path="contact" element={<Contactus />} />
              <Route path="merchants" element={<MerchantServices />} />
              <Route path="staffManagement" element={<StaffManagement />} />
              <Route path="addNewVendor" element={<AddNewVendor />} />
              <Route path="transactions" element={<TransactionServices />} /> */}