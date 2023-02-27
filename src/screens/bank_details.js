import { GiBowlingPropulsion } from "react-icons/gi"
import PZInput from "../components/input";
import PZButton from "../components/button";



export default function AddVendorBankDetails() {
    return(
        <div className="pz-add-bank">
            <div className="container">
                <div className="header">
                    <h5>Bank Details</h5>
                    <span>step 1/2</span>
                </div>
                <div className="body">
                    <span>Vendor Details</span>
                        <PZInput label="Accont Holder Name" placeholder="account holder name" />
                    <div className="bank-details">
                        <PZInput label="Account Number" placeholder="account number" />
                        <PZInput label="IFSC" placeholder="account number" />
                    </div>
                    <span>Or</span>
                    <PZInput label="UIP ID" placeholder="upi id" />
                    <div className="verify">
                        <input type={'checkbox'} />
                        <span>Verify Account Details</span>
                        <span>Verificatin charges will be applicable</span>
                    </div>
                    <span>Settlements Details</span>
                    <PZInput label="Settlements Cycle" placeholder="settlements" />
                    <div className="submit">
                        <PZButton value="Cancel" type="primary" />
                        <PZButton value="Next" type="button" />
                    </div>
                </div>
            </div>
        </div>
    )
}



