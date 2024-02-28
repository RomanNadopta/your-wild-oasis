import { useParams } from 'react-router-dom';
import PageHeader from '../../ui/PageHeader';

import { decodeFromUrl } from '../../../utils/helpers';
import { useExplores } from './useExplores';
import Spinner from '../../../admin/ui/Spinner';

function ExplorePageHeader() {
  const { id } = useParams();

  const originalTitle = decodeFromUrl(id);
  const { isLoading, explores } = useExplores();
  if (isLoading) return <Spinner />;

  let explore;

  explore = explores.find((item) => item.title === originalTitle);
  const { headerTitle, headerSubtitle, mainImage, otherImages } = explore;
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
