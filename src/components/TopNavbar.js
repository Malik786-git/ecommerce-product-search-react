import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function TopNavbar() {
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className='navbar-content' to='/'> Home</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink className='navbar-content' to='/product'>Product</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='navbar-content' to='/welcome'>Welcome</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
