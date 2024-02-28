import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 6rem;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1200px) {
    width: 1000px;
    min-height: 100vh;
  }

  .slick-slide > div {
    margin: 0;
  }

  .slick-dots {
    position: static;
    text-align: center;
  }

  .slick-dots li {
    width: 30%;

    @media (min-width: 1200px) {
      width: 323px;
    }
    opacity: 1;
    margin: 5px;

    &.slick-active {
      opacity: 0.5;
    }
  }

  .slick-active li {
    background-color: blue;
  }
`;
const Img = styled.img`
  object-fit: cover;
  filter: none;
  width: 100%;
  height: 240px;

  @media (min-width: 400px) {
    height: 360px;
  }

  @media (min-width: 900px) {
    height: 600px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

const PagingImg = styled.img`
  width: 100%;
  height: 60px;

  @media (min-width: 600px) {
    height: 120px;
  }

  @media (min-width: 900px) {
    width: 380px;
    height: 200px;
  }
  object-fit: cover;
  filter: none;
`;
const ImageItem = styled.div`
  cursor: grab;
`;

function CarouselSlide({ data }) {
  const settings = {
    customPaging: function (i) {
      return <PagingImg key={i} src={data[i]} alt='winter' />;
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div className='slider-container'>
        <Slider {...settings}>
          {data.map(
            (image, index) =>
              image && (
                <ImageItem key={index}>
                  <Img src={image} alt='winter' />
                </ImageItem>
              )
          )}
        </Slider>
      </div>
    </Wrapper>
  );
}

export default CarouselSlide;
