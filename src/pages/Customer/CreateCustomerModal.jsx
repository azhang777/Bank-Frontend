import { useState } from "react";
import CustomButton from "../../common/CustomButton";
import { requestCreateCustomer } from "../../services/customerService";
import { useNavigationContext } from "../../common/NavigationProvider";
//pass customer id to this
const CreateCustomerModal = () => {
  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    address: [
      { streetNumber: "", streetName: "", city: "", state: "", zipCode: "" },
    ],
  });

  const handleAddressCount = (option) => {
    if (option === 1) {
      setNewCustomer((newCustomer) => ({
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
      const updatedAddress = [...newCustomer.address];
      updatedAddress.pop();
      setNewCustomer((newCustomer) => ({
        ...newCustomer,
        address: updatedAddress,
      }));
    }
  };

  const handleModal = useNavigationContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    setNewCustomer((prevCustomer) => {
      const updatedAddress = [...prevCustomer.address];
      updatedAddress[index][field] = value;
      return { ...prevCustomer, address: updatedAddress };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await requestCreateCustomer(newCustomer);
      handleModal();
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
        Create Customer
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
                Customer Creation
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
                      value={newCustomer.firstName}
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
                      value={newCustomer.lastName}
                      onChange={handleChange}
                      placeholder='enter name'
                      aria-label='Account Nickname'
                      required
                    />
                  </div>

                  {newCustomer.address.map((element, index) => (
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
                    {newCustomer.address.length > 1 && (
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

export default CreateCustomerModal;

//have a way to componentize the container in modal body and a way to add that component if the user has more than 1 address...
