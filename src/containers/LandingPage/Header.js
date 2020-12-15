import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarState, setSidebarActive] = useState(false);

  const handleSidebar = () => {
    setSidebarActive(!sidebarState);
  };

  let index = 1;
  let path = window.location.pathname.slice(1);

  switch (path) {
    case "":
      index = 1;
      break;
    case "aboutus":
      index = 2;
      break;
    case "blog":
      index = 3;
      break;
    case "contactus":
      index = 4;
      break;
    case "login":
      index = 5;
      break;
    case "register":
      index = 6;
      break;
    case "forgot_password":
      index = 7;
      break;
    default:
      break;
  }

  return (
    <div className="header">
      <div className="nav">
        <div className="nav-hamburger" onClick={handleSidebar}>
          <i class="fas fa-bars"></i>
        </div>
        <div className={"nav-list" + (sidebarState ? " sidebar-active" : "")}>
          <div className="nav-x" onClick={handleSidebar}>
            <i class="fas fa-times"></i>
          </div>
          <Link
            to="/"
            className={"nav-item" + (index === 1 ? " nav-item-active" : "")}
            onClick={handleSidebar}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className={"nav-item" + (index === 2 ? " nav-item-active" : "")}
            onClick={handleSidebar}
          >
            About Us
          </Link>
          <Link
            to="/blog"
            className={"nav-item" + (index === 3 ? " nav-item-active" : "")}
            onClick={handleSidebar}
          >
            Blog
          </Link>
          <Link
            to="/contactus"
            className={"nav-item" + (index === 4 ? " nav-item-active" : "")}
            onClick={handleSidebar}
          >
            Contact Us
          </Link>
        </div>
        <Link to="/login" className="login-btn" onClick={handleSidebar}>
          Login
        </Link>
        <Link to="/register" onClick={handleSidebar}></Link>
        <Link to="/forgot_password" onClick={handleSidebar}></Link>
      </div>
    </div>
  );
};

export default Header;
