import { GoogleLogin } from "@react-oauth/google";

const LoginModal = () => {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS Current User: ", res);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED res: ", res);
  };
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
    <>
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
        <div className='modal-dialog py-5 w-100'>
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
                <GoogleLogin
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
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
    </>
  );
};

export default LoginModal;
