import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavbarBrand
  } from 'reactstrap';
import styled from 'styled-components';
/* const HeaderContainer = styled.div`
    background-color: #000;
    height: 70px;
`; */
export default function Header() {
    //return <HeaderContainer></HeaderContainer>;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavbarBrand href="/">About</NavbarBrand>
                <NavbarBrand href="/">Skills</NavbarBrand>
                <NavbarBrand href="/">Experience</NavbarBrand>
                <NavbarBrand href="/">Projects</NavbarBrand>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
}
