import { Navbar, Nav, NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar>
        <Nav className="nav-link">
            <Link className="nav-item" exact to="/">Home</Link>
            <Link to="/create" className="nav-item">Add New Contact</Link>
            <Link to="/weather"className="nav-item">Weather</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
