import { useLocation } from "react-router-dom";
import CustomButton from "../../common/CustomButton";
import currencyFormatter from "../../utils/currencyFormatter";

const AccountDetails = () => {
  const location = useLocation();

  const { state } = location;
  const { id, accountType, nickName, rewards, balance, customerId } = state;

  return (
    <div className='container bg-body-secondary rounded-5 my-5'>
      <div className='row text-center py-3'>
        <div className='col-6 border-5 border-bottom'>
          <h1>Account ID: {id}</h1>
        </div>
        <div className='col-6  border-5 border-bottom'>
          <h1>Customer ID: {customerId}</h1>
        </div>
        <div className='col-12 my-3'>
          <h2>Account Type: {accountType}</h2>
        </div>
        <div className='col-12  my-3'>
          <h2>Nickname: {nickName}</h2>
        </div>
        <div className='col-12  my-3'>
          <h2>Rewards: {rewards}</h2>
        </div>
        <div className='col-12  my-3'>
          <h2>Balance: {currencyFormatter.format(balance)}</h2>
        </div>
        <div className='col-6 py-3 border-5 border-top'>
          <CustomButton btnStyle='btn-success '> Schedule Bill</CustomButton>
        </div>
        <div className='col-6  py-3 border-5 border-top'>
          <CustomButton btnStyle='btn-success text-nowrap'>
            Make Transaction
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
