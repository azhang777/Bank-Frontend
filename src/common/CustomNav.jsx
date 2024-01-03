import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary py-4'>
      <div className=' container-fluid d-flex justify-content-between custom-nav-mobile'>
        <a
          className='navbar-brand fs-2 mx-4 fw-bold'
          href='#'
        >
          Bank of Mikaila
        </a>

        <ul className='navbar-nav d-flex flex-row text-center'>
          <li className='nav-item'>
            <a
              className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
              aria-current='page'
              href='#'
            >
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a
              type='button'
              className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              Login
            </a>

            <div
              className='modal fade'
              id='exampleModal'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1
                      className='modal-title fs-5'
                      id='exampleModalLabel'
                    >
                      Login with your existing account
                    </h1>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-body'>...</div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-primary'
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
