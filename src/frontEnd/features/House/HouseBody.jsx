import { useParams } from 'react-router-dom';

import { MdOutlineFamilyRestroom, MdOutlineKingBed } from 'react-icons/md';
import { PiDoorOpenThin, PiShowerLight } from 'react-icons/pi';
import { GoMoon } from 'react-icons/go';
import { GiSittingDog } from 'react-icons/gi';

import CarouselSlide from '../../ui/CarouselSlide';

import { decodeFromUrl } from '../../../utils/helpers';
import BodyContainer from '../../ui/BodyContainer';
import styled from 'styled-components';
import PageHeading from '../../ui/PageHeading';
import Markdown from 'react-markdown';
import { useCabins } from '../../../admin/features/cabins/useCabins';
import BookingForm from '../../ui/BookingForm';

const Wrapper = styled.div`
  font-family: 'Libre Baskerville';
  width: 68%;
  margin: 0 auto;
  @media (min-width: 1200px) {
    width: 60%;
  }
`;
const HouseDetails = styled.ul`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

const HouseDetail = styled.li`
  svg {
    font-size: 2rem;
    vertical-align: middle;
    margin-right: 5px;
  }
  @media (min-width: 1200px) {
    font-size: 1.8rem;
    svg {
      font-size: 4rem;
    }
  }
`;

const HouseDescription = styled.div`
  padding-top: 4rem;
  p {
    padding: 1rem 0;
  }
  @media (min-width: 1200px) {
    font-size: 1.8rem;
    line-height: 1.8;
  }
`;

function HouseBody() {
  const { name } = useParams();
  const originalname = decodeFromUrl(name);
  const { isLoading, cabins } = useCabins();
  if (isLoading) return;
  const house = cabins.find((cabin) => cabin.name === originalname);

  return (
    <BodyContainer>
      <CarouselSlide data={house.images} alt={house.name} />
      <BookingForm />
      <Wrapper>
        <HouseDetails>
          <HouseDetail>
            <MdOutlineFamilyRestroom /> Max. occupancy: {house.maxCapacity}
          </HouseDetail>
          <HouseDetail>
            <MdOutlineKingBed /> {house.kingBed} king bed
          </HouseDetail>
          <HouseDetail>
            <PiDoorOpenThin /> {house.bedrooms} bedrooms
          </HouseDetail>
          <HouseDetail>
            <PiShowerLight /> {house.bathroom} bathroom
          </HouseDetail>
          <HouseDetail>
            <GoMoon /> Sleeps {house.sleepComfortably} comfortably
          </HouseDetail>
          <HouseDetail>
            <GiSittingDog /> {house.pets} dog max
          </HouseDetail>
        </HouseDetails>
        <HouseDescription>
          <PageHeading as='h4'>{house.name}</PageHeading>

          <Markdown>{house.description}</Markdown>
        </HouseDescription>
      </Wrapper>
    </BodyContainer>
  );
}

export default HouseBody;
