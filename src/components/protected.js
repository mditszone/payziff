import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from '../app/auth';
import Footer from '../components/footer';
import NavBar from '../components/nav_bar';
import Menu from '../components/menu';
import HomePage from "../screens/home_page";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <HomePage />
    </div>
  )
};



{/* <div>
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
    </div> */}