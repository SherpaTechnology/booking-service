import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ShowToggleContext } from "../../contexts/showToggle/showToggle.context";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { show, setShow } = useContext(ShowToggleContext);
  const handleLoginPage = () => {
    navigate("/login");
    setShow(!show);
  };
  const handleShow = () => {
    setShow(!show);
  };
  const className = show ? "show-link" : "hide-link";
  return (
    <nav className="navlinks">
      <header className="logo">Logo</header>
      <ul className={`navlink ${className}`}>
        <li className="navlink__header" onClick={handleShow}>
          <Link to="/" className="navlink__header--modify" onClick={handleShow}>
            Home
          </Link>
        </li>
        <li className="navlink__header">
          <Link
            to="/destination"
            className="navlink__header--modify"
            onClick={handleShow}
          >
            Destinations
          </Link>
        </li>
        <li className="navlink__header">
          <Link
            to="/aboutus"
            className="navlink__header--modify"
            onClick={handleShow}
          >
            About Us
          </Link>
        </li>
        <li className="navlink__header">
          <Link
            to="/holidays"
            className="navlink__header--modify"
            onClick={handleShow}
          >
            Search
          </Link>
        </li>
        <li className="navlink__header">
          <Link
            to="/contactus"
            className="navlink__header--modify"
            onClick={handleShow}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={`login ${className}`} onClick={handleLoginPage}>
        <span className="login__button">Member Login</span>
      </div>
      <div className="menu" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default HeaderComponent;
