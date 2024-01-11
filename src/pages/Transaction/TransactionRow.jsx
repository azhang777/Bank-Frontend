import currencyFormatter from "../../utils/currencyFormatter";
import PropTypes from "prop-types";

const TransactionRow = ({ transaction }) => {
  const {
    id,
    transactionType,
    description,
    transactionDate,
    transactionStatus,
    amount,
  } = transaction;

  return (
    <tr>
      <td>{id}</td>
      <td>{transactionType}</td>
      <td>{description}</td>
      <td>{transactionStatus}</td>
      <td>{currencyFormatter.format(amount)}</td>
    </tr>
  );
};

TransactionRow.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    transactionType: PropTypes.string.isRequired,
    description: PropTypes.string,
    transactionDate: PropTypes.string.isRequired,
    transactionStatus: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default TransactionRow;
