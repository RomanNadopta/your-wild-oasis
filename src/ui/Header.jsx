import styled from 'styled-components';
import UserAvatar from '../features/authentication/UserAvatar';
import HeaderMenu from './HeaderMenu';

const StyledHeader = styled.header`
  background-color: var(--color-grey-50);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-200);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
