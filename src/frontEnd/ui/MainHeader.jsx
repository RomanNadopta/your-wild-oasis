import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;

  object-fit: cover;
  background-color: lightblue;
`;
const StyledContainer = styled.div`
  line-height: 0;
  position: relative;
  min-height: 130px;

  background-color: hsl(240, 100%, 50%, 0.5);
  @media (min-width: 1200px) {
    min-height: 400px;
    margin-bottom: 10rem;
  }
`;

const StyledTitle = styled.h1`
  hyphens: none;
  width: 100%;
  margin: 0;
  position: absolute;

  font-size: 2rem;
  color: black;
  font-weight: bold;
  text-align: center;
  top: 30%;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  transform: translateY(-40%);
  z-index: 1;

  background-clip: border-box;
  transition: all 0.8s ease;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--color-grey-100);
  -webkit-text-stroke-width: 1px;
  @media (min-width: 900px) {
    font-size: 4rem;
  }

  @media (min-width: 1200px) {
    font-size: 6rem;
  }
`;
function MainHeader({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

function Image({ src }) {
  return <StyledImage src={src} alt='hero' />;
}

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

MainHeader.Image = Image;
MainHeader.Title = Title;

export default MainHeader;
