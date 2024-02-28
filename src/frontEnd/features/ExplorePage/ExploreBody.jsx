import { useParams } from 'react-router-dom';
import Page from '../../ui/PageArticle';
import { decodeFromUrl } from '../../../utils/helpers';

import Container from '../../ui/BodyContainer';
import Carousel from '../../ui/Carousel';
import { cabins } from '../../../data/data-cabins';
import { ExploreButton } from '../../ui/ExploreButton';
import Accordion from '../../ui/Accordion';
import styled from 'styled-components';
import PageHeading from '../../ui/PageHeading';
import { useCities } from './useCities';

import { useExplores } from './useExplores';

const StyledAccordion = styled.section`
  padding-top: 4rem;
`;

function ExplorePageBody() {
  const { id } = useParams();
  const originalTitle = decodeFromUrl(id);
  const { isLoading, cities } = useCities();
  const { isLoading: exploreLoading, explores } = useExplores();

  if (isLoading || exploreLoading) return;
  let explore;
  explore = explores.find((item) => item.title === originalTitle);

  const { title, image, article, carouselTitle, type, faq } = explore;
  const popularCabins = cabins.filter(
    (cabin) => cabin.popular === true && cabin.type === type
  );

  return (
    <Container>
      <Page>
        <Page.Block>
          <Page.Image src={image} />
          <Page.Article>
            <Page.Title>{title}</Page.Title>
            <Page.Paragraph>{article}</Page.Paragraph>
          </Page.Article>
        </Page.Block>
        <Carousel>
          <Carousel.Title>{carouselTitle}</Carousel.Title>
          <Carousel.Body data={popularCabins} />
        </Carousel>

        {cities.map(
          (city, index) =>
            city.type === type && (
              <Page.Block key={index}>
                {index % 2 === 0 ? (
                  <Page.Image src={city.image} />
                ) : (
                  <Page.Image src={city.image} changeOrder='imageOrder' />
                )}

                <Page.Article>
                  <Page.Subtitle>{city.subtitle.toUpperCase()}</Page.Subtitle>
                  <Page.Title>{city.name} </Page.Title>
                  <Page.Paragraph>{city.description}</Page.Paragraph>
                  <ExploreButton linkTo={`/${city.name}`}>
                    Explore {city.name} Vacation Rental
                  </ExploreButton>
                </Page.Article>
              </Page.Block>
            )
        )}
        <StyledAccordion>
          <Accordion data={faq.faqs}>
            <PageHeading as='h3' width='width'>
              {faq.headerTitle}
            </PageHeading>
          </Accordion>
        </StyledAccordion>
      </Page>
    </Container>
  );
}

export default ExplorePageBody;
