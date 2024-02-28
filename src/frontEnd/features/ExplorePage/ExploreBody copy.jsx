import { useParams } from 'react-router-dom';
import Page from '../../ui/PageArticle';
import { decodeFromUrl } from '../../../utils/helpers';
import { explores, cities } from '../../../data/data-explores';
import Container from '../../ui/BodyContainer';
import Carousel from '../../ui/Carousel';
import { cabins } from '../../../data/data-cabins';
import { ExploreButton } from '../../ui/ExploreButton';
import Accordion from '../../ui/Accordion';
import styled from 'styled-components';
import PageHeading from '../../ui/PageHeading';

const faqs = [
  {
    question: 'Does Wild Oases cater to college spring break vacations?',
    answer: `A renter must be at least 21 years of age (or the specified minimum age required to rent the property, if different).
     Guests under the minimum age must be accompanied by a parent or legal guardian.`,
  },
  {
    question: ' What are the top Spring Break vacation destinations in Poland?',
    answer: `Bring on warm weather and glittering beaches with a spring break vacation in Krakow. Wolin National Park,
     Uznam and Olsztyn rank as top destinations for spring getaways.`,
  },
];

const StyledAccordion = styled.section`
  padding-top: 4rem;
`;

function ExplorePageBody() {
  const { id } = useParams();
  const originalTitle = decodeFromUrl(id);

  let explore;
  explore = explores.find((item) => item.title === originalTitle);

  const { title, image, article, carouselTitle, type } = explore;
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
          <Accordion data={faqs}>
            <PageHeading as='h3' width='width'>
              Spring Break vacation rentals FAQ
            </PageHeading>
          </Accordion>
        </StyledAccordion>
      </Page>
    </Container>
  );
}

export default ExplorePageBody;
