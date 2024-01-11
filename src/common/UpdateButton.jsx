import PropTypes from "prop-types";

const UpdateButton = ({ onClick: event, children, dataToggle, dataTarget }) => {
  return (
    <button
      type='button'
      className='fa-solid fa-pen bg-transparent border-0 warning-color'
      data-bs-toggle={dataToggle}
      data-bs-target={dataTarget}
      onClick={event}
    >
      {children}
    </button>
  );
};

UpdateButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  dataToggle: PropTypes.func,
  dataTarget: PropTypes.func,
};

export default UpdateButton;
