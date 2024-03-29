import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CustomNav from "./common/CustomNav";
import LandingPage from "./pages/Landing/LandingPage";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer/Customer";
import Account from "./pages/Account/Account";
import Bill from "./pages/Bill/Bill";
import Transaction from "./pages/Transaction/Transaction";
import CustomerDetails from "./pages/Customer/CustomerDetails";
import AccountDetails from "./pages/Account/AccountDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavigationProvider from "./common/NavigationProvider";
function App() {
  const [authToken, setIsAuth] = useState("");

  const handleAuth = (token) => {
    setIsAuth(token);
  };

  return (
    <Router>
      <NavigationProvider>
        <div>
          <CustomNav handleAuth={handleAuth} />
          <Routes>
            <Route
              path='/'
              element={<LandingPage />}
            />
            <Route
              path='/home'
              element={authToken ? <Home /> : <LandingPage />}
            />
            <Route
              path='/customers'
              element={authToken ? <Customer /> : <LandingPage />}
            />
            <Route
              path='/customers/:id'
              element={authToken ? <CustomerDetails /> : <LandingPage />}
            />
            <Route
              path='/accounts'
              element={authToken ? <Account /> : <LandingPage />}
            />
            <Route
              path='/accounts/:id'
              element={authToken ? <AccountDetails /> : <LandingPage />}
            />
            <Route
              path='/transactions'
              element={authToken ? <Transaction /> : <LandingPage />}
            />
            <Route
              path='/bills'
              element={authToken ? <Bill /> : <LandingPage />}
            />
          </Routes>
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;
