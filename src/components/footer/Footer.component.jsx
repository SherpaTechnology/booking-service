import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <li>Site Map</li>
        </ul>
      </nav>
      <div className="copy-right">
        <span>
          ©2023 - EverTrek - Bucket List Adventure Travel Limited UK no.
          10586281 - Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
