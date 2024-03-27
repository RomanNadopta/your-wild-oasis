import styled, { css } from 'styled-components';

const PageHeading = styled.h1`
  hyphens: none;
  ${(props) =>
    props.as === 'h2' &&
    css`
      @media (min-width: 1200px) {
        font-weight: 300;
        font-size: 5rem;
      }
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      background: none;
      @media (min-width: 1200px) {
        font-weight: 300;
        font-size: 4rem;
        ${(props) =>
          props.width === 'width' &&
          css`
            width: 50%;
          `}
      }
    `}

  ${(props) =>
    props.as === 'h4' &&
    css`
      @media (min-width: 1200px) {
        font-weight: 600;
        font-size: 2.4rem;
      }
    `}
    ${(props) =>
    props.as === 'h5' &&
    css`
      @media (min-width: 1200px) {
        font-weight: 600;
        font-size: 2rem;
      }
    `}
`;

export default PageHeading;
