import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  requestCustomer,
  requestUpdateCustomer,
} from "../../services/customerService";
import CustomButton from "../../common/CustomButton";
import { useNavigate } from "react-router-dom";

const UpdateCustomerModal = ({ customerId, onClick: event }) => {
  const [existingCustomer, setExistingCustomer] = useState({
    firstName: "",
    lastName: "",
    address: [
      { streetNumber: "", streetName: "", city: "", state: "", zipCode: "" },
    ],
  });

  const handleAddressCount = (option) => {
    if (option === 1) {
      setExistingCustomer((newCustomer) => ({
        ...newCustomer,
        address: [
          ...newCustomer.address,
          {
            streetNumber: "",
            streetName: "",
            city: "",
            state: "",
            zipCode: "",
          },
        ],
      }));
    } else {
      const updatedAddress = [...existingCustomer.address];
      updatedAddress.pop();
      setExistingCustomer((newCustomer) => ({
        ...newCustomer,
        address: updatedAddress,
      }));
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    const retrieveCustomer = async () => {
      try {
        const response = await requestCustomer(customerId);
        setExistingCustomer(response.data);
      } catch (error) {
        console.error(error);
        setExistingCustomer([]);
      }
    };

    retrieveCustomer();
  }, [customerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExistingCustomer({ ...existingCustomer, [name]: value });
  };

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    setExistingCustomer((prevCustomer) => {
      const updatedAddress = [...prevCustomer.address];
      updatedAddress[index][field] = value;
      return { ...prevCustomer, address: updatedAddress };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(existingCustomer);
      const response = await requestUpdateCustomer(
        existingCustomer,
        customerId
      );
      navigate("/home");
      console.info(response);
    } catch (error) {
      console.error("Error creating account: ", error);
    }
  };

  return (
    <div onClick={event}>
      <button
        type='button'
        className='fa-solid fa-pen bg-transparent border-0 warning-color'
        data-bs-toggle='modal'
        data-bs-target={`#staticBackdropUpdateCustomer${customerId}`}
      />
      <div
        className='modal fade'
        id={`staticBackdropUpdateCustomer${customerId}`}
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
                Update Customer for Customer {customerId}
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
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      className='form-control ms-2'
                      value={existingCustomer.firstName}
                      onChange={handleChange}
                      placeholder='enter name'
                      aria-label='Account Nickname'
                      required
                    />
                  </div>
                  <div className='row mb-3'>
                    <label
                      htmlFor='accountType'
                      className='form-label d-flex fs-3'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      className='form-control ms-2'
                      value={existingCustomer.lastName}
                      onChange={handleChange}
                      placeholder='enter name'
                      aria-label='Account Nickname'
                      required
                    />
                  </div>

                  {existingCustomer.address.map((element, index) => (
                    <div
                      className='row mb-3'
                      key={index}
                    >
                      <label
                        htmlFor='Address'
                        className='form-label d-flex fs-5 justify-content-center'
                      >
                        Address {index + 1}
                      </label>
                      <div className='col-6 col-xs-12'>
                        <input
                          type='text'
                          id='streetNumber'
                          name='streetNumber'
                          className='form-control'
                          value={element.streetNumber}
                          onChange={(e) =>
                            handleInputChange(e, index, "streetNumber")
                          }
                          placeholder='street #'
                          aria-label='Street Number'
                          required
                        />
                      </div>
                      <div className='col-6 col-xs-12'>
                        <input
                          type='text'
                          id='streetName'
                          name='streetName'
                          className='form-control'
                          value={element.streetName}
                          onChange={(e) =>
                            handleInputChange(e, index, "streetName")
                          }
                          placeholder='street name'
                          aria-label='Street Name'
                          required
                        />
                      </div>
                      <div className='col-6 col-xs-12'>
                        <input
                          type='text'
                          id='city'
                          name='city'
                          className='form-control'
                          value={element.city}
                          onChange={(e) => handleInputChange(e, index, "city")}
                          placeholder='city'
                          aria-label='City'
                          required
                        />
                      </div>
                      <div className='col-3 col-xs-12'>
                        <input
                          type='text'
                          id='state'
                          name='state'
                          className='form-control'
                          value={element.state}
                          onChange={(e) => handleInputChange(e, index, "state")}
                          placeholder='state'
                          aria-label='State'
                          required
                        />
                      </div>
                      <div className='col-3 col-xs-12'>
                        <input
                          type='text'
                          id='zipCode'
                          name='zipCode'
                          className='form-control'
                          value={element.zipCode}
                          onChange={(e) =>
                            handleInputChange(e, index, "zipCode")
                          }
                          placeholder='zip code'
                          aria-label='Zip Code'
                          required
                        />
                      </div>
                    </div>
                  ))}
                  <div className='row mb-3 justify-content-center'>
                    <div className='col-3  col-md-12'>
                      <CustomButton
                        btnStyle='btn-success'
                        onClick={() => handleAddressCount(1)}
                      >
                        Add Address
                      </CustomButton>
                    </div>
                    {existingCustomer.address.length > 1 && (
                      <div className='col-3 col-md-12'>
                        <CustomButton
                          btnStyle='btn-danger'
                          onClick={() => handleAddressCount(-1)}
                        >
                          Delete Address
                        </CustomButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='modal-footer d-flex justify-content-center'>
                <button
                  type='submit'
                  className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
                  data-bs-dismiss='modal'
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

UpdateCustomerModal.propTypes = {
  customerId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UpdateCustomerModal;
