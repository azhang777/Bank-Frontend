import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const AccountRow = ({ account }) => {
  const { id, accountType, nickName, rewards, balance, customerId } = account;

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/accounts/${id}`, {
      state: { id, accountType, nickName, rewards, balance, customerId },
    });
  };

  return (
    <tr onClick={handleRowClick}>
      <td>{id}</td>
      <td>{accountType}</td>
      <td>{nickName}</td>
    </tr>
  );
};

AccountRow.propTypes = {
  //cant use object, everything has an object property. using object on this instead of shape will not allow u to use isRequired method chain. Notice how shape icon is purple (belongs to PropTypes) while object icon is orange (belongs to everything)
  account: PropTypes.shape({
    id: PropTypes.number.isRequired,
    accountType: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
    rewards: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    customerId: PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountRow;

/*
  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    address: [],
  });
  const [addressAmount, setAddressAmount] = useState(1);

  const handleAddressCount = (crement) => {
    setAddressAmount(newCustomer.address.length + crement);
  };
*/
