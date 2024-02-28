import styled from 'styled-components';
import { useHome } from './useHome';
import Carousel from '../../ui/Carousel';
import Page from '../../ui/PageArticle';

import PageHeading from '../../ui/PageHeading';

import { explores, cities } from '../../../data/data-explores';

import { encodeForUrl } from '../../../utils/helpers';
import Container from '../../ui/BodyContainer';
import { ExploreButton } from '../../ui/ExploreButton';
import Spinner from '../../../admin/ui/Spinner';
import { useCities } from '../ExplorePage/useCities';

const BenefitsContainer = styled.section`
  font-family: 'Libre Baskerville';
  text-align: center;
  padding: 3rem;
  @media (min-width: 900px) {
    padding: 0 3rem;
    padding-top: 4rem;
    text-align: left;
  }

  @media (min-width: 1200px) {
    padding-top: 10rem;
  }
`;

const StyledBenefits = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    gap: 6rem;
  }
`;

function HomePageBody() {
  const { isLoading, home } = useHome();
  // const { isLoading: cityLoading, cities } = useCities();
  console.log(cities);
  if (isLoading) return <Spinner />;
  const { benefits } = home.at(0);
  return (
    <Container>
      <Page>
        {home.map(
          (item) =>
            item && (
              <div key={item.id}>
                <Page.Block>
                  <Page.Image changeOrder={item.changeOrder} src={item.image} />
                  <Page.Article>
                    <Page.Title>{item.title}</Page.Title>
                    <Page.Subtitle>{item.subtitle}</Page.Subtitle>
                    <Page.Paragraph>{item.paragraph}</Page.Paragraph>
                    <ExploreButton
                      linkTo={`/explore/${encodeForUrl(explores[0].title)}`}
                    >
                      {explores[0].linkText}
                    </ExploreButton>
                  </Page.Article>
                </Page.Block>

                <Carousel>
                  <Carousel.Title>{item.carouselTitle}</Carousel.Title>
                  <Carousel.Body
                    data={cities.filter((city) => city.type === item.type)}
                    isLoading={isLoading}
                    linkTo={`/`}
                  />
                </Carousel>
              </div>
            )
        )}
        <BenefitsContainer>
          <PageHeading as='h2'>{benefits.headerTitle}</PageHeading>
          <StyledBenefits>
            {benefits.benefitsContent.map(
              (benefit, i) =>
                benefit && (
                  <div key={i}>
                    <PageHeading as='h3'>{benefit.title}</PageHeading>
                    <PageHeading as='h5'>{benefit.subtitle}</PageHeading>
                    <Page.Paragraph>{benefit.paragraph}</Page.Paragraph>
                  </div>
                )
            )}
          </StyledBenefits>
        </BenefitsContainer>
      </Page>
    </Container>
  );
}

export default HomePageBody;
