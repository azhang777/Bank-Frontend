const SignUpForm = () => {
  return (
    <form className='container bg-white p-5 rounded-5 shadow-lg hide-content '>
      <div className='row custom-margin'>
        <div className='col ps-0'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'
          >
            First name
          </label>
          <input
            type='text'
            className='form-control'
            aria-label='First name'
          />
        </div>
        <div className='col pe-0'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'
          >
            Last name
          </label>
          <input
            type='text'
            className='form-control'
            aria-label='Last name'
          />
        </div>
      </div>
      <div className='row custom-margin'>
        <label
          htmlFor='exampleInputEmail1'
          className='form-label ps-0'
        >
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
      </div>
      <div className='row custom-margin'>
        <label
          htmlFor='exampleInputUsername'
          className='form-label ps-0'
        >
          Username
        </label>
        <input
          type='username'
          className='form-control'
          id='exampleInputUsername'
          aria-describedby='usernameHelp'
        />
      </div>
      <div className='row custom-margin'>
        <label
          htmlFor='exampleInputPassword1'
          className='form-label ps-0'
        >
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
        />
      </div>
      <div className='custom-margin form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          id='exampleCheck1'
        />
        <label
          className='form-check-label'
          htmlFor='exampleCheck1'
        >
          <a
            href='https://www.bankofamerica.com/online-banking/service-agreement.go'
            className='text-decoration-none'
            target='_blank'
            rel='noopener noreferrer'
          >
            I have read terms and conditions
          </a>
        </label>
      </div>
      <div className='text-center'>
        <button
          type='submit'
          className='btn btn-primary'
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
