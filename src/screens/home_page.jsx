import Footer from '../components/footer';
import NavBar from '../components/nav_bar';
import Menu from '../components/menu';
import React, { useContext } from 'react';
import OTPVeify from './otp_verify';
import Contactus from './contact_us';
import Welcome from './welcom';
import LoginPage from './login';
import TransactionServices from './transactions';
import MerchantServices from './merchant_management';
import AddNewVendor from './add_new_vendor';
import PhoneEntry from '../components/phone_entry';
import OTPComponent from '../components/otp';
import StaffManagement from './staff_management';
import { ProtectedLayout } from '../components/protected';


import {
  Route,
  Routes,
  Router,
  Outlet
} from "react-router-dom";

import '../styles/home.scss'
import { createContext } from 'react';


function HomePage(props) {
  const [data, setData] = React.useState([]);

  return (
    
      <div className="pz-home">
        <NavBar />
        <div className='body'>
          <div className='side-menu'>
            <Menu />
          </div>
          <div className='content'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default HomePage;