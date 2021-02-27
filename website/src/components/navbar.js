import React, { useState }  from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from 'reactstrap';

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">Alexandro Villa</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Links</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;

