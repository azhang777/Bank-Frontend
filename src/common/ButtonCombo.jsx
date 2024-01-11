import PropTypes from "prop-types";

const ButtonCombo = ({ buttonOne, buttonTwo }) => {
  return (
    <div className='container '>
      <div className='row text-center '>
        <div className='col-4'>{buttonOne}</div>
        <div className='col-4'>{buttonTwo}</div>
      </div>
    </div>
  );
};

ButtonCombo.propTypes = {
  buttonOne: PropTypes.node,
  buttonTwo: PropTypes.node,
};

export default ButtonCombo;
