import { useState } from "react";
import { requestCreateWithdrawal } from "../../services/transactionService";
import PropTypes from "prop-types";
import { useNavigationContext } from "../../common/NavigationProvider";
const CreateWithdrawal = ({ accountId }) => {
  const [newWithdrawal, setNewWithdrawal] = useState({
    transactionType: "WITHDRAWAL",
    transactionDate: new Date(),
    transactionStatus: "PENDING",
    transactionMedium: "BALANCE",
    amount: 0,
    description: "",
  });

  const handleModal = useNavigationContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWithdrawal({ ...newWithdrawal, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await requestCreateWithdrawal(newWithdrawal, accountId);
      handleModal("Transaction");
      console.info(response);
    } catch (error) {
      console.error("Error creating account: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='modal-body'>
        <div className='container'>
          <div className='row mb-3'>
            <div className='col-6 col-xs-12'>
              <label
                htmlFor='amount'
                className='form-label d-flex fs-5 ms-2 text-nowrap'
              >
                Withdrawal Amount
              </label>
              <input
                type='number'
                min={1}
                id='amount'
                name='amount'
                className='form-control ms-2'
                value={newWithdrawal.amount}
                onChange={handleChange}
                placeholder='enter deposit amount'
                aria-label='Deposit Amount'
                required
              />
            </div>
            <div className='col-6 col-xs-12'>
              <label
                htmlFor='description'
                className='form-label d-flex fs-5'
              >
                Description
              </label>
              <input
                type='text'
                id='description'
                name='description'
                className='form-control '
                onChange={handleChange}
                value={newWithdrawal.description}
                placeholder='Description'
                aria-label='Description'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='modal-footer d-flex justify-content-center pb-0'>
        <button
          type='submit'
          className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

CreateWithdrawal.propTypes = {
  accountId: PropTypes.number.isRequired,
};
export default CreateWithdrawal;
