// eslint-disable-next-line react/prop-types
const CustomCard = ({ img, title, text, children }) => {
  return (
    <div className='card'>
      <img
        src={img}
        className='card-img'
      />
      <div className='card-img-overlay'>
        <div className='card-row row d-flex p-5 justify-content-around'>
          <div className='col-6'>
            <h5 className='custom-card-title'>{title}</h5>
            <p className='custom-card-text'>{text}</p>
          </div>
          <div className='col-4 d-flex align-items-center'>
            <div className='inner-content'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
