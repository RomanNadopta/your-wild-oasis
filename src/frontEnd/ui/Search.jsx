import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';
import {
  MdOutlineFamilyRestroom,
  MdOutlineKeyboardArrowDown,
  MdSend,
} from 'react-icons/md';
import { GiSittingDog } from 'react-icons/gi';

import PageHeading from './PageHeading';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { encodeForUrl } from '../../utils/helpers';
import { useForm } from 'react-hook-form';

const ReantalSearch = styled.section`
  background: #040455;
  padding: 30px;
  z-index: 2;
  @media (min-width: 900px) {
    padding: 60px;
  }

  @media (min-width: 1200px) {
    padding: 60px;
    margin-top: -250px;
  }

  .search-header {
    color: white;
  }

  .disabled {
    opacity: 0.6;

    button {
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const StyledForm = styled.div`
  margin-top: 2rem;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  position: absolute;
  top: 50px;
  left: 0;
`;

const StyledSearch = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 14px;
    left: 4px;
    font-size: 2rem;
  }

  .close {
    display: none;
  }
`;

const StyledDateAndGuestContainer = styled.div`
  @media (min-width: 900px) {
    display: grid;
    margin-top: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

const StyledInput = styled.input`
  @media (max-width: 1200px) {
    width: 100%;
  }
  padding: 1rem 0rem 1rem 3rem;
  &::placeholder {
    opacity: 1;
  }
`;

const List = styled.div`
  position: absolute;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  font-family: 'Libre Baskerville';

  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-lg);
  background-color: white;

  z-index: 10;
`;

const ListTitle = styled.li`
  padding: 1rem;
  background-color: var(--color-grey-200);
  cursor: pointer;
  h5 {
    font-size: 2rem;
  }
`;

const ListItem = styled.li`
  padding: 5px 10px;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;

const StyledDatePicker = styled.div`
  position: relative;
  top: 40px;

  .react-datepicker-popper,
  .react-datepicker,
  .react-datepicker__month-container {
    width: 100%;
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
    transform: translate(0px, 48px);
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

    @media (min-width: 900px) {
      width: 400px;
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
    padding-top: 5px;
    width: 40px;
    height: 30px;
    background: orange;
  }

  .react-datepicker__day--disabled {
    color: var(--color-grey-600);
    background-color: var(--color-grey-300);
  }

  .react-datepicker__day--in-range-start,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: var(--color-blue-700);
  }

  @media (min-width: 900px) {
    top: 0;
    display: inline-block;
  }

  @media (min-width: 1200px) {
    margin-left: 1rem;
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
  display: grid;
  grid-template-columns: 40vw 40vw;
  justify-content: space-between;

  @media (min-width: 900px) {
    display: block;
  }
`;

const CheckIn = styled.label`
  position: relative;
  padding: 1.2rem 3rem;

  border: 1px solid grey;
  z-index: 2;
  cursor: pointer;
  background: white;
  @media (min-width: 900px) {
    position: absolute;
    width: 200px;
  }
`;

const CheckOut = styled.label`
  position: relative;

  padding: 1.2rem 3rem;

  border: 1px solid grey;
  background: white;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 900px) {
    position: absolute;
    left: 210px;
    width: 200px;
  }
`;

const QuestsContainer = styled.div`
  margin-top: 7rem;
  position: relative;
  @media (min-width: 900px) {
    margin-left: 2rem;
    margin-top: 0;
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

const SubmitBtn = styled.button`
  border: none;
  background: orange;
  font-size: 30px;
  margin-top: 2rem;
  padding: 1rem 0;
  outline: none;
  border-radius: 6px;
  width: 100%;
  &:hover {
    transition: all 0.5s;
    background: #f8bc4d;
  }

  @media (min-width: 900px) {
    margin-left: 1rem;
    margin-top: 0;
    width: auto;
  }

  @media (min-width: 1200px) {
    padding: 1rem 3rem;
  }
`;

function Search({ cabins, cities }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [house, setHouse] = useState([]);
  const [isOpenList, setIsOpenList] = useState(false);
  const parsedSearchParams = searchParams.toString();
  const searchTerm = parsedSearchParams.query || '';

  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  const filterCities = (query) => {
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    setSearchQuery(searchTerm);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchQuery(event);
    updateSearchParams(event);
    filterCities(event);
  };

  const handleCityClick = (house) => {
    handleSearchChange(house.name);
    setHouse(house);
    setFilteredCities([]);
  };

  const updateSearchParams = (query) => {
    searchParams.set('q', query);
  };

  const closeList = useOutsideClick(setIsOpenList, true);

  // datepicker
  const [dateRange, setDateRange] = useState([null, null]);

  const [startDate, endDate] = dateRange;

  const clearDates = () => {
    setDateRange([]);
  };

  // quests
  const [isOpen, setIsOpen] = useState(false);

  const [guestQuery, setGuestQuery] = useState(1);
  const [petQuery, setPetQuery] = useState(0);

  const ref = useOutsideClick(setIsOpen, false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const decreaseGuest = () => {
    if (guestQuery > 1) setGuestQuery(guestQuery - 1);
  };

  const increaseGuest = () => {
    if (guestQuery < house.maxCapacity) setGuestQuery(guestQuery + 1);
  };

  const decreasePet = () => {
    if (petQuery > 0) setPetQuery(petQuery - 1);
  };

  const increasePet = () => {
    if (petQuery < house.pets) setPetQuery(petQuery + 1);
  };

  const HandleSearch = (e) => {
    if (e.searchQuery !== '') {
      const searchResults = {
        guests: guestQuery,
        dogs: petQuery,
        arrival: startDate ? format(startDate, 'MM-dd-yyyy') : null,
        departure: endDate ? format(endDate, 'MM-dd-yyyy') : null,
      };
      const queryString = new URLSearchParams(searchResults);
      const searchUrl = `/${encodeForUrl(house.location)}/${encodeForUrl(
        searchQuery
      )}/search?${queryString}`;
      navigate(searchUrl);
    }
  };

  if (guestQuery > house.maxCapacity) setGuestQuery(house.maxCapacity);
  if (petQuery > house.pets) setPetQuery(house.pets);

  return (
    <>
      {cities && cabins && (
        <ReantalSearch>
          <PageHeading className='search-header' as='h2'>
            Find a vacation rental
          </PageHeading>
          <StyledForm>
            <StyledSearch>
              <IoLocationOutline />
              <StyledInput
                type='text'
                placeholder='Search city...'
                {...register('filteredCities', {
                  required: 'This field is required',
                })}
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onClick={() => setIsOpenList(true)}
              />
              <Error>{errors?.filteredCities?.message}</Error>

              {searchQuery !== '' &&
                filteredCities.length !== 0 &&
                isOpenList && (
                  <List ref={closeList}>
                    {filteredCities.map((city, i) => (
                      <ul key={i}>
                        <ListTitle>
                          <PageHeading
                            as='h5'
                            onClick={() => handleSearchChange(city.name)}
                          >
                            {city.name}
                          </PageHeading>
                        </ListTitle>

                        {cabins.map(
                          (cabin, i) =>
                            cabin.location === city.name && (
                              <ListItem
                                key={i}
                                onClick={() => handleCityClick(cabin)}
                              >
                                {cabin.name}
                              </ListItem>
                            )
                        )}
                      </ul>
                    ))}
                  </List>
                )}
            </StyledSearch>
            <StyledDateAndGuestContainer>
              <StyledDatePicker>
                <LabelWrapper>
                  <CheckIn htmlFor='check-in'>
                    {startDate ? format(startDate, 'MM/dd/yyyy') : 'Check in'}
                  </CheckIn>
                  <CheckOut htmlFor='check-in'>
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
                  <MdOutlineFamilyRestroom />{' '}
                  <span>
                    {guestQuery > 1
                      ? `${guestQuery} Guests`
                      : `${guestQuery} Guest`}
                  </span>{' '}
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
                        <button
                          className='decrease-btn'
                          onClick={decreaseGuest}
                        >
                          <HiMiniMinus />
                        </button>
                        <span>{guestQuery}</span>
                        <button
                          className='increase-btn'
                          onClick={increaseGuest}
                        >
                          <HiMiniPlus />
                        </button>
                      </div>
                    </Guests>

                    <Pets>
                      <p>Dogs</p>
                      <div
                        className={
                          house.pets > 0
                            ? `num-of-guests`
                            : `num-of-guests disabled`
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
              <SubmitBtn onClick={handleSubmit(HandleSearch)}>
                <MdSend />
              </SubmitBtn>
            </StyledDateAndGuestContainer>
          </StyledForm>
        </ReantalSearch>
      )}
    </>
  );
}

export default Search;
