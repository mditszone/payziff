import React, { useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Contactus from './screens/contact_us';
import HomePage from './screens/home_page';
import Welcome from './screens/welcom';
import LoginPage from './screens/login';
import TransactionServices from './screens/transactions';
import TransactionCard from './components/transaction_card';
import MerchantServices from './screens/merchant_management';
import AddNewVendor from './screens/add_new_vendor';
import OTPVeify from './screens/otp_verify';
import PhoneEntry from './components/phone_entry';
import OTPComponent from './components/otp';
import StaffManagement from './screens/staff_management';
import { ProtectedLayout } from './components/protected';
import Error from './screens/404';
import { AuthProvider } from './app/auth';
export const SuperAdminContext = createContext();

const storage = {
  MERCHANT_REGISTRATION: false,
  SUPERADMIN_REGISTRATION: false
};


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="verify" element={<OTPVeify />} />
        <Route path="error" element={<Error />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="welcome" element={<Welcome />} />
        <Route path="merchants" element={<MerchantServices />} />
        <Route path="staffManagement" element={<StaffManagement/>} />
      </Route>
    </Route>
  )
);

//<RouterProvider router={router} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AuthProvider>
          <App />
      </AuthProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
