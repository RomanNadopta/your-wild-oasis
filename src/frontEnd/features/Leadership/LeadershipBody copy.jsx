import styled from 'styled-components';
import Container from '../../ui/BodyContainer';
import PageHeading from '../../ui/PageHeading';
import { leadership } from '../../../data/data-leadership';
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
  const { leadershipTeam, directorsTeam } = leadership;

  return (
    <div>
      <Container>
        <StyledTitle>
          <PageHeading as='h2'>{leadershipTeam.title}</PageHeading>
        </StyledTitle>
        <Leadership>
          {leadershipTeam.team.map(
            (leader, i) =>
              leader && (
                <div key={i}>
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
      <Container>
        <StyledTitle>
          <PageHeading as='h2'>{directorsTeam.title}</PageHeading>
        </StyledTitle>
        <Leadership>
          {directorsTeam.team.map(
            (director, i) =>
              director && (
                <div key={i}>
                  <ImageContainer>
                    <Image src={director.image} alt='person in suit' />
                    <Character>{director.character}</Character>
                  </ImageContainer>
                  <PageHeading as='h4'>{director.name}</PageHeading>
                  <p>{director.position}</p>
                </div>
              )
          )}
        </Leadership>
      </Container>
    </div>
  );
}

export default LeadershipBody;
