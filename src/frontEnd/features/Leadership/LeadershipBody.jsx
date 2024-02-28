import styled from 'styled-components';
import Container from '../../ui/BodyContainer';
import PageHeading from '../../ui/PageHeading';

import { useLeadership } from './useLeadership';
const StyledTitle = styled.div`
  padding-top: 4rem;
  text-align: center;

  @media (min-width: 900px) {
    padding-left: 3rem;
    text-align: start;
  }
`;

const Leadership = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 0 1rem;
  h4 {
    padding-top: 1rem;
  }

  img {
    position: relative;
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Character = styled.p`
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
  font-size: 1.4rem;
  @media (min-width: 900px) {
    font-size: 1.6rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    background-color: black;
    height: 500px;
    opacity: 0;
    transition: opacity 0.8s ease;
    z-index: 1;
  }

  &:hover ${Character}, &:hover::before {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
function LeadershipBody() {
  const { isLoading, leadership } = useLeadership();

  if (isLoading) return;
  const leadershipByRank = leadership.reduce((acc, leader) => {
    if (!acc[leader.rank]) {
      acc[leader.rank] = [];
    }
    acc[leader.rank].push(leader);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(leadershipByRank).map((rank) => (
        <Container key={rank}>
          {leadershipByRank[rank].map(
            (leader) =>
              leader.title && (
                <StyledTitle key={leader.id}>
                  <PageHeading as='h2'>{leader.title}</PageHeading>
                </StyledTitle>
              )
          )}
          <Leadership>
            {leadershipByRank[rank].map(
              (leader) =>
                leader.rank !== null && (
                  <div key={leader.id}>
                    <ImageContainer>
                      <Image src={leader.image} alt='person in suit' />
                      <Character>{leader.character}</Character>
                    </ImageContainer>
                    <PageHeading as='h4'>{leader.name}</PageHeading>
                    <p>{leader.position}</p>
                  </div>
                )
            )}
          </Leadership>
        </Container>
      ))}
    </div>
  );
}

export default LeadershipBody;
