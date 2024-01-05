// eslint-disable-next-line react/prop-types
const AccountRow = ({ id, nickName, accountType }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{accountType}</td>
      <td>{nickName}</td>
    </tr>
  );
};

export default AccountRow;
