import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/login");
  };
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
          <Link to="/destination" className="navlink__header--modify">
            Destinations
          </Link>
        </li>
        <li className="navlink__header">
          <Link to="/aboutus" className="navlink__header--modify">
            About Us
          </Link>
        </li>
        <li className="navlink__header">
          <Link to="/" className="navlink__header--modify">
            Search
          </Link>
        </li>
        <li className="navlink__header">
          <Link to="/contactus" className="navlink__header--modify">
            Contact
          </Link>
        </li>
      </ul>
      <div className="login" onClick={handleLoginPage}>
        <span className="login__button">Member Login</span>
      </div>
    </nav>
  );
};

export default HeaderComponent;
