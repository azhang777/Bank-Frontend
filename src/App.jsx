import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNav from "./common/CustomNav";
import LandingPage from "./pages/Landing/LandingPage";
import Home from "./pages/Home/Home";
import Customer from "./pages/Customer/Customer";
import Account from "./pages/Account/Account";
import Bill from "./pages/Bill/Bill";
import Transaction from "./pages/Transaction/Transaction";
import { useState } from "react";
function App() {
  const [authToken, setIsAuth] = useState("");

  const handleAuth = (token) => {
    setIsAuth(token);
    console.log(token);
  };

  return (
    <Router>
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
            path='/accounts'
            element={authToken ? <Account /> : <LandingPage />}
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
    </Router>
  );
}

export default App;
