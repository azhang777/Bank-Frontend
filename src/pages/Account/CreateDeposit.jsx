
const CreateDeposit = () => {

    return (
        <form onSubmit={handleSubmit}>
        <div className='modal-body'>
          <div className='container'>
            <div className='row mb-3'>
              <label
                htmlFor='accountType'
                className='form-label d-flex fs-3'
              >
                Account Type
              </label>
              <select
                className='form-select ms-2'
                id='accountType'
                name='accountType'
                value={newAccount.accountType}
                onChange={handleChange}
                aria-label='Account Type'
                required
              >
                <option value=''>Choose...</option>
                <option value='savings'>SAVINGS</option>
                <option value='checkings'>CHECKINGS</option>
                <option value='credit'>CREDIT</option>
              </select>
            </div>
            <div className='row mb-3'>
              <label
                htmlFor='accountType'
                className='form-label d-flex fs-3'
              >
                Nickname
              </label>
              <input
                type='text'
                id='nickName'
                name='nickName'
                className='form-control ms-2'
                value={newAccount.nickName}
                onChange={handleChange}
                placeholder='enter nick name'
                aria-label='Account Nickname'
                required
              />
            </div>
            <div className='row mb-3'>
              <div className='col-6 col-xs-12'>
                <label
                  htmlFor='rewards'
                  className='form-label d-flex fs-5'
                >
                  Rewards
                </label>
                <input
                  type='number'
                  id='rewards'
                  name='rewards'
                  className='form-control '
                  value={newAccount.rewards}
                  placeholder='0'
                  aria-label='Account Rewards'
                  disabled
                />
              </div>
              <div className='col-6 col-xs-12'>
                <label
                  htmlFor='balance'
                  className='form-label d-flex fs-5 '
                >
                  Balance
                </label>
                <input
                  type='number'
                  id='balance'
                  name='balance'
                  className='form-control '
                  value={newAccount.balance}
                  placeholder='0'
                  aria-label='Account Nickname'
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}