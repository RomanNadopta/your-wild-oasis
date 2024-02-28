import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooterContainer = styled.footer`
  margin-top: 10rem;
  padding: 2rem;
  background-color: var(--color-grey-100);
  font-family: 'Libre Baskerville';

  @media (min-width: 1200px) {
    margin-top: 20rem;
  }
`;

const StyledFootterText = styled.p`
  max-width: 120rem;
  margin: 0 auto;
`;

function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFootterText>
        &copy;2024 The wild Oasis | <Link to='/policies'>Privacy</Link>
      </StyledFootterText>
    </StyledFooterContainer>
  );
}

export default Footer;
