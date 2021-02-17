import React from "react";
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
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";
import Store from "./components/Store/Store";

function App() {
  return (
    <div>
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
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
