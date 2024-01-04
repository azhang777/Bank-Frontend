// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, onClick: event }) => {
  return (
    <button
      className='btn btn-primary rounded-pill px-4 mx-4 shadow-sm fs-5'
      onClick={event}
    >
      {children}
    </button>
  );
};

export default CustomButton;
