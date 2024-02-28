import styled from 'styled-components';
import PageHeader from '../../ui/PageHeader';

const LeadershipBoard = styled.div`
  background-color: #040455;
  line-height: 2;
  @media (min-width: 1200px) {
    padding: 2rem 0 8rem 0;
  }
`;

function LeadershipHeader() {
  return (
    <PageHeader>
      <PageHeader.TitleContainer>
        <LeadershipBoard>
          <PageHeader.Title>
            Leadership team and board of directors
          </PageHeader.Title>
        </LeadershipBoard>
      </PageHeader.TitleContainer>
    </PageHeader>
  );
}

export default LeadershipHeader;
