import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, Nav, NavbarBrand } from 'reactstrap';

const cursorPointer = {
    'cursor':'pointer'
}

export default function Header() {
    //return <HeaderContainer></HeaderContainer>;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="fixed-top">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavbarBrand style={cursorPointer}>
                            <Link activeClass="active" className="About" to="About" spy={true} smooth={true} duration={500}>
                                소개
                            </Link>
                        </NavbarBrand>
                        <NavbarBrand style={cursorPointer}>
                            <Link activeClass="active" className="Skills" to="Skills" spy={true} smooth={true} duration={500}>
                            스킬
                            </Link>
                        </NavbarBrand>
                        <NavbarBrand style={cursorPointer}>
                            <Link activeClass="active" className="Experience" to="Experience" spy={true} smooth={true} duration={500}>
                            경력
                            </Link>
                        </NavbarBrand>
                        <NavbarBrand style={cursorPointer}>
                            <Link activeClass="active" className="Projects" to="Projects" spy={true} smooth={true} duration={500}>
                            프로젝트
                            </Link>
                        </NavbarBrand>
                        <NavbarBrand style={cursorPointer}>
                            <Link activeClass="active" className="Problem" to="Problem" spy={true} smooth={true} duration={500}>
                            문제해결
                            </Link>
                        </NavbarBrand>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
