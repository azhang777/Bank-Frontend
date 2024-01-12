// eslint-disable-next-line react/prop-types
const CustomBulletCard = ({ img, title, text }) => {
  return (
    <div className='card mb-3 border-0 '>
      <div className='row d-flex justify-content-evenly'>
        <div className='col-md-2 col-sm-12 d-flex justify-content-center align-items-center'>
          <img
            src={img}
            className='icon'
            alt='icon-loading'
          />
        </div>
        <div className='col-md-6 col-sm-8'>
          <div className='card-body'>
            <h5 className='custom-bullet-title'>{title}</h5>
            <p className='custom-bullet-text'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBulletCard;
