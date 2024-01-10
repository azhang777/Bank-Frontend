import { useState } from "react";
import DatePicker from "react-datepicker";
const CreateBillModal = ({accountId}) => {
    const [newBill, setNewBill] = useState({
        transactionStatus: "PENDING",
        payee: "",
        nickName: "",
        creationDate: "",
        paymentDate: new Date(),
        recurringDate: 0,
        upcomingPaymentDate: "",
        paymentAmount: 0
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBill({ ...newBill, [name]: value });
      };
    
      const handleDateChange = (date) => {
        setNewBill({...newBill, paymentDate: date })
      }

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
            Schedule Bill
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
                    Bill Creation
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
                          className='form-control'
                          value={newBill.nickName}
                          onChange={handleChange}
                          placeholder='enter name'
                          aria-label='Account Nickname'
                          required
                        />
                      </div>
                      <div className='row mb-3'>
                        <div className='col-6 col-xs-12'>
                          <label
                            htmlFor='paymentDate'
                            className='form-label d-flex fs-5'
                          >
                            Payment Date
                          </label>
                          <DatePicker selected={newBill.paymentDate} onChange={(paymentDate) => handleDateChange(paymentDate)} />
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
      )
}

export default CreateBillModal

/*
                        <div className='col-6 col-xs-12'>
                          <label
                            htmlFor='nickName'
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
*/