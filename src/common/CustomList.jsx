// eslint-disable-next-line react/prop-types
const CustomList = ({ children, children2 }) => {
  return (
    <div className='container '>
      <div className='row justify-content-center align-items-center g-2'>
        <div className='col-12'>
          <div className='list-group'>{children}</div>
        </div>
        <div>
          <p>{children2}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomList;
