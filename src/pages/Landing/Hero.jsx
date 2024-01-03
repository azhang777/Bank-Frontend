import HeroImg from "../../assets/michal-bielejewski.jpg";
import CustomCard from "../../common/CustomCard";
import CustomCardBullet from "../../common/CustomBulletCard";
const Hero = () => {
  return (
    <div className='hero container-fluid p-0 '>
      <div className='row'>
        <CustomCard
          img={HeroImg}
          title='Control your Future'
          text='Start your journey now.'
        />
      </div>
      <div className='row justify-content-between'>
        <div className='col-12'>
          <h1 className='fs-1 text-center my-5 py-3'>Invest in Yourself</h1>
        </div>
        <div className='col-2 d-flex justify-content-center'>
          <CustomCardBullet
            img='/check.png'
            text='Simple'
          />
        </div>
        <div className='col-2 d-flex justify-content-center'>
          <CustomCardBullet
            img='/fast.png'
            text='Fast'
          />
        </div>
        <div className='col-2 d-flex justify-content-center'>
          <CustomCardBullet
            img='/target.png'
            text='Effective'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
