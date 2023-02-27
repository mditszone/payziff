import React from 'react';
import { Link } from "react-router-dom";
import {RxHamburgerMenu} from 'react-icons/rx';
import 'react-dropdown/style.css';
import '../styles/menu.scss'

function Menu() {
    const [responsive, setResponsive] = React.useState("pz-menu-items");
    const [active, setActive] = React.useState("");

    let clickHandler = (event) => {
        console.log("clicked");
    }
    
    return (
        <div className="pz-menu">
            <ul className={responsive}>
                <Link to="/dashboard/welcome" ><li><a className={active} href="#" onClick={clickHandler}>Dashboard</a></li></Link>
                <Link to="/dashboard/merchants" ><li><a data-testid="site" className={active} href="#" onClick={clickHandler}>Merchants</a></li></Link>
                <Link to="/dashboard/staffManagement" ><li><a data-testid="site" className={active} href="#" onClick={clickHandler}>Staff Management</a></li></Link>
                <Link to="/dashboard/transactions" ><li><a className={active} href="#" onClick={clickHandler}>Transactions</a></li></Link>
                <Link to="/" ><li><a className={active} href="#" onClick={clickHandler}>Performance Reports</a></li></Link>
            </ul>
            <a className="icon" onClick={clickHandler}>
                <RxHamburgerMenu />
            </a> 
        </div>
    )
}

export default Menu;