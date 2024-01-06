import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestAccount } from "../services/OAuthService";

// eslint-disable-next-line react/prop-types
const LoginModal = ({ handleAuth }) => {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //async invocation: we are handling the asynchronous nature of retreiveAccount
    const retrieveAccount = async () => {
      try {
        if (user) {
          const userData = await requestAccount(user);
          //asyncawait retreiveAccount(user) ensures that the data returned from the function is ready.
          //setProfile will be called only after retrieveAccount(user) completes.
          setProfile(userData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    retrieveAccount();
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      handleAuth(response.access_token);
      setUser(response);
      navigate("/home");
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const logout = () => {
    handleAuth("");
    googleLogout();
    setProfile(null);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("exampleInputUsername").value;
    const password = document.getElementById("exampleInputPassword1").value;

    console.log("Submitted Username:", username);
    console.log("Submitted Password:", password);
  };

  return (
    <>
      {profile ? (
        <div>
          <button
            type='button'
            className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            {profile.name}
          </button>

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
                  <h1 className='modal-title fs-5 text-center'>Logout</h1>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body mt-3'>
                  <p>Are you sure you want to logout?</p>
                </div>
                <div className='modal-footer justify-content-center'>
                  <button
                    type='button'
                    onClick={() => logout()}
                    className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
                    data-bs-dismiss='modal'
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button
            type='button'
            className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Log in
          </button>
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
                <form onSubmit={(e) => handleSubmit(e)}>
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
                      type='button'
                      className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
                      data-bs-dismiss='modal'
                      onClick={() => login()}
                    >
                      Sign in with Google
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;

/*
        <div>
          <CustomButton
            className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
            onClick={() => setShowModal(true)}
          >
            Login
          </CustomButton>

          {showModal && (
            <div
              className='modal fade show'
              id='exampleModal'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
              style={{ display: "block" }}
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-5'>
                        Login with your existing account
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                        onClick={() => setShowModal(false)}
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
                      <CustomButton onClick={login}>
                        Sign in with Google
                      </CustomButton>
                      <CustomButton type='submit'>Log in</CustomButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
*/
