import { Link } from "react-router-dom";
import CustomButton from "../../common/CustomButton";

const RouteContainer = () => {
  return (
    <div className='container'>
      <div className='row p-5'>
        <div className='col-6 text-center p-5'>
          <Link to={"/customers"}>
            <CustomButton>Customer</CustomButton>
          </Link>
        </div>
        <div className='col-6 text-center p-5'>
          <Link to={"/accounts"}>
            <CustomButton>Account</CustomButton>
          </Link>
        </div>
        <div className='col-6 text-center p-5'>
          <Link to={"/transactions"}>
            <CustomButton>Transaction</CustomButton>
          </Link>
        </div>
        <div className='col-6 text-center p-5'>
          <Link to={"/bills"}>
            <CustomButton>Bill</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RouteContainer;
