// eslint-disable-next-line react/prop-types
const CustomCard = ({ img, title, text, children }) => {
  return (
    <div className='card'>
      <img
        src={img}
        className='card-img'
      />
      <div className='card-img-overlay'>
        <div className='card-row row d-flex  justify-content-around align-items-center'>
          <div className='col-6'>
            <h5 className='custom-card-title text-nowrap'>{title}</h5>
            <p className='custom-card-text text-nowrap'>{text}</p>
          </div>
          <div className='col-4 d-flex justify-content-center align-items-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
