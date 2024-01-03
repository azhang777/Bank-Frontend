// eslint-disable-next-line react/prop-types
const CustomCard = ({ img, title, text }) => {
  return (
    <div className='card'>
      <img
        src={img}
        className='card-img'
      />
      <div className='card-img-overlay'>
        <h5 className='custom-card-title'>{title}</h5>
        <p className='custom-card-text'>{text}</p>
      </div>
    </div>
  );
};

export default CustomCard;
