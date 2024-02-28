import styled from 'styled-components';

const StyledItem = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;

  cursor: pointer;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;

  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;

  &.open {
    border-top: 4px solid #087f5b;
  }

  .title,
  .icon {
    font-size: 18px;
    font-weight: 500;
  }

  &.open .number,
  &.open .title {
    color: #087f5b;
  }

  @media (min-width: 1200px) {
    .title,
    .icon {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

const StyledContentBox = styled.div`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const Number = styled.p`
  font-size: 18px;

  color: #ced4da;
  @media (min-width: 1200px) {
    font-size: 24px;
    font-weight: 500;
  }
`;

function AccordionItem({ num, title, onOpen, currentOpen, children }) {
  const isOpen = num === currentOpen;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <StyledItem className={isOpen ? 'open' : ''} onClick={handleToggle}>
      <Number>{num < 9 ? `0${num + 1}` : num + 1}</Number>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen ? <StyledContentBox>{children}</StyledContentBox> : null}
    </StyledItem>
  );
}
export default AccordionItem;
