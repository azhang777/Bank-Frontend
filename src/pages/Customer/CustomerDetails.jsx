import { useLocation } from "react-router-dom";
import CustomButton from "../../common/CustomButton";

const CustomerDetails = () => {
  const location = useLocation();

  const { state } = location;
  const { id, firstName, lastName, address } = state;

  return (
    <div className='container bg-body-secondary rounded-5 my-5'>
      <div className='row text-center py-3'>
        <div className='col-12 border-5 border-bottom'>
          <h1>Customer ID: {id}</h1>
        </div>
        <div className='col-12 my-3'>
          <h2>First Name: {firstName}</h2>
        </div>
        <div className='col-12  my-3'>
          <h2>Last Name: {lastName}</h2>
        </div>
        <div className='col-12 my-3'>
          {address.map((element, index) => (
            <h3 key={element.id}>
              Address {index + 1} : {element.streetNumber} {element.streetName},{" "}
              {element.city}, {element.state}, {element.zipCode}
            </h3>
          ))}
        </div>
        <div className='col-12 py-3 border-5 border-top'>
          <button
            type='button'
            className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
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
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h1
                    className='modal-title fs-5'
                    id='staticBackdropLabel'
                  >
                    Modal title
                  </h1>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>...</div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary '
                  >
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;

/*
    <div>
      <h1>{id}</h1>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      {address.map((element) => (
        <h1 key={element.id}>{element.streetName}</h1>
      ))}
    </div>
*/
