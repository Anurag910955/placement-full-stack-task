import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Company</h2>

      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <Link to="/admin" className="admin-link">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
