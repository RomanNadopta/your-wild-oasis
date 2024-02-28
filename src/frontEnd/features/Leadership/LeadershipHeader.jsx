import styled from 'styled-components';
import PageHeader from '../../ui/PageHeader';
import { useLeadership } from './useLeadership';

const LeadershipBoard = styled.div`
  background-color: #040455;
  line-height: 2;
  @media (min-width: 1200px) {
    padding: 2rem 0 8rem 0;
  }
`;

function LeadershipHeader() {
  const { isLoading, leadership } = useLeadership();

  if (isLoading) return;
  const headerText = leadership.find((header) => header.header);
  return (
    <PageHeader>
      <PageHeader.TitleContainer>
        <LeadershipBoard>
          <PageHeader.Title>{headerText.header}</PageHeader.Title>
        </LeadershipBoard>
      </PageHeader.TitleContainer>
    </PageHeader>
  );
}

export default LeadershipHeader;
