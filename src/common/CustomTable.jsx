import PropTypes from "prop-types";
const CustomTable = ({ columns, dataRows }) => {
  return (
    <div className='container-fluid m-auto vh-60'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <table className='table table-hover fs-2'>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    scope='col'
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{dataRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataRows: PropTypes.node.isRequired,
};

export default CustomTable;

/* column must be an array and dataRow must be a row component. we should add type validation to this */
/*
https://sandroroth.com/blog/react-slots/
*/
