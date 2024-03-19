import Page from '../../ui/PageArticle';
import { aboutUs } from '../../../data/data-about-us';
import Container from '../../ui/BodyContainer';
import PageHeading from '../../ui/PageHeading';
import styled from 'styled-components';
import { ExploreButton } from '../../ui/ExploreButton';
import { cabins } from '../../../data/data-cabins';
import { cities } from '../../../data/data-explores';

const FactsContainer = styled.section`
  @media (min-width: 1200px) {
    padding-bottom: 10rem;
  }
`;

const Facts = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-bottom: 3rem;
  li {
    padding-top: 3rem;
  }
  @media (min-width: 1200px) {
    gap: 6rem;
  }
`;

const Number = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;
  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const OurMissionContainer = styled.section`
  background: #040455;
  border-radius: 10px;
  margin: 0 3rem;
`;

const OurMission = styled.div`
  padding: 6rem;
  color: white;

  p {
    padding-top: 1rem;
    font-weight: 600;
  }
`;

function AboutUsBody() {
  const { firstArticle, secondArticle, ourMission } = aboutUs.body;
  const lengthOfCabins = cabins.length;
  const LengthOfCities = cities.length;
  return (
    <Container>
      <Page>
        <Page.Block>
          <Page.Image src={firstArticle.image} />
          <Page.Article>
            <Page.Title>{firstArticle.title}</Page.Title>
            {firstArticle.article.map(
              (paragraph, i) =>
                paragraph && (
                  <Page.Paragraph key={i}>{paragraph.paragraph}</Page.Paragraph>
                )
            )}
          </Page.Article>
        </Page.Block>
      </Page>
      <FactsContainer>
        <Page.Article>
          <PageHeading as='h2'>Fast facts</PageHeading>
          <Facts>
            <li>
              <Number>{LengthOfCities}</Number>
              <p>Poland</p>
            </li>
            <li>
              <Number>30 thousand+</Number>
              <p>guests per year</p>
            </li>
            <li>
              <Number>{lengthOfCabins}+</Number>
              <p>Wild Oasis homes</p>
            </li>
            <li>
              <Number>500,000+</Number>
              <p>5-star houses on Wild Oasis</p>
            </li>
          </Facts>
          <ExploreButton linkTo='/leadership'>
            Meet Our Leader Team
          </ExploreButton>
        </Page.Article>
      </FactsContainer>

      <Page.Block>
        <Page.CollageOfImages
          image={secondArticle.image}
          images={secondArticle.otherImages}
        />
        <Page.Article>
          <Page.Title>{secondArticle.title}</Page.Title>
          {secondArticle.article.map(
            (paragraph, i) =>
              paragraph && (
                <Page.Paragraph key={i}>{paragraph.paragraph}</Page.Paragraph>
              )
          )}
        </Page.Article>
      </Page.Block>

      <OurMissionContainer>
        <OurMission>
          <PageHeading as='h2'>{ourMission.title}</PageHeading>
          <p>{ourMission.description}</p>
        </OurMission>
      </OurMissionContainer>
    </Container>
  );
}

export default AboutUsBody;