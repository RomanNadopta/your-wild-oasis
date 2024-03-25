import styled from 'styled-components';

const SearchInput = styled.input`
  @media (max-width: 1200px) {
    width: 100%;
  }
  padding: 1rem 0rem 1rem 3rem;
  &::placeholder {
    opacity: 1;
  }
`;

export default SearchInput;
