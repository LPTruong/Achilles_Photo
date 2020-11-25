import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./page/home/Home"
import AboutUs from "./page/about/AboutUs"
import Blog from "./page/blog/Blog"
import ContactUs from "./page/contact/ContactUs"
import Login from "./page/login/Login"
import Header from "./page/Header"
import Footer from "./page/Footer"
import 'antd/dist/antd.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header index={1}/>
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
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
