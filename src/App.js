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
import Logged from "./Logged";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header index={1} />
          <Home />
          <Footer />
        </Route>
        <Route path="/aboutus">
          <Header index={1} />
          <AboutUs />
          <Footer />
        </Route>
        <Route path="/blog">
          <Header index={1} />
          <Blog />
          <Footer />
        </Route>
        <Route path="/contactus">
          <Header index={1} />
          <ContactUs />
          <Footer />
        </Route>
        <Route path="/login">
          <Header index={1} />
          <Login />
          <Footer />
        </Route>
        <Route path="/register">
          <Header index={1} />
          <Register />
          <Footer />
        </Route>
        <Route path="/forgot_password">
          <Header index={1} />
          <ForgotPassword />
          <Footer />
        </Route>
        <Route path="/Logged">
          <Logged />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
