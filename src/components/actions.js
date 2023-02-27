import { useNavigate, Link } from "react-router-dom";
import {MdModeEditOutline} from 'react-icons/md';
import {AiOutlineEye} from 'react-icons/ai';


import '../styles/actions.scss';

function MerchantActions({viewHandler, editHandler, userId}) {

    return(
        <div className="pz-actions">
            <Link to="/dashboard/view" onClick={editHandler} ><MdModeEditOutline /></Link>
            <Link to="/dashboard/edit" onClick={viewHandler} ><AiOutlineEye /></Link>
        </div>
    );

}

function TransActions(props) {
    return(
        <div className="pz-actions">
            <a href="#" onClick={props.onViewClick}>View</a>
            <Link to="/dashboard/view">View</Link>
        </div>
    )
}

export {
    MerchantActions,
    TransActions
}