import HeroImg from "../../assets/michal-bielejewski.jpg";
import CustomCard from "../../common/CustomCard";
import CustomFooter from "./CustomFooter";
import About from "./About";
import SignUpForm from "./SignUpForm";

const Hero = () => {
  return (
    <div className='hero container-fluid p-0 '>
      <CustomCard
        img={HeroImg}
        title='Control your Future'
        text='Start your journey now'
      >
        <SignUpForm />
      </CustomCard>
      <About />
      <CustomFooter />
    </div>
  );
};

export default Hero;
