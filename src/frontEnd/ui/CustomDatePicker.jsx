import styled, { css } from 'styled-components';

const styledDatePickers = {
  searchDatePicker: css`
    margin-top: 3rem;

    @media (min-width: 900px) {
      margin-top: 0;
      display: inline-block;
    }

    @media (min-width: 1200px) {
      margin-left: 1rem;
    }

    .react-datepicker-popper,
    .react-datepicker,
    .react-datepicker__month-container {
      width: 100%;
    }
    .react-datepicker-popper {
      transform: translate(0px, 48px);
    }

    .react-datepicker__day {
      padding-top: 5px;
      width: 40px;
      height: 30px;
    }

    .react-datepicker__input-container input {
      @media (min-width: 900px) {
        width: 400px;
      }
    }
  `,

  bookingFormDatePicker: css`
    margin: 0 auto;

    @media (min-width: 1200px) {
      margin: 0;
    }

    .react-datepicker-popper {
      transform: translate(0px, 59px) !important;
    }

    .react-datepicker__input-container input {
      width: 270px;
    }

    .react-datepicker__day {
      padding: calc(6vw - 16px);
      width: calc(12vw - 10px);
      height: calc(12vw - 14px);
      @media (min-width: 900px) {
        padding: 20px;
        width: 60px;
        height: 60px;
      }
    }
  `,
};

const CustomDatePicker = styled.div`
  position: relative;

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

  ${(props) => styledDatePickers[props.$styleddatepicker]}
`;

CustomDatePicker.defaultProps = {
  $styleddatepicker: 'searchDatePicker',
};

export default CustomDatePicker;
