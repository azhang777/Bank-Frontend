// eslint-disable-next-line react/prop-types
const CustomBulletCard = ({ img, text }) => {
  return (
    <div
      className='card d-flex justify-content-center align-items-center'
      style={{ width: "12rem" }}
    >
      <img
        src={img}
        alt='icon'
        className='icon'
      />
      <div className='card-body'>
        <p className='card-text fw-bold fs-1 py-5'>{text}</p>
      </div>
    </div>
  );
};

export default CustomBulletCard;
