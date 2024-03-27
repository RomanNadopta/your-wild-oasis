import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { IoLocationOutline } from 'react-icons/io5';
import { MdSend } from 'react-icons/md';

import PageHeading from './PageHeading';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { encodeForUrl } from '../../utils/helpers';
import { useForm } from 'react-hook-form';
import SearchInput from './SearchInput';
import CustomDatePicker from './CustomDatePicker';
import GuestSelect from './GuestSelect';

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

const ClearDateBtn = styled.button`
  margin: 1rem 0;
  display: inline-flex;
  justify-content: end;
  padding: 1rem 2rem;

  font-size: 1.4rem;

  border-radius: 4px;
  border: 1px solid var(--color-grey-400);
  background: white;

  @media (min-width: 1200px) {
    font-size: 1.6rem;
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

function SearchForm({ cabins, cities }) {
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

  const [guestQuery, setGuestQuery] = useState(1);
  const [petQuery, setPetQuery] = useState(0);

  const handleGuestChange = (newNumberOfGuests, newNumberOfPets) => {
    setGuestQuery(newNumberOfGuests);
    setPetQuery(newNumberOfPets);
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
              <SearchInput
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
              <CustomDatePicker $styleddatepicker='searchDatePicker'>
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
              </CustomDatePicker>
              <GuestSelect house={house} onGuestsChange={handleGuestChange} />
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

export default SearchForm;
