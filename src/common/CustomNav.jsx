import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

// eslint-disable-next-line react/prop-types
const CustomNav = ({ handleAuth }) => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary py-4'>
      <div className=' container-fluid d-flex justify-content-between custom-nav-mobile'>
        <Link
          to={"/"}
          className='navbar-brand fs-2 mx-4 fw-bold'
        >
          Bank of Mikaila
        </Link>

        <ul className='navbar-nav d-flex flex-row text-center'>
          <li className='nav-item'>
            <Link
              to={"/home"}
              className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <LoginModal handleAuth={handleAuth} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNav;
