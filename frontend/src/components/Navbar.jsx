import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Node HTTP Server</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/read">Read Data</Link>
        </li>

        <li>
          <Link to="/save">Save Data</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
