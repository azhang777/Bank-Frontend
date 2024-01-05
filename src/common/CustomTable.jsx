// eslint-disable-next-line react/prop-types
const CustomTable = ({ columns, dataRows }) => {
  return (
    <div className='container-fluid m-auto'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <table className='table table-hover fs-1'>
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

export default CustomTable;

/* must be an array. we should add type validation to this */
/*
https://sandroroth.com/blog/react-slots/
*/
