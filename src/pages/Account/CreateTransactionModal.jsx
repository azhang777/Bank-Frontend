import { useState } from "react";
import { requestCreateAccount } from "../../services/accountService";
import PropTypes from "prop-types";
//pass customer id to this
const CreateTransactionModal = ({ customerId }) => {
  const [newTransaction, setNewTransaction] = useState({
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
        data-bs-target='#staticBackdropTransaction'
      >
        Make Transaction
      </button>
      <div
        className='modal fade'
        id='staticBackdropTransaction'
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
                Transaction Creation
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
                
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
          </div>
        </div>
      </div>
    </>
  );
};

CreateTransactionModal.propTypes = {
  customerId: PropTypes.number.isRequired,
};

export default CreateTransactionModal;


