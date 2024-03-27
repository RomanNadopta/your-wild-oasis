import styled from 'styled-components';

const StyledPage = styled.section``;

const Wrapper = styled.div`
  align-items: center;
  padding-top: 6rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  font-family: 'Libre Baskerville';
  @media (min-width: 900px) {
    padding-top: 6rem;
    padding-bottom: 10rem;

    grid-template-columns: 1fr 1fr;
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: 900px) {
    padding-left: 3rem;
    display: flex;

    align-items: center;
  }

  @media (min-width: 1200px) {
    padding-left: 0rem;

    &.change-order {
      padding-right: 0rem;
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
  object-position: center;
  filter: none;
  width: 100%;
`;

const ArticleWrapper = styled.div`
  padding: 0 3rem;
`;

const PageTitle = styled.h2`
  text-align: center;
  hyphens: none;
  @media (min-width: 1200px) {
    font-weight: 300;
    font-size: 5rem;
  }
`;

const PageSubtitle = styled.h4`
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
`;

const StyledParagraph = styled.p`
  padding: 2rem 0rem;

  font-size: 1.4rem;
  line-height: 1.8;
  word-spacing: 0.14rem;
  font-style: italic;

  @media (min-width: 1200px) {
    font-size: 1.8rem;
    line-height: 1.8;
  }
`;

const StyledCollageImage = styled.img`
  width: 100%;

  object-fit: cover;
  background-color: lightblue;
  filter: none;
`;

const StyledImageCollageWrapper = styled.div`
  align-items: center;
  @media (min-width: 900px) {
    padding-left: 2rem;
    border-left: 10px solid white;
    border-right: 10px solid white;
  }
`;
const StyledCollageImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 10px solid white;

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
`;

function Page({ children }) {
  return <StyledPage>{children}</StyledPage>;
}

function Block({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

function Image({ src, changeOrder }) {
  return (
    <ImageWrapper className={changeOrder}>
      <Img src={src} />
    </ImageWrapper>
  );
}

function CollageOfImages({ image, images }) {
  return (
    <StyledImageCollageWrapper>
      <StyledCollageImage src={image} />

      <StyledCollageImages>
        {images.map((image, i) => (
          <img src={image} key={i} alt='house' />
        ))}
      </StyledCollageImages>
    </StyledImageCollageWrapper>
  );
}

function Article({ children }) {
  return <ArticleWrapper>{children}</ArticleWrapper>;
}

function Title({ children }) {
  return <PageTitle>{children}</PageTitle>;
}

function Subtitle({ children }) {
  return <PageSubtitle>{children}</PageSubtitle>;
}

function Paragraph({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

Page.ImageWrapper = ImageWrapper.defaultProps = {
  type: '',
};

Page.Block = Block;

Page.Image = Image;
Page.CollageOfImages = CollageOfImages;
Page.Article = Article;
Page.Title = Title;
Page.Subtitle = Subtitle;
Page.Paragraph = Paragraph;
export default Page;
