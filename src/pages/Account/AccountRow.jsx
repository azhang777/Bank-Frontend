import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ButtonCombo from "../../common/ButtonCombo";
import DeleteButton from "../../common/DeleteButton";
import { requestDeleteAccount } from "../../services/accountService";
import UpdateAccountModal from "./UpdateAccountModal";
const AccountRow = ({ account }) => {
  const { id, accountType, nickName, rewards, balance, customerId } = account;

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/accounts/${id}`, {
      state: { id, accountType, nickName, rewards, balance, customerId },
    });
  };

  const handleDeleteAccount = async (id) => {
    handleClick();
    try {
      const response = await requestDeleteAccount(id);

      console.info(response);
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <tr onClick={handleRowClick}>
      <td>{id}</td>
      <td>{accountType}</td>
      <td> {nickName}</td>
      <td>
        <ButtonCombo
          buttonOne={
            <UpdateAccountModal
              accountId={id}
              onClick={handleClick}
            />
          }
          buttonTwo={<DeleteButton onClick={handleDeleteAccount} />}
        />
      </td>
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
