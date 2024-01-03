import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNav from "./common/CustomNav";
import LandingPage from "./pages/Landing/LandingPage";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer/Customer";
import Account from "./pages/Account/Account";
import Bill from "./pages/Bill/Bill";
import Transaction from "./pages/Transaction/Transaction";
import CustomFooter from "./common/CustomFooter";
function App() {
  return (
    <Router>
      <div>
        <CustomNav />
        <Routes>
          <Route
            path='/'
            Component={LandingPage}
          />
          <Route
            path='/home'
            Component={Home}
          />
          <Route
            path='/customers'
            Component={Customer}
          />
          <Route
            path='/accounts'
            Component={Account}
          />
          <Route
            path='/transactions'
            Component={Transaction}
          />
          <Route
            path='/bills'
            Component={Bill}
          />
        </Routes>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;

//nested routing example
