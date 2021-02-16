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
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";
import Pages from "./components/Pages/Pages";
import Store from "./components/Store/Store";
import CartPage from "./components/Store/CartPage/CartPage";
import CheckoutPage from "./components/Store/CheckoutPage/CheckoutPage";
import MyAccount from "./components/Store/MyAccount/MyAccount";
import ProductDetail from "./components/Store/ProductDetail/ProductDetail";
import ShopWithSidebar from "./components/Store/ShopWithSidebar/ShopWithSidebar";
import NewsMasonary from "./components/News/NewsMasonary/NewsMasonary";
import NewsSingle from "./components/News/NewsSingle/NewsSingle";
import NewsStandard from "./components/News/NewsStandard/NewsStandard";
import NewsWithSidebar from "./components/News/NewsWithSidebar/NewsWithSidebar";
import GalleryGrid from "./components/Gallery/GalleryGrid/GalleryGrid";
import GalleryMasonary from "./components/Gallery/GalleryMasonary/GalleryMasonary";
import GallerySingle from "./components/Gallery/GallerySingle/GallerySingle";
import FAQ from "./components/Pages/FAQ/FAQ";
import Page404v from "./components/Pages/Page404v/Page404v";
import Testimonials from "./components/Pages/Testimonials/Testimonials";
import Cart from "./components/Cart/Cart";

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
          <Route path="/galleryGrid">
            <GalleryGrid />
          </Route>
          <Route path="/galleryMasonary">
            <GalleryMasonary />
          </Route>
          <Route path="/gallerySingle">
            <GallerySingle />
          </Route>
          <Route path="/newsMasonary">
            <NewsMasonary />
          </Route>
          <Route path="/newsSingle">
            <NewsSingle />
          </Route>
          <Route path="/newsStandard">
            <NewsStandard />
          </Route>
          <Route path="/newsWithSidebar">
            <NewsWithSidebar />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/page404v">
            <Page404v />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/cartPage">
            <CartPage />
          </Route>
          <Route path="/checkoutPage">
            <CheckoutPage />
          </Route>
          <Route path="/myAccount">
            <MyAccount />
          </Route>
          <Route path="/productDetail">
            <ProductDetail />
          </Route>
          <Route path="/shopWithSidebar">
            <ShopWithSidebar />
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
