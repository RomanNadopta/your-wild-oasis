import { useParams } from 'react-router-dom';
import MainHeader from '../../ui/MainHeader';
import { decodeFromUrl } from '../../../utils/helpers';
import { cities } from '../../../data/data-explores';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  img {
    max-height: 400px;
    object-position: 0 70%;

    @media (min-width: 1200px) {
      max-height: 600px;
    }
  }
`;

function HousesHeader() {
  const { location } = useParams();

  const originalTitle = decodeFromUrl(location);

  const { secondImage } = cities.find((city) => city.name === originalTitle);

  return (
    <MainHeader>
      <ImageWrapper>
        <MainHeader.Image src={secondImage} />
      </ImageWrapper>
    </MainHeader>
  );
}

export default HousesHeader;
