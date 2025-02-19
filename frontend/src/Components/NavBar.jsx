import { Navbar, Nav, NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar>
        <Nav className="nav-link">
            <Link className="nav-item" exact to="/">Home</Link>
            <Link to="/create" className="nav-item">Add New Contact</Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
