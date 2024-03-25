import MainHeader from '../../ui/MainHeader';

function HomePageHeader() {
  // const image = `../src/data/cabins/home1.jpg`;
  const image = `https://pazseeiqabcnmstjnbbi.supabase.co/storage/v1/object/public/cabin-images/home.jpg`;

  return (
    <MainHeader>
      <MainHeader.Image src={image} />
      <MainHeader.Title>Ready for a vacation?</MainHeader.Title>
    </MainHeader>
  );
}

export default HomePageHeader;
