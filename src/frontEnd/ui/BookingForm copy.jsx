import { format, parse } from 'date-fns';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';

import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2';
import { SlArrowRight } from 'react-icons/sl';
import {
  MdOutlineFamilyRestroom,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { GiSittingDog } from 'react-icons/gi';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useCabins } from '../../admin/features/cabins/useCabins';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  decodeFromUrl,
  encodeForUrl,
  formatCurrency,
} from '../../utils/helpers';
import GuestSelect from './GuestSelect';

const SubmitBtnStyles = css`
  border: none;
  background: orange;
  font-size: 2rem;

  /* padding: 1rem 0; */
  padding: 1rem 3rem;
  outline: none;
  border-radius: 6px;
  /* width: 100%; */
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
  /* max-width: 1098px;
  padding-left: 10rem; */
  /* display: flex;
  justify-content: space-between; */

  @media (min-width: 900px) {
    /* max-width: 800px; */
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 2rem;
  }
  @media (min-width: 1200px) {
    max-width: 1098px;
    padding-left: 10rem;
    padding-right: 0;
  }
`;

const StyledBookingForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledDatePicker = styled.div`
  position: relative;

  margin: 0 auto;
  .react-datepicker-popper,
  .react-datepicker,
  .react-datepicker__month-container {
    /* width: 100%; */
  }

  .react-datepicker {
    font-size: 1.6rem;

    font-family: 'Libre Baskerville';
    font-weight: 600;
  }

  .react-datepicker-wrapper {
    display: block;
    margin-top: -50px;
    @media (min-width: 900px) {
      display: inline-block;
      margin-top: 0;
    }
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle {
    fill: var(--color-blue-700);
    color: var(--color-blue-700);
    stroke: var(--color-blue-700);
  }
  .react-datepicker__triangle {
    transform: rotate(180deg) translateY(-3px) !important;
    left: 18.5px !important;
  }

  .react-datepicker-popper {
    transform: translate(0px, 59px) !important;
  }

  .react-datepicker__header {
    padding: 0;
  }

  .react-datepicker__current-month {
    font-size: 1.8rem;
    background-color: var(--color-blue-700);
    padding: 20px 0;
    color: white;
  }

  .react-datepicker__navigation {
    top: 16px;
  }

  .react-datepicker__input-container input {
    visibility: hidden;
    width: 270px;

    @media (min-width: 900px) {
      /* width: 400px; */
    }
  }

  .react-datepicker__view-calendar-icon input {
    padding: 1rem;
  }

  .react-datepicker__calendar-icon {
    top: 10px;
    fill: var(--color-grey-500);
    z-index: 2;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    justify-content: space-around;
  }
  .react-datepicker__day-names {
    padding: 10px 0;
    margin-bottom: 2px;
  }

  .react-datepicker__day-name {
    color: var(--color-blue-700);
  }

  .react-datepicker__week {
    margin-top: 5px;
    font-weight: 300;
  }
  .react-datepicker__day {
    border: 1px;
    border-radius: 4px;
    display: block;
    padding: calc(6vw - 16px);
    width: calc(12vw - 10px);
    height: calc(12vw - 14px);
    background: orange;

    @media (min-width: 900px) {
      padding: 20px;
      width: 60px;
      height: 60px;
    }
  }

  .react-datepicker__day--disabled {
    color: var(--color-grey-600);
    background-color: var(--color-grey-300);
  }

  .react-datepicker__day--in-range-start,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background: var(--color-blue-700);
  }

  @media (min-width: 900px) {
    max-width: 400px;
    /* top: 0; */
    /* left: -20px; */
    /* display: inline-block; */
  }

  @media (min-width: 1200px) {
    margin: 0;
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
    /* width: 200px; */
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

    /* width: 200px; */
  }
`;

const QuestsContainer = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  position: relative;
  width: 80%;
  @media (min-width: 900px) {
    margin-left: 2rem;
    margin-top: 0;
    width: 100%;
  }
  @media (min-width: 1200px) {
    margin-left: 2rem;
  }
`;

const QuestsInput = styled.button`
  position: relative;

  padding: 1.2rem 1rem;
  width: 100%;
  text-align: start;
  border: 1px solid grey;
  background-color: white;

  svg {
    font-size: 24px;

    vertical-align: sub;
  }
  span {
    position: relative;
    top: -2px;
    left: 2px;
  }

  .pet-icon {
    margin-left: 1rem;
  }

  .arrow-down-icon {
    position: absolute;
    right: 5%;
  }

  @media (min-width: 900px) {
    min-width: 220px;
  }
`;

const GuestsWrapper = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid grey;
  background-color: white;
  font-family: 'Libre Baskerville';
  font-size: 2rem;
  padding: 1rem 2rem;

  button {
    border: none;
    background: none;
    font-size: 30px;

    outline: none;
    &:hover {
      background-color: var(--color-grey-200);
      border-radius: 6px;
    }
    &:active {
      background-color: var(--color-grey-400);
    }
  }

  p {
    padding: 1rem 0;
  }

  .num-of-guests {
    padding: 1rem 0;

    span {
      position: relative;
      top: -8px;
      margin: 0 1rem;
    }
  }
`;

const Guests = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pets = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
  justify-content: space-around;
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
    guests: searchParams.has('guests')
      ? parseInt(searchParams.get('guests'), 10)
      : 1,
    pets: searchParams.has('dogs') ? parseInt(searchParams.get('dogs'), 10) : 0,
  };

  const [isOpen, setIsOpen] = useState(false);

  const [guestQuery, setGuestQuery] = useState(1);
  const [petQuery, setPetQuery] = useState(0);

  const navigate = useNavigate();

  const ref = useOutsideClick(setIsOpen, false);

  useEffect(() => {
    if (searchParams.size !== 0) {
      const arrivalDate = parse(searchQuery.arrival, 'MM-dd-yyyy', new Date());
      const departureDate = parse(
        searchQuery.departure,
        'MM-dd-yyyy',
        new Date()
      );

      setGuestQuery(searchQuery.guests);
      setPetQuery(searchQuery.pets);

      setDateRange([
        searchQuery.arrival !== 'null' ? arrivalDate : null,
        searchQuery.departure !== 'null' ? departureDate : null,
      ]);
    }
  }, [
    searchParams.size,
    searchQuery.guests,
    searchQuery.pets,
    searchQuery.arrival,
    searchQuery.departure,
  ]);

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

  // if (isLoading) return;
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

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const decreaseGuest = () => {
    if (guestQuery > 1) setGuestQuery(guestQuery - 1);
  };

  const increaseGuest = () => {
    if (guestQuery < maxCapacity) setGuestQuery(guestQuery + 1);
  };

  const decreasePet = () => {
    if (petQuery > 0) setPetQuery(petQuery - 1);
  };

  const increasePet = () => {
    if (petQuery < pets) setPetQuery(petQuery + 1);
  };

  if (guestQuery > maxCapacity) setGuestQuery(house.maxCapacity);
  if (petQuery > pets) setPetQuery(house.pets);

  return (
    <BookingFormContainer>
      <StyledBookingForm>
        <StyledDatePicker>
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
        </StyledDatePicker>

        <QuestsContainer ref={ref}>
          <QuestsInput onClick={handleDropDown}>
            <MdOutlineFamilyRestroom />
            <span>
              {guestQuery > 1 ? `${guestQuery} Guests` : `${guestQuery} Guest`}
            </span>
            {petQuery > 0 && (
              <>
                <GiSittingDog className='pet-icon' />
                <span>
                  {petQuery > 1 ? `${petQuery} Dogs` : `${petQuery} Dog`}
                </span>
              </>
            )}
            <MdOutlineKeyboardArrowDown className='arrow-down-icon' />
          </QuestsInput>
          {isOpen && (
            <GuestsWrapper>
              <Guests>
                <p>Guests</p>
                <div className='num-of-guests'>
                  <button className='decrease-btn' onClick={decreaseGuest}>
                    <HiMiniMinus />
                  </button>
                  <span>{guestQuery}</span>
                  <button className='increase-btn' onClick={increaseGuest}>
                    <HiMiniPlus />
                  </button>
                </div>
              </Guests>

              <Pets>
                <p>Dogs</p>
                <div
                  className={
                    house.pets > 0 ? `num-of-guests` : `num-of-guests disabled`
                  }
                >
                  <button className='decrease-btn' onClick={decreasePet}>
                    <HiMiniMinus />
                  </button>
                  <span>{petQuery}</span>
                  <button className='increase-btn' onClick={increasePet}>
                    <HiMiniPlus />
                  </button>
                </div>
              </Pets>
            </GuestsWrapper>
          )}
        </QuestsContainer>
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
