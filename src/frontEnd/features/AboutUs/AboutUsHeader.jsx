import PageHeader from '../../ui/PageHeader';
import { aboutUs } from '../../../data/data-about-us';
import styled from 'styled-components';
import { useAboutUs } from './useAboutUs';

const Title = styled.div`
  position: relative;
  top: 30%;
  text-align: center;
`;
function AboutUsHeader() {
  const { isLoading, aboutUs } = useAboutUs();
  if (isLoading) return;
  const { title, image, collageOfImages } = aboutUs.find(
    (header) => header.type === 'header'
  );

  return (
    <div>
      <PageHeader>
        <PageHeader.CoverImages image={image} images={collageOfImages} />
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
