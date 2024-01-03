import Budgeting from "../../assets/budgeting.png";
import Investment from "../../assets/investment.png";
import Stars from "../../assets/stars.png";
import CustomCardBullet from "../../common/CustomBulletCard";

const About = () => {
  return (
    <>
      <div className='col-12'>
        <h1 className='custom-header text-center my-5 py-3'>
          Invest in Yourself.
        </h1>
      </div>
      <div className='col-12 '>
        <CustomCardBullet
          img={Budgeting}
          title='Personal Budgeting Tool'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, accusantium perferendis! Ab culpa, id quia qui autem, fuga, facere dignissimos et consequuntur atque inventore vero quis in dolore natus blanditiis.'
        />
      </div>
      <div className='col-12'>
        <CustomCardBullet
          img={Investment}
          title='Investment Management'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, accusantium perferendis! Ab culpa, id quia qui autem, fuga, facere dignissimos et consequuntur atque inventore vero quis in dolore natus blanditiis.'
        />
      </div>
      <div className='col-12 '>
        <CustomCardBullet
          img={Stars}
          title='Great Benefits'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, accusantium perferendis! Ab culpa, id quia qui autem, fuga, facere dignissimos et consequuntur atque inventore vero quis in dolore natus blanditiis.'
        />
      </div>
    </>
  );
};

export default About;
