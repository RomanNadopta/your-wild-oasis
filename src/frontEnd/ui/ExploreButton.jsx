import styled from 'styled-components';
import Button from '../../admin/ui/Button';
import { useNavigate } from 'react-router-dom';

const LinkText = styled.span`
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const ExploreButton = ({ linkTo, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkTo);
  };
  return (
    <Button variation='link' size='large' onClick={handleClick}>
      <LinkText>{children}</LinkText>
    </Button>
  );
};
