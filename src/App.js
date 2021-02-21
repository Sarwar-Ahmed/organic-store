import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Cart from "./components/Cart/Cart";
import Faq from "./components/Faq/Faq";
import News from "./components/News/News";
import Store from "./components/Store/Store";
import MyOrders from "./components/MyOrders/MyOrders";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";

export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/store/:clickedCategory">
              <Store />
            </Route>
            <Route path="/ProductsDetails/:id">
              <ProductsDetails />
            </Route>
            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
