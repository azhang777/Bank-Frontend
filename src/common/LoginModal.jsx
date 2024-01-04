import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const LoginModal = ({ handleAuth }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        ) //from this, we get the response, which is the user's profile information retrieved from that route with param of access token
        .then((res) => {
          //https://www.googleapis.com/oauth2/v1/userinfo?access_token=ya29.a0AfB_byCabRq36jXihkGULR9DNgbVy_uGpWHANC0xy2s-aRm2Ss-exky1yTHDK9SvSBsaz3w8T1n0TNK9cenc6zJrjz3UbHxyYpxs7FPvDodJdWyVM8BH92mAVJwopuKjwtE8OsyTvbKeU5OTpOUcya2cEtfrmIbB1-oaCgYKAZcSARASFQHGX2MixIWFqAwaA-xf4xCB71ekcA0170
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      handleAuth(response.access_token);
      setUser(response);
      navigate("/home");
      setShowModal(false);
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
      {profile ? (
        <div>
          <button
            onClick={logout}
            className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <a
            href='#'
            className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
            onClick={() => setShowModal(true)}
          >
            Login
          </a>

          {showModal && (
            <div
              className='modal fade show'
              id='exampleModal'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
              style={{ display: "block" }}
              onClick={() => setShowModal(false)}
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
                      <button
                        className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
                        onClick={login}
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
          )}
        </div>
      )}
    </>
  );
};

export default LoginModal;
