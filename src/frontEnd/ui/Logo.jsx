import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';

const StyledLogo = styled.div`
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 1132px) {
    text-align: left;
    margin-left: 2rem;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png';
  return (
    <StyledLogo>
      <Img src={src} alt='Logo' />
    </StyledLogo>
  );
}

export default Logo;
