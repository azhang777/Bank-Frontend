import HeroImg from "../../assets/michal-bielejewski.jpg";
import CustomCard from "../../common/CustomCard";
import About from "./About";
import SignUpForm from "./SignUpForm";

const Hero = () => {
  return (
    <div className='hero container-fluid p-0 '>
      <div className='row'>
        <CustomCard
          img={HeroImg}
          title='Control your Future'
          text='Start your journey now'
        >
          <SignUpForm />
        </CustomCard>
      </div>
      <div className='row'>
        <About />
      </div>
    </div>
  );
};

export default Hero;
