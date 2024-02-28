import { useState } from 'react';
import AccordionItem from './AccordionItem';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1200px) {
    padding: 0;
  }
`;

function Accordion({ data, children }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <StyledAccordion>
      {children}
      {data.map((faq, index) => (
        <AccordionItem
          num={index}
          title={faq.question}
          key={faq.question}
          onOpen={setCurrentOpen}
          currentOpen={currentOpen}
        >
          {faq.answer}
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
}

export default Accordion;
