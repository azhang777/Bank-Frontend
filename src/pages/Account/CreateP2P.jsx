import { useState } from "react";
import { requestCreateP2P } from "../../services/transactionService";
import PropTypes from "prop-types";
import { useNavigationContext } from "../../common/NavigationProvider";

const CreateP2P = ({ accountId }) => {
  const [newP2P, setNewP2P] = useState({
    transactionType: "P2P",
    transactionDate: new Date(),
    transactionStatus: "PENDING",
    transactionMedium: "BALANCE",
    amount: 0,
    description: "",
    receiverId: 0,
  });

  const handleModal = useNavigationContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewP2P({ ...newP2P, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await requestCreateP2P(newP2P, accountId);
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
            <div className='col-4 col-xs-12'>
              <label
                htmlFor='amount'
                className='form-label d-flex fs-5 ms-2'
              >
                P2P Amount
              </label>
              <input
                type='number'
                min={1}
                id='amount'
                name='amount'
                className='form-control ms-2'
                value={newP2P.amount}
                onChange={handleChange}
                placeholder='enter deposit amount'
                aria-label='Deposit Amount'
                required
              />
            </div>
            <div className='col-4 col-xs-12'>
              <label
                htmlFor='receiverId'
                className='form-label d-flex fs-5 ms-2'
              >
                Receiver ID
              </label>
              <input
                type='number'
                id='receiverId'
                name='receiverId'
                className='form-control ms-2'
                value={newP2P.receiverId}
                onChange={handleChange}
                placeholder='enter receiver id'
                aria-label='Receiver ID'
                required
              />
            </div>
            <div className='col-4 col-xs-12'>
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
                value={newP2P.description}
                onChange={handleChange}
                placeholder='Description'
                aria-label='Description'
              />
            </div>
          </div>
          <div className='row mb-3'></div>
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

CreateP2P.propTypes = {
  accountId: PropTypes.number.isRequired,
};
export default CreateP2P;
