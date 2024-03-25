import { format, parse } from 'date-fns';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';

import { SlArrowRight } from 'react-icons/sl';

import { useCabins } from '../../admin/features/cabins/useCabins';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  decodeFromUrl,
  encodeForUrl,
  formatCurrency,
} from '../../utils/helpers';
import GuestSelect from './GuestSelect';
import CustomDatePicker from './CustomDatePicker';

const SubmitBtnStyles = css`
  border: none;
  background: orange;
  font-size: 2rem;
  cursor: pointer;

  padding: 1rem 3rem;
  outline: none;
  border-radius: 6px;

  &:hover {
    transition: all 0.5s;
    background: #f8bc4d;
  }

  @media (min-width: 900px) {
    margin-left: 1rem;
    margin-top: 0;
    padding: 1rem 2rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem 3rem;
  }
`;

const BookingFormContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 2rem;
  }
  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1098px;
    padding-left: 10rem;
    padding-right: 0;
    margin: 0;
  }
`;

const StyledBookingForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ClearDateBtn = styled.button`
  margin: 1rem 0;
  display: inline-flex;
  justify-content: end;
  padding: 1rem 2rem;
  border-radius: 4px;
  border: 1px solid var(--color-grey-400);
  background: white;
`;

const LabelWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 40vw 40vw;
  justify-content: space-between;

  .arrow-right {
    position: absolute;
    z-index: 3;

    svg {
      font-size: 50px;
      color: var(--color-grey-300);
    }
    left: 50%;
    top: 0px;
    transform: translateX(-60%);
  }

  @media (min-width: 900px) {
    display: block;
  }
`;

const CheckIn = styled.label`
  position: relative;
  padding: 1.2rem 3rem;

  border: 1px solid grey;
  border-right: transparent;
  z-index: 2;
  cursor: pointer;
  background: white;

  @media (min-width: 900px) {
    position: absolute;
  }
`;

const CheckOut = styled.label`
  position: relative;

  padding: 1.2rem 3rem;

  border: 1px solid grey;
  border-left: transparent;
  background: white;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 900px) {
    position: absolute;
    left: 128px;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
  justify-content: space-between;
  @media (min-width: 900px) {
    padding-top: 0;
  }
`;

const PriceWrapper = styled.div`
  display: grid;
  align-items: center;
`;

const SubmitBtn = styled.button`
  ${SubmitBtnStyles}
`;
const SelectDates = styled.label`
  ${SubmitBtnStyles}
`;

const StyledPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;
const AverageNight = styled.p`
  color: var(--color-grey-400);
`;

function BookingForm() {
  const { isLoading, cabins } = useCabins();

  const { name } = useParams();
  const originalName = decodeFromUrl(name);

  // Date picker
  const [dateRange, setDateRange] = useState([null, null]);

  const [startDate, endDate] = dateRange;

  const [isActive, setIsActive] = useState(false);

  const handleDate = () => {
    setIsActive(!isActive);
  };
  const clearDates = () => {
    setDateRange([]);
  };

  //   Guests

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const searchQuery = {
    arrival: searchParams.has('arrival') ? searchParams.get('arrival') : null,
    departure: searchParams.has('departure')
      ? searchParams.get('departure')
      : null,
  };

  const [guestQuery, setGuestQuery] = useState(1);
  const [petQuery, setPetQuery] = useState(0);

  const navigate = useNavigate();

  const handleGuestChange = (newNumberOfGuests, newNumberOfPets) => {
    setGuestQuery(newNumberOfGuests);
    setPetQuery(newNumberOfPets);
  };

  useEffect(() => {
    if (searchParams.size !== 0) {
      const arrivalDate = parse(searchQuery.arrival, 'MM-dd-yyyy', new Date());
      const departureDate = parse(
        searchQuery.departure,
        'MM-dd-yyyy',
        new Date()
      );

      setDateRange([
        searchQuery.arrival !== 'null' ? arrivalDate : null,
        searchQuery.departure !== 'null' ? departureDate : null,
      ]);
    }
  }, [searchParams.size, searchQuery.arrival, searchQuery.departure]);

  const [vacationDays, setVacationDays] = useState(0);

  useEffect(() => {
    if (startDate && endDate !== null) {
      let difference = endDate.getTime() - startDate.getTime();
      let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
      setVacationDays(totalDays);
    } else {
      setVacationDays(1);
    }
  }, [startDate, endDate]);

  const house = cabins.find((cabin) => cabin.name === originalName);

  const {
    location: houseLocation,
    name: houseName,
    maxCapacity,
    regularPrice,
    pets,
  } = house;
  const totalPrice = vacationDays * regularPrice;

  useEffect(() => {
    if (startDate && endDate) {
      const searchResults = {
        guests: guestQuery,
        dogs: petQuery,
        arrival: startDate ? format(startDate, 'MM-dd-yyyy') : null,
        departure: endDate ? format(endDate, 'MM-dd-yyyy') : null,
      };
      const queryString = new URLSearchParams(searchResults);
      const searchUrl = `/${encodeForUrl(houseLocation)}/${encodeForUrl(
        houseName
      )}/search?${queryString}`;
      window.history.replaceState(null, '', searchUrl);
    }
  }, [
    startDate,
    endDate,
    navigate,
    houseLocation,
    houseName,
    petQuery,
    guestQuery,
  ]);

  if (guestQuery > maxCapacity) setGuestQuery(house.maxCapacity);
  if (petQuery > pets) setPetQuery(house.pets);

  return (
    <BookingFormContainer>
      <StyledBookingForm>
        <CustomDatePicker $styleddatepicker='bookingFormDatePicker'>
          <LabelWrapper>
            <CheckIn htmlFor='check-in' onClick={handleDate}>
              {startDate ? format(startDate, 'MM/dd/yyyy') : 'Check in'}
            </CheckIn>
            <span className='arrow-right'>
              <SlArrowRight />
            </span>
            <CheckOut htmlFor='check-in' onClick={handleDate}>
              {endDate ? format(endDate, 'MM/dd/yyyy') : 'Check out'}
            </CheckOut>
          </LabelWrapper>

          <DatePicker
            id='check-in'
            showIcon
            selectsRange={true}
            minDate={new Date()}
            selected={startDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsDisabledDaysInRange
          >
            <ClearDateBtn onClick={clearDates}>Clear Dates</ClearDateBtn>
          </DatePicker>
        </CustomDatePicker>

        <GuestSelect house={house} onGuestsChange={handleGuestChange} />
      </StyledBookingForm>
      <SubmitWrapper>
        <PriceWrapper>
          <StyledPrice>{formatCurrency(totalPrice)}</StyledPrice>
          {!endDate && <AverageNight>avg/night</AverageNight>}
        </PriceWrapper>
        {endDate ? (
          <SubmitBtn>Book Now</SubmitBtn>
        ) : (
          <SelectDates htmlFor='check-in'>Select Date</SelectDates>
        )}
      </SubmitWrapper>
    </BookingFormContainer>
  );
}

export default BookingForm;
