import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <nav className="navlinks">
      <header className="logo">Logo</header>
      <ul className="navlink">
        <li className="navlink__header">
          <Link to="/" className="navlink__header--modify">
            Home
          </Link>
        </li>
        <li className="navlink__header">
          <Link to="/" className="navlink__header--modify">
            Destinations
          </Link>
        </li>
        <li className="navlink__header">
          <Link to="/" className="navlink__header--modify">
            About Us
          </Link>
        </li>
        <li className="navlink__header">
          <Link to="/" className="navlink__header--modify">
            Search
          </Link>
        </li>
        <li className="navlink__header">
          <Link to="/" className="navlink__header--modify">
            Contact
          </Link>
        </li>
      </ul>
      <div className="login">
        <span className="login__button">Member Login</span>
      </div>
    </nav>
  );
};

export default HeaderComponent;
