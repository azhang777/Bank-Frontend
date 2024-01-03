const SignUpForm = () => {
  return (
    <form className='form-container bg-white p-5 rounded-5 shadow-lg '>
      <div className='row mb-5'>
        <div className='col'>
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
        <div className='col'>
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
      <div className='mb-5'>
        <label
          htmlFor='exampleInputEmail1'
          className='form-label'
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
      <div className='mb-5'>
        <label
          htmlFor='exampleInputUsername'
          className='form-label'
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
      <div className='mb-5'>
        <label
          htmlFor='exampleInputPassword1'
          className='form-label'
        >
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
        />
      </div>
      <div className='mb-5 form-check'>
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
      <button
        type='submit'
        className='btn btn-primary'
      >
        Continue
      </button>
    </form>
  );
};

export default SignUpForm;
