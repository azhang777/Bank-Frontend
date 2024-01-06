// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, btnStyle, onClick: event }) => {
  return (
    <button
      className={`btn ${
        btnStyle || "btn-primary"
      } rounded-pill px-4 mx-4 shadow-sm fs-5`}
      onClick={event}
    >
      {children}
    </button>
  );
};

export default CustomButton;
