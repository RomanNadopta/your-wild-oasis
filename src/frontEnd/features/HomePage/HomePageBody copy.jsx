import styled from 'styled-components';
import { useCabins } from '../../../admin/features/cabins/useCabins';

import Carousel from '../../ui/Carousel';
import Page from '../../ui/PageArticle';

import PageHeading from '../../ui/PageHeading';

import { explores, cities } from '../../../data/data-explores';
import { encodeForUrl } from '../../../utils/helpers';
import Container from '../../ui/BodyContainer';
import { ExploreButton } from '../../ui/ExploreButton';

const BenefitsContainer = styled.section`
  font-family: 'Libre Baskerville';
  text-align: center;
  padding: 3rem;
  @media (min-width: 900px) {
    padding: 0;
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
  const { isLoading, cabins } = useCabins();

  let filteredCabins;
  if (!isLoading)
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  // const cityByType = cities.reduce((acc, city) => {
  //   if (!acc[city.type]) {
  //     acc[city.type] = [];
  //   }
  //   acc[city.type].push(city);
  //   return acc;
  // }, {});
  return (
    <Container>
      <Page>
        <Page.Block>
          <Page.Image src='https://images.unsplash.com/photo-1463062511209-f7aa591fa72f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <Page.Article>
            <Page.Title>Ready for spring break? </Page.Title>
            <Page.Subtitle>
              Shake off hibernation with spring travel
            </Page.Subtitle>
            <Page.Paragraph>
              Whether you want to head south for the winter or are planning a
              month-long summer getaway in the mountains, Vacasa has a vacation
              rental for you. Our long-term vacation rentals span from coast to
              coast and offer extended stays all year long. Escape the winter
              doldrums in Destin or Panama City Beach, Florida. Host virtual
              work meetings poolside in Costa Rica or Belize, reset and refresh
              with a mountain view in Colorado, or immerse yourself in some
              coastal maritime history on Hilton Head Island. Let even your
              grandest vacation dreams take flight with a long-term stay.
            </Page.Paragraph>
            <ExploreButton
              linkTo={`/explore/${encodeForUrl(explores.Title[0])}`}
            />
          </Page.Article>
        </Page.Block>

        <Carousel>
          <Carousel.Title>Trending spring destinations</Carousel.Title>
          <Carousel.Body data={cities} isLoading={isLoading} />
        </Carousel>

        <Page.Block>
          <Page.Image src='https://images.unsplash.com/photo-1589129140837-67287c22521b?w=800&h=500&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhYmlucyUyMGluJTIwdGhlJTIwZm9yZXN0fGVufDB8fDB8fHww' />
          <Page.Article>
            <Page.Title>Level up with a long-term stay </Page.Title>
            <Page.Paragraph>
              Whether you want to head south for the winter or are planning a
              month-long summer getaway in the mountains, Vacasa has a vacation
              rental for you. Our long-term vacation rentals span from coast to
              coast and offer extended stays all year long. Escape the winter
              doldrums in Destin or Panama City Beach, Florida. Host virtual
              work meetings poolside in Costa Rica or Belize, reset and refresh
              with a mountain view in Colorado, or immerse yourself in some
              coastal maritime history on Hilton Head Island. Let even your
              grandest vacation dreams take flight with a long-term stay.
            </Page.Paragraph>
            <ExploreButton
              linkTo={`/explore/${encodeForUrl(explores.Title[1])}`}
            />
          </Page.Article>
        </Page.Block>

        <Carousel>
          <Carousel.Title>Spring skiing destinations </Carousel.Title>
          <Carousel.Subtitle>
            Slopeside stays and bluebird days
          </Carousel.Subtitle>
          <Carousel.Body data={filteredCabins} isLoading={isLoading} />
        </Carousel>

        <BenefitsContainer>
          <PageHeading as='h2'>Your vacation is what we do</PageHeading>
          <StyledBenefits>
            <div>
              <PageHeading as='h4'>Book confidently.</PageHeading>
              <PageHeading as='h5'>
                3D virtual tours | Honest home listings | Guaranteed best
                pricing
              </PageHeading>
              <Page.Paragraph>
                When you list your home with Vacasa, we unlock the possibilities
                of how you can make the most of it. We’ll take care of
                everything, with dedicated local teams providing continuous care
                for every home and stay, all the while driving more revenue for
                you.
              </Page.Paragraph>
            </div>
            <div>
              <PageHeading as='h4'>Stay comfortably.</PageHeading>
              <PageHeading as='h5'>
                Premium cleaning | Easy check-ins | 24/7 service | All-in-one
                app
              </PageHeading>
              <Page.Paragraph>
                Along with our Vacasa Premium Clean program, expect comforts
                like smart locks, fresh linens, toiletries, and our local care
                team always around the corner to make creating lasting vacation
                memories a lot easier. (And remember to download our Vacasa app
                before you’re off for trip details and a seamless check-in.)
              </Page.Paragraph>
            </div>
          </StyledBenefits>
        </BenefitsContainer>
      </Page>
    </Container>
  );
}

export default HomePageBody;
