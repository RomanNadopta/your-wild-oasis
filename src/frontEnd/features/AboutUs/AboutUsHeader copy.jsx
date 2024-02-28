import PageHeader from '../../ui/PageHeader';
import { aboutUs } from '../../../data/data-about-us';
import styled from 'styled-components';

const Title = styled.div`
  position: relative;
  top: 30%;
  text-align: center;
`;
function AboutUsHeader() {
  const { title, image, otherImages } = aboutUs.header;
  return (
    <div>
      <PageHeader>
        <PageHeader.CoverImages image={image} images={otherImages} />
        <PageHeader.TitleContainer>
          <Title>
            <PageHeader.Title>{title}</PageHeader.Title>
          </Title>
        </PageHeader.TitleContainer>
      </PageHeader>
    </div>
  );
}

export default AboutUsHeader;
