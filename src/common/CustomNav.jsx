import { Link } from "react-router-dom";

const CustomNav = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Fetch form data or perform any other action here
    const username = document.getElementById("exampleInputUsername").value;
    const password = document.getElementById("exampleInputPassword1").value;

    // For example, log the form data
    console.log("Submitted Username:", username);
    console.log("Submitted Password:", password);

    // You can perform other actions like sending data to a server, etc.
  };

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
              href='#'
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
                  <form onSubmit={(e) => handleSubmit(e)}>
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
                    <div className='modal-body'>
                      <div className='mb-5'>
                        <label
                          htmlFor='exampleInputUsername'
                          className='form-label d-flex fs-3'
                        >
                          Username
                        </label>
                        <input
                          type='username'
                          className='form-control'
                          id='exampleInputUsername'
                          aria-describedby='usernameHelp'
                        />
                      </div>
                      <div className='mb-5'>
                        <label
                          htmlFor='exampleInputPassword1'
                          className='form-label d-flex fs-3'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          className='form-control'
                          id='exampleInputPassword1'
                        />
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='submit'
                        className='btn btn-primary'
                      >
                        Log in
                      </button>
                    </div>
                  </form>
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
