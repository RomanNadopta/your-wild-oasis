import NavBar from './NavBar';
import Logo from './Logo';
import styled from 'styled-components';

const StyledHeaderMenu = styled.header`
  background-color: var(--color-grey-50);

  border: 1px solid var(--color-grey-200);
  @media (min-width: 768px) {
  }
`;
function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <Logo />
      <NavBar />
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
