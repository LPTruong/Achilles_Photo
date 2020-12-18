import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/LandingPage/home/Home";
import AboutUs from "./containers/LandingPage/about/AboutUs";
import Blog from "./containers/LandingPage/blog/Blog";
import ContactUs from "./containers/LandingPage/contact/ContactUs";
import Login from "./containers/Login/Login";
import Header from "./containers/LandingPage/Header";
import Footer from "./containers/LandingPage/Footer";
import "antd/dist/antd.css";
import Register from "./containers/Register/Register";
import ForgotPassword from "./containers/Forgot_Password/Forgot_Passsword";

const App = () => {
  return (
    <BrowserRouter>
      <Header index={1} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgot_password">
          <ForgotPassword />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
