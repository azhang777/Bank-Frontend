import { useState } from "react";
import { requestCreateAccount } from "../../services/accountService";
import PropTypes from "prop-types";
//pass customer id to this
const CreateAccountModal = ({ customerId }) => {
  const [newAccount, setNewAccount] = useState({
    accountType: "",
    nickName: "",
    rewards: 0,
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAccount({ ...newAccount, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await requestCreateAccount(newAccount, customerId);

      console.info(response);
    } catch (error) {
      console.error("Error creating account: ", error);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-success rounded-pill px-4 mx-4 shadow-sm fs-5'
        data-bs-toggle='modal'
        data-bs-target='#staticBackdrop'
      >
        Create Account
      </button>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1
                className='modal-title fs-5'
                id='staticBackdropLabel'
              >
                Account Creation
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='modal-body'>
                <div className='container'>
                  <div className='row mb-3'>
                    <label
                      htmlFor='accountType'
                      className='form-label d-flex fs-3'
                    >
                      Account Type
                    </label>
                    <select
                      className='form-select'
                      id='accountType'
                      name='accountType'
                      value={newAccount.accountType}
                      onChange={handleChange}
                      aria-label='Account Type'
                    >
                      <option value=''>Choose...</option>
                      <option value='savings'>SAVINGS</option>
                      <option value='checkings'>CHECKINGS</option>
                      <option value='credit'>CREDIT</option>
                    </select>
                  </div>
                  <div className='row mb-3'>
                    <label
                      htmlFor='accountType'
                      className='form-label d-flex fs-3'
                    >
                      Nickname
                    </label>
                    <input
                      type='text'
                      id='nickName'
                      name='nickName'
                      className='form-control'
                      value={newAccount.nickName}
                      onChange={handleChange}
                      placeholder='enter name'
                      aria-label='Account Nickname'
                    />
                  </div>
                  <div className='row mb-3'>
                    <div className='col-6 col-xs-12'>
                      <label
                        htmlFor='accountType'
                        className='form-label d-flex fs-5'
                      >
                        Rewards
                      </label>
                      <input
                        type='number'
                        id='rewards'
                        name='rewards'
                        className='form-control'
                        value={newAccount.rewards}
                        placeholder='0'
                        aria-label='Account Rewards'
                        disabled
                      />
                    </div>
                    <div className='col-6 col-xs-12'>
                      <label
                        htmlFor='accountType'
                        className='form-label d-flex fs-5'
                      >
                        Balance
                      </label>
                      <input
                        type='number'
                        id='balance'
                        name='balance'
                        className='form-control'
                        value={newAccount.balance}
                        placeholder='0'
                        aria-label='Account Nickname'
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary rounded-pill px-4 mx-4 shadow-sm fs-5'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='submit'
                  className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

CreateAccountModal.propTypes = {
  customerId: PropTypes.number.isRequired,
};
export default CreateAccountModal;

/*
{() => handleSubmit()}: This syntax defines an inline arrow function that, 
when executed, will call handleSubmit(). 
This approach can be useful when you need to pass arguments or 
do some additional processing before calling the actual function.

{handleSubmit}: This directly passes a reference to the handleSubmit function itself. 
It doesn’t invoke the function immediately; it just passes a reference to it. 
It's commonly used when you want to pass a function as a prop to a child component
 or as an event handler (e.g., onClick, onChange).

In most cases, especially for event handlers like onClick or onSubmit, 
you should use {handleSubmit} directly rather than {() => handleSubmit()}. 
Using the latter approach creates a new function instance on every render, 
which could potentially cause unnecessary re-renders of child components 
that receive this function as a prop.
*/
