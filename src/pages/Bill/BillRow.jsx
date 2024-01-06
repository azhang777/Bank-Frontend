import currencyFormatter from "../../utils/currencyFormatter";
import PropTypes from "prop-types";
const BillRow = ({ bill }) => {
  const { id, nickName, paymentDate, paymentAmount } = bill;

  return (
    <tr>
      <td>{id}</td>
      <td>{nickName}</td>
      <td>{paymentDate}</td>
      <td>{currencyFormatter.format(paymentAmount)}</td>
    </tr>
  );
};

BillRow.propTypes = {
  bill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickName: PropTypes.string.isRequired,
    paymentDate: PropTypes.string.isRequired,
    paymentAmount: PropTypes.number.isRequired,
  }).isRequired,
};

export default BillRow;
