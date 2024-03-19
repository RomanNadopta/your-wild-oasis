import PageHeader from '../../ui/PageHeader';

import { useAboutUs } from './useAboutUs';

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
          <PageHeader.Title>{title}</PageHeader.Title>
        </PageHeader.TitleContainer>
      </PageHeader>
    </div>
  );
}

export default AboutUsHeader;
