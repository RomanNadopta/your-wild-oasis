import { useParams } from 'react-router-dom';
import PageHeader from '../../ui/PageHeader';
import { explores } from '../../../data/data-explores';
import { decodeFromUrl } from '../../../utils/helpers';

function ExplorePageHeader() {
  const { id } = useParams();

  const originalTitle = decodeFromUrl(id);

  let explore;

  explore = explores.find((item) => item.title === originalTitle);
  const { headerTitle, headerSubtitle, mainImage, otherImages } =
    explore.header;
  return (
    <PageHeader>
      <PageHeader.CoverImages image={mainImage} images={otherImages} />
      <PageHeader.TitleContainer>
        <PageHeader.Title>{headerTitle}</PageHeader.Title>
        <PageHeader.Subtitle>{headerSubtitle}</PageHeader.Subtitle>
      </PageHeader.TitleContainer>
    </PageHeader>
  );
}

export default ExplorePageHeader;
