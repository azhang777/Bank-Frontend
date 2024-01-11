// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, btnStyle, onClick: event }) => {
  //have button as type button to explicitly say that this component cannot interact with form's onSubmit
  return (
    <button
      type='button'
      className={`btn ${
        btnStyle || "btn-primary"
      } rounded-pill px-4 mx-4 shadow-sm fs-5 text-nowrap`}
      onClick={event}
    >
      {children}
    </button>
  );
};

export default CustomButton;
