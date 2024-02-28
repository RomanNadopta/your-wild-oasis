import MainHeader from '../../ui/MainHeader';

function HomePageHeader() {
  const image = `../src/data/cabins/home.jpg`;
  return (
    <MainHeader>
      <MainHeader.Image src={image} />
      <MainHeader.Title>Ready for vacation?</MainHeader.Title>
    </MainHeader>
  );
}

export default HomePageHeader;
