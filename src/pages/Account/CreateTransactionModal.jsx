import { useState } from "react";
import PropTypes from "prop-types";
import CreateDeposit from "./CreateDeposit";
import CreateWithdrawal from "./CreateWithdrawal";
import CreateP2P from "./CreateP2P";
//pass customer id to this
const CreateTransactionModal = ({ accountId }) => {
  const [transactionType, setTransactionType] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setTransactionType(value);
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-success rounded-pill px-4 mx-4 shadow-sm fs-5 text-nowrap'
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
              <div className='container'>
                <div className='row mb-3'>
                  <label
                    htmlFor='transactionType'
                    className='form-label d-flex fs-3'
                  >
                    Transaction Type
                  </label>
                  <select
                    className='form-select ms-2'
                    id='transactionType'
                    name='transactionType'
                    value={transactionType}
                    onChange={handleChange}
                    aria-label='Transaction Type'
                    required
                  >
                    <option value=''>Choose...</option>
                    <option value='DEPOSIT'>DEPOSIT</option>
                    <option value='WITHDRAWAL'>WITHDRAWAL</option>
                    <option value='P2P'>P2P</option>
                  </select>
                  {transactionType === "DEPOSIT" && (
                    <CreateDeposit accountId={accountId} />
                  )}
                  {transactionType === "WITHDRAWAL" && (
                    <CreateWithdrawal accountId={accountId} />
                  )}
                  {transactionType === "P2P" && (
                    <CreateP2P accountId={accountId} />
                  )}
                </div>
              </div>
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
