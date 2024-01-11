const DeleteButton = ({ onClick: event, children }) => {
  return (
    <button
      type='button'
      className='fa-solid fa-x bg-transparent border-0 danger-color'
      onClick={event}
    >
      {children}
    </button>
  );
};

export default DeleteButton;
