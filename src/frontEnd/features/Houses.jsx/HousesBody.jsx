import styled, { css } from 'styled-components';
import Container from '../../ui/BodyContainer';
import Markdown from 'react-markdown';

import PageHeading from '../../ui/PageHeading';
import Accordion from '../../ui/Accordion';

import { BsClockHistory, BsDoorOpen } from 'react-icons/bs';
import { GiVacuumCleaner } from 'react-icons/gi';
import { useNavigate, useParams } from 'react-router-dom';
import {
  decodeFromUrl,
  encodeForUrl,
  formatCurrency,
} from '../../../utils/helpers';
import { cabins } from '../../../data/data-cabins';
import { cities } from '../../../data/data-explores';

const commonTextStyle = css`
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const DescriptionWrapper = styled.div`
  padding-top: 4rem;
  width: 80%;
  margin: 0 auto;
  font-family: 'Libre Baskerville';

  p {
    padding-top: 1.6rem;
    ${commonTextStyle}
  }

  @media (min-width: 900px) {
    width: 50%;
  }
`;

const StyledHouses = styled.section`
  padding: 3rem;
  margin: 0 auto;
  font-family: 'Libre Baskerville';
  @media (min-width: 1200px) {
    padding-top: 10rem;
  }
`;

const HousesList = styled.ul`
  display: grid;
  /* padding-top: 4rem; */
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    display: grid;
    padding-top: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

const HousesItem = styled.li`
  margin-top: 2rem;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 250px;
    filter: none;
  }

  p {
    padding-top: 1.2rem;
    ${commonTextStyle}
  }
`;

const Faq = styled.div`
  font-family: 'Libre Baskerville';
`;

const Services = styled.section`
  margin: 3rem 3rem 0 3rem;
  border-top: 1px solid var(--color-grey-300);
  border-bottom: 1px solid var(--color-grey-300);
  font-family: 'Libre Baskerville';
  @media (min-width: 900px) {
    width: 60%;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;

const Service = styled.div`
  padding: 2rem 0;
`;

const ServiceList = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ServiceItem = styled.li`
  line-height: 2;
  @media (min-width: 1200px) {
    font-size: 2rem;
    svg {
      font-size: 4rem;
      vertical-align: middle;
    }
  }
`;

const AboutLocation = styled.section`
  padding: 0 3rem;
  font-family: 'Libre Baskerville';
  @media (min-width: 900px) {
    width: 60%;
    margin: 0 auto;
    padding: 0;
  }
`;
const AboutLoactionArticle = styled.div`
  padding: 1rem 0;
  p {
    padding-top: 2rem;
    ${commonTextStyle}
  }
`;

function HousesBody() {
  const { location } = useParams();
  const navigate = useNavigate();

  const originalTitle = decodeFromUrl(location);

  const cabinsList = cabins.filter((cabin) => cabin.location === originalTitle);
  const city = cities.find((city) => city.name === originalTitle);

  return (
    <Container>
      <DescriptionWrapper>
        <PageHeading as='h4'>
          Make {originalTitle} your next getaway
        </PageHeading>
        <p>{city.introduction}</p>
      </DescriptionWrapper>

      <StyledHouses>
        <PageHeading as='h3' width='width'>
          {originalTitle} vacation rentals for every getaway
        </PageHeading>
        <div>
          <HousesList>
            {cabinsList.map(
              (cabin) =>
                cabin && (
                  <HousesItem
                    key={cabin.name}
                    onClick={() =>
                      navigate(
                        `/${encodeForUrl(cabin.location)}/${encodeForUrl(
                          cabin.name
                        )}`
                      )
                    }
                  >
                    <img src={cabin.images[0]} alt={cabin.name} />
                    <PageHeading as='h4'>{cabin.name}</PageHeading>
                    <p>{formatCurrency(cabin.regularPrice)} avg/night</p>
                  </HousesItem>
                )
            )}
          </HousesList>
        </div>
      </StyledHouses>

      <Faq>
        <Accordion data={city.faqs}>
          <PageHeading as='h3' width='width'>
            {originalTitle} vacation rental FAQ
          </PageHeading>
        </Accordion>
      </Faq>

      <Services>
        <Service>
          <PageHeading as='h4'>Book confidently. Stay comfortably.</PageHeading>
          <ServiceList>
            <ServiceItem>
              <BsClockHistory /> 24/7 support
            </ServiceItem>
            <ServiceItem>
              <BsDoorOpen /> Easy check-in
            </ServiceItem>
            <ServiceItem>
              <GiVacuumCleaner /> Professional cleaning
            </ServiceItem>
          </ServiceList>
        </Service>
      </Services>

      <AboutLocation>
        {city.aboutCity.map(
          (city) =>
            city && (
              <AboutLoactionArticle key={city.title}>
                <PageHeading as='h4'>{city.title}</PageHeading>

                {city.article.map(
                  (article, index) =>
                    article && (
                      <Markdown key={index} children={article.paragraph} />
                    )
                )}
              </AboutLoactionArticle>
            )
        )}
      </AboutLocation>
    </Container>
  );
}

export default HousesBody;
