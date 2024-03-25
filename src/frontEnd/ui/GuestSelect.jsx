import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2';
import {
  MdOutlineFamilyRestroom,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useEffect, useState } from 'react';
import { GiSittingDog } from 'react-icons/gi';
import { useLocation } from 'react-router-dom';

const QuestsContainer = styled.div`
  margin-top: 3rem;

  position: relative;

  .disabled {
    opacity: 0.4;
    cursor: default;
  }
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
    min-width: 240px;
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

function GuestSelect({ house, onGuestsChange }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const searchQuery = {
    guests: searchParams.has('guests')
      ? parseInt(searchParams.get('guests'), 10)
      : 1,
    pets: searchParams.has('dogs') ? parseInt(searchParams.get('dogs'), 10) : 0,
  };
  const [isOpen, setIsOpen] = useState(false);

  const [guestQuery, setGuestQuery] = useState(1);
  const [petQuery, setPetQuery] = useState(0);

  useEffect(() => {
    if (searchParams.size !== 0) {
      setGuestQuery(searchQuery.guests);
      setPetQuery(searchQuery.pets);
    }
  }, [searchParams.size, searchQuery.guests, searchQuery.pets]);

  useEffect(() => {
    if (onGuestsChange) {
      onGuestsChange(guestQuery, petQuery);
    }
  }, [onGuestsChange, guestQuery, petQuery]);

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

  if (guestQuery > house.maxCapacity) setGuestQuery(house.maxCapacity);
  if (petQuery > house.pets) setPetQuery(house.pets);

  return (
    <QuestsContainer ref={ref}>
      <QuestsInput onClick={handleDropDown}>
        <MdOutlineFamilyRestroom />
        <span>
          {guestQuery > 1 ? `${guestQuery} Guests` : `${guestQuery} Guest`}
        </span>
        {petQuery > 0 && (
          <>
            <GiSittingDog className='pet-icon' />
            <span>{petQuery > 1 ? `${petQuery} Dogs` : `${petQuery} Dog`}</span>
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
                className={
                  guestQuery > 1 ? 'decrease-btn' : 'decrease-btn disabled'
                }
                onClick={decreaseGuest}
              >
                <HiMiniMinus />
              </button>
              <span>{guestQuery}</span>
              <button
                className={
                  guestQuery < house.maxCapacity
                    ? 'increase-btn'
                    : 'increase-btn disabled'
                }
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
                house.pets > 0 ? `num-of-guests` : `num-of-guests disabled`
              }
            >
              <button
                className={
                  petQuery > 0 ? 'decrease-btn' : 'decrease-btn disabled'
                }
                onClick={decreasePet}
              >
                <HiMiniMinus />
              </button>
              <span>{petQuery}</span>
              <button
                className={
                  petQuery < house.pets
                    ? 'increase-btn'
                    : 'increase-btn disabled'
                }
                onClick={increasePet}
              >
                <HiMiniPlus />
              </button>
            </div>
          </Pets>
        </GuestsWrapper>
      )}
    </QuestsContainer>
  );
}

export default GuestSelect;
