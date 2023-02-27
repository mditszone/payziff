import Logo from "./logo";
import { IconContext } from "react-icons";
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';
import { useAuth } from '../app/auth';
import '../styles/navbar.scss'

function NavBar() {

  const { user, logout } = useAuth();

  const logoutUser = () => logout();

    return (
      <div className="pz-navbar">
          <Logo />
          
          <div className="icons">
            <a href="" onClick={logoutUser} >Sign out</a>
            <IconContext.Provider value={{ className: "profile", size: 40}}>
              <CgProfile />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "profile burger", size: 40}}>
              <RxHamburgerMenu />
            </IconContext.Provider>
          </div>
      </div>
    );
  }
  
  export default NavBar;