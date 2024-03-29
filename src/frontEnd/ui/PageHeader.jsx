import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: lightblue;
  filter: none;
`;
const StyledContainer = styled.div`
  line-height: 0;
  position: relative;
  min-height: 140px;

  background-color: hsl(240, 100%, 50%, 0.5);
  @media (min-width: 1200px) {
    min-height: 300px;
    margin-bottom: 10rem;
  }
`;

const StyledHeader = styled.div`
  background: #040455;
  display: block;
  justify-content: center;
  @media (min-width: 900px) {
    display: flex;
  }
`;

const StyledImageWrapper = styled.div`
  @media (min-width: 900px) {
    margin-left: 60px;
    width: 31%;
    border-left: 10px solid white;
    border-right: 10px solid white;
  }
`;

const StyledCollageImages = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: grid;
    border-top: 10px solid white;
    grid-template-columns: 1fr 1fr;

    img:nth-child(1) {
      height: 100%;
      border-right: 5px solid white;
      object-fit: cover;
      filter: none;
    }

    img:nth-child(2) {
      height: 100%;
      border-left: 5px solid white;
      object-fit: cover;
      filter: none;
    }
  }
`;

const StyledTitleContainer = styled.div`
  line-height: 1.5;

  padding: 3rem;

  color: white;
  @media (min-width: 900px) {
    width: 40%;
    margin-top: 2rem;
    margin-left: 4rem;
  }
  @media (min-width: 1200px) {
    margin: 0;

    margin-left: 6rem;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  @media (min-width: 900px) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;

  hyphens: none;
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
`;

const StyledSubtitle = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;

  hyphens: none;
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

function PageHeader({ children }) {
  return (
    <>
      <StyledContainer>
        <StyledHeader>{children}</StyledHeader>
      </StyledContainer>
    </>
  );
}

function CoverImages({ image, images }) {
  return (
    <StyledImageWrapper>
      <StyledImage src={image} alt='city' />
      {images && (
        <StyledCollageImages>
          {images.map((image) => (
            <img src={image} alt='city' key={image} />
          ))}
        </StyledCollageImages>
      )}
    </StyledImageWrapper>
  );
}
function TitleContainer({ children }) {
  return (
    <StyledTitleContainer>
      <TitleWrapper>{children}</TitleWrapper>
    </StyledTitleContainer>
  );
}

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
function Subtitle({ children }) {
  return <StyledSubtitle>{children} </StyledSubtitle>;
}

PageHeader.CoverImages = CoverImages;
PageHeader.TitleContainer = TitleContainer;
PageHeader.Title = Title;
PageHeader.Subtitle = Subtitle;

export default PageHeader;
