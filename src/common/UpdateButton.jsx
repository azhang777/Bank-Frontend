const UpdateButton = ({ onClick: event, children }) => {
  return (
    <button
      type='button'
      className='fa-solid fa-pen bg-transparent border-0 warning-color'
      onClick={event}
    >
      {children}
    </button>
  );
};

export default UpdateButton;
