import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UpdateCustomerModal from "./UpdateCustomerModal";
// eslint-disable-next-line react/prop-types
const CustomerRow = ({ customer }) => {
  const { id, firstName, lastName, address } = customer;
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/customers/${id}`, {
      state: { id, firstName, lastName, address },
    });
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <tr onClick={() => handleRowClick()}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>
        <UpdateCustomerModal
          customerId={id}
          onClick={handleClick}
        />
      </td>
    </tr>
  );
};

CustomerRow.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.arrayOf(
      PropTypes.shape({
        streetNumber: PropTypes.string.isRequired,
        streetName: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

//address is an array of address objects
export default CustomerRow;
