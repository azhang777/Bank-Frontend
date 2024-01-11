import { useEffect, useState } from "react";
import {
  requestAccount,
  requestUpdateAccount,
} from "../../services/accountService";
import PropTypes from "prop-types";
import UpdateButton from "../../common/UpdateButton";

const UpdateAccountModal = ({ accountId, onClick: event }) => {
  const [existingAccount, setExistingAccount] = useState({
    accountType: "",
    nickName: "",
    rewards: 0,
    balance: 0,
  });

  useEffect(() => {
    const retrieveAccount = async () => {
      try {
        const response = await requestAccount(accountId);
        setExistingAccount(response.data);
      } catch (error) {
        console.error(error);
        setExistingAccount([]);
      }
    };

    retrieveAccount();
  }, [accountId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExistingAccount({ ...existingAccount, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(existingAccount);
      const response = await requestUpdateAccount(existingAccount, accountId);

      console.info(response);
    } catch (error) {
      console.error("Error creating account: ", error);
    }
  };

  return (
    <div onClick={event}>
      <UpdateButton
        type='button'
        dataToggle='modal'
        dataTarget={`#staticBackdropUpdateAccount${accountId}`}
      />

      <div
        className='modal fade'
        id={`staticBackdropUpdateAccount${accountId}`}
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
                Update Account for account {accountId}
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
                      className='form-select ms-2'
                      id='accountType'
                      name='accountType'
                      value={existingAccount.accountType}
                      onChange={handleChange}
                      aria-label='Account Type'
                      required
                    >
                      <option value=''>Choose...</option>
                      <option value='SAVINGS'>SAVINGS</option>
                      <option value='CHECKINGS'>CHECKINGS</option>
                      <option value='CREDIT'>CREDIT</option>
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
                      className='form-control ms-2'
                      value={existingAccount.nickName}
                      onChange={handleChange}
                      placeholder='enter nick name'
                      aria-label='Account Nickname'
                      required
                    />
                  </div>
                  <div className='row mb-3'>
                    <div className='col-6 col-xs-12'>
                      <label
                        htmlFor='rewards'
                        className='form-label d-flex fs-5'
                      >
                        Rewards
                      </label>
                      <input
                        type='number'
                        id='rewards'
                        name='rewards'
                        className='form-control '
                        value={existingAccount.rewards}
                        aria-label='Account Rewards'
                        disabled
                      />
                    </div>
                    <div className='col-6 col-xs-12'>
                      <label
                        htmlFor='balance'
                        className='form-label d-flex fs-5 '
                      >
                        Balance
                      </label>
                      <input
                        type='number'
                        id='balance'
                        name='balance'
                        className='form-control '
                        value={existingAccount.balance}
                        aria-label='Account Balance'
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
    </div>
  );
};

UpdateAccountModal.propTypes = {
  accountId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UpdateAccountModal;
