import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a
          className='navbar-brand fs-2 mx-4 fw-bold'
          href='#'
        >
          Bank of Mikaila
        </a>

        <ul className='navbar-nav flex-row'>
          <li className='nav-item'>
            <a
              className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm'
              aria-current='page'
              href='#'
            >
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm'
              href='#'
            >
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNav;

/*
 <ul classNameName='navbar-nav flex-row'>
          <li classNameName='nav-item mx-2'>
            <Link
              to={"/about"}
              classNameName='nav-link '
            >
              About
            </Link>
          </li>
          <li classNameName='nav-item mx-2'>
            <Link
              to={"/calculator"}
              classNameName='nav-link'
            >
              Calculator
            </Link>
          </li>
          <li classNameName='nav-item mx-2'>
            <Link
              to={"/chart"}
              classNameName='nav-link'
            >
              Chart
            </Link>
          </li>
        </ul>
        */
