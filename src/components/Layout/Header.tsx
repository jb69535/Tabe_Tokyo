import "../../styles/Header.css";
import logo from "../../assets/tabetokyo.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
}