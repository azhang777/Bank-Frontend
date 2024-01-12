import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { requestCreateBill } from "../../services/billService";
import PropTypes from "prop-types";
import { useNavigationContext } from "../../common/NavigationProvider";
const CreateBillModal = ({ accountId }) => {
  const [newBill, setNewBill] = useState({
    transactionStatus: "PENDING",
    payee: "",
    nickName: "",
    creationDate: "",
    paymentDate: "",
    recurringDate: 0,
    upcomingPaymentDate: "",
    paymentAmount: 0,
  });

  const [paymentDate, setPaymentDate] = useState(new Date());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBill({ ...newBill, [name]: value });
  };

  const handleModal = useNavigationContext();

  const handleDateChange = (date) => {
    setPaymentDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate =
      paymentDate.getMonth() +
      1 +
      "/" +
      paymentDate.getDate() +
      "/" +
      paymentDate.getFullYear();
    console.log(formattedDate);
    setNewBill({
      ...newBill,
      creationDate: new Date().toString(),
      upcomingPaymentDate: newBill.recurringDate,
      paymentDate: formattedDate,
    });
    try {
      const response = await requestCreateBill(
        {
          ...newBill,
          creationDate: new Date().toString(),
          upcomingPaymentDate: newBill.recurringDate,
          paymentDate: formattedDate,
        },
        accountId
      );

      handleModal("Bill");
      console.info(response);
    } catch (error) {
      console.error("Error creating bill: ", error);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-success rounded-pill px-4 mx-4 shadow-sm fs-5'
        data-bs-toggle='modal'
        data-bs-target='#staticBackdropBill'
      >
        Schedule Bill
      </button>
      <div
        className='modal fade'
        id='staticBackdropBill'
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
                Bill Creation for Account {accountId}
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
                      htmlFor='nickName'
                      className='form-label d-flex fs-5'
                    >
                      Nickname
                    </label>
                    <input
                      type='text'
                      id='nickName'
                      name='nickName'
                      className='form-control ms-2'
                      value={newBill.nickName}
                      onChange={handleChange}
                      placeholder='enter nick name'
                      aria-label='Account Nickname'
                      required
                    />
                  </div>
                  <div className='row mb-3'>
                    <div className='col-6'>
                      <label
                        htmlFor='payee'
                        className='form-label d-flex fs-5'
                      >
                        Payee
                      </label>
                      <input
                        type='text'
                        id='payee'
                        name='payee'
                        className='form-control '
                        value={newBill.payee}
                        onChange={handleChange}
                        placeholder='enter payee name'
                        aria-label='Payee'
                        required
                      />
                    </div>
                    <div className='col-6'>
                      <label
                        htmlFor='paymentAmount'
                        className='form-label d-flex fs-5'
                      >
                        Amount
                      </label>
                      <input
                        type='number'
                        min={10}
                        max={10000}
                        id='paymentAmount'
                        name='paymentAmount'
                        className='form-control '
                        value={newBill.paymentAmount}
                        onChange={handleChange}
                        placeholder='enter amount'
                        aria-label='Payment Amount'
                        required
                      />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-6'>
                      <label
                        htmlFor='paymentDate'
                        className='form-label d-flex fs-5'
                      >
                        Payment Date
                      </label>
                      <div className='d-flex'>
                        <DatePicker
                          selected={paymentDate}
                          onChange={(paymentDate) =>
                            handleDateChange(paymentDate)
                          }
                        />
                      </div>
                    </div>
                    <div className='col-6'>
                      <label
                        htmlFor='recurringDate'
                        className='form-label d-flex fs-5'
                      >
                        Recurring Day
                      </label>
                      <input
                        type='number'
                        id='recurringDate'
                        name='recurringDate'
                        className='form-control '
                        value={newBill.recurringDate}
                        onChange={handleChange}
                        placeholder='enter recurring day'
                        aria-label='Recurring Date'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer d-flex justify-content-center'>
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

CreateBillModal.propTypes = {
  accountId: PropTypes.number.isRequired,
};
export default CreateBillModal;
