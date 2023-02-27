import React, { useContext, createContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import PZInput from "../components/input";
import PZButton from "../components/button";
import { MerchantStorage } from './merchant_management';
import '../styles/add_vendor.scss';
import { apiRequest } from '../services/generic.service';
import { SuperAdminContext } from '../App';
import { aadharNumberFormatter } from '../app/utils';
export const VendorDetails = createContext();

export default function AddNewVendor() {
    const [details, setDetails] = React.useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [aadharNumber, setAadharNumber] = React.useState("");
    const {createdUser} = React.useContext(SuperAdminContext);

    const clickHandler = () => {
        const obj = {id: createdUser.id , data: {name: name, email: email, aadharNumber: aadharNumber}};
        apiRequest("/user/updateUser", 'POST', {body: obj})
        .then(res => {
            const navigation = createdUser.roleId === 2 ? '/dashboard/merchants' : '/dashboard/staffManagement'
            navigate(navigation);
        });
    }

    const addharChangeHandler = (e) => {
        let val = aadharNumberFormatter(e.target.value);
        console.log(val);
        setAadharNumber(val);
    }

    const isNumberKey = (evt) => {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 47 && charCode < 58)
            return false;
        return true;
    }
    
    return (
        <VendorDetails.Provider value={details}>
            <div className='pz-add-details-container'>
                <div className="pz-add-details">
                    <div className="header">
                        <span className="welcome">{ (createdUser.roleId == 1) ? 'Merchant' : 'Staff' }</span>
                        <span className="logo">Registration</span>
                        <span className='note'>Enter below details to register</span>
                    </div>
                    <div className="input">
                        <PZInput type="number" placeholder="ID" disabled={true} value={createdUser.id} />
                        <PZInput type="text" placeholder="Name" onChange={e => setName(e.target.value) } />
                        <PZInput type="text" placeholder="Phone Number" disabled={true} value={createdUser.phoneNumber} />
                        <PZInput type="text" placeholder="Email" onChange={e => setEmail(e.target.value) } />
                        <PZInput 
                            type="text" 
                            maxLength="14" 
                            value={aadharNumber} 
                            placeholder="Aadhaar Number" 
                            onChange={addharChangeHandler}
                            onKeyDown={isNumberKey} />
                    </div>
                    <div className="button">
                        <input type="submit" value="Register" onClick={clickHandler} ></input>
                    </div>
                </div>
            </div>
        </VendorDetails.Provider>
    )
}

function AddVendor() {
    //const [vendor, setVendor] = React.useState({});
    const vendor = useContext(VendorDetails);
    const navigate = useLocation();
    let disabled = true;
    console.log("vendor", navigate);
    if (navigate.state.edit) {
        disabled = false;
    } else if (navigate.state.create) {
        disabled = false;
    }


    return (
        <div className="pz-add-vendor">
            <div className="container">
                <div className="body">
                    <span>Merchant Details</span>
                    <PZInput
                        label="Vendor ID"
                        placeholder="vendor id"
                        onChanged={(e) => vendor.id = e.target.value}
                        disabled={disabled}
                        value={vendor.id ? vendor.id : ''}
                    />
                    <PZInput
                        label="Phone Number"
                        placeholder="phone number"
                        onChanged={(e) => vendor.phoneNumber = e.target.value}
                        disabled={disabled}
                        value={vendor.phoneNumber ? vendor.phoneNumber : ''}
                    />
                    <PZInput
                        label="Email ID"
                        placeholder="email id"
                        onChanged={(e) => vendor.email = e.target.value}
                        disabled={disabled}
                        value={vendor.email ? vendor.email : ''}
                    />
                </div>
            </div>
        </div>
    )
}

function AddVendorBankDetails(props) {
    const vendor = useContext(VendorDetails);
    const merchant = useContext(MerchantStorage);
    const navigate = useLocation();
    let disabled = true;

    if (navigate.state.edit) {
        disabled = false;
    } else if (navigate.state.create) {
        disabled = false;
    }
    console.log("disabled", disabled);

    return (
        <div className="pz-add-bank">
            <div className="container">
                <div className="body">
                    <span>Bank Details</span>
                    <PZInput
                        label="Accont Holder Name"
                        placeholder="account holder name"
                        onChanged={(e) => vendor["name"] = e.target.value}
                        disabled={false}
                    />
                    <div className="bank-details">
                        <PZInput
                            label="Account Number"
                            placeholder="account number"
                            onChanged={(e) => vendor["accountNumber"] = e.target.value}
                            disabled={disabled}
                        />
                        <PZInput label="IFSC" placeholder="account number" disabled={disabled} />
                    </div>
                    <span>Or</span>
                    <PZInput label="UIP ID" placeholder="upi id" disabled={disabled} />
                    <div className="verify">
                        <input type={'checkbox'} />
                        <span>Verify Account Details</span>
                    </div>
                    <span className="charges" >Verificatin charges will be applicable</span>
                    <span>Settlements Details</span>
                    <PZInput label="Settlements Cycle" placeholder="settlements" disabled={disabled} />
                    <div className="submit">
                        <PZButton value="Cancel" type="primary" />
                        <PZButton value="Save" type="button" onClick={() => console.log(vendor)} />
                    </div>
                </div>
            </div>
        </div>
    )
}