import styled from 'styled-components';
import { useState } from 'react';

import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: block;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    display: block;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Libre Baskerville';
    font-size: 30px;
    letter-spacing: 0.2rem;
    &:hover {
      color: #6d8325;
    }
  }
  a.active {
    color: #6d8325;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.$isMobile ? 'flex' : 'none')};
  margin: 0 auto;
  position: absolute;

  @media (max-width: 1131px) {
    background-color: var(--color-grey-50);
    z-index: 3;
    left: 0;
    width: 100%;
  }

  @media (min-width: 1132px) {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 34px;
    right: 20px;
  }
`;

const MobileNavToggle = styled.button`
  position: absolute;
  top: 10px;
  background-color: transparent;
  border: none;
  color: #000;
  padding: 10px;

  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 1132px) {
    display: none;
  }
`;

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isActive] = useState(false);

  return (
    <Nav>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </MobileNavToggle>

      <NavList $isMobile={isMobileNavOpen}>
        <NavItem>
          <NavLink
            className={isActive ? 'active' : ''}
            to={`/home`}
            onClick={() => setIsMobileNavOpen(false)}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setIsMobileNavOpen(false)} to={`/about`}>
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={isActive ? 'active' : ''}
            to={`/leadership`}
            onClick={() => setIsMobileNavOpen(false)}
          >
            Leadership
          </NavLink>
        </NavItem>
        <NavItem>
          <a href='#'>Contact</a>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default NavBar;
