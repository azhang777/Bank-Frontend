// eslint-disable-next-line react/prop-types
const CommonRow = ({ column1, column2, column3 }) => {
  return (
    <tr>
      <td>{column1}</td>
      <td>{column2}</td>
      <td>{column3}</td>
    </tr>
  );
};

export default CommonRow;

//currently unused
