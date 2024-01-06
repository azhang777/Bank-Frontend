import { useLocation } from "react-router-dom";

const AccountDetails = () => {
  const location = useLocation();

  const { state } = location;
  const { id, accountType, nickName, rewards, balance, customerId } = state;

  return (
    <div>
      <h1>{id}</h1>
      <h2>{accountType}</h2>
      <h2>{nickName}</h2>
      <h2>{rewards}</h2>
      <h2>{balance}</h2>
      <h2>{customerId}</h2>
    </div>
  );
};

export default AccountDetails;
