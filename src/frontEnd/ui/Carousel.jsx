import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import Spinner from '../../admin/ui/Spinner';
import { HiMiniChevronRight } from 'react-icons/hi2';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { encodeForUrl } from '../../utils/helpers';

const StyledCarousel = styled.section`
  padding: 0 3rem;
  padding-top: 3rem;
  font-family: 'Libre Baskerville';

  a {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-blue-700);
    &:hover {
      text-decoration: underline;
    }

    svg {
      vertical-align: middle;
    }
  }
  @media (min-width: 1200px) {
    padding: 0rem;
    padding-top: 10rem;
    padding-bottom: 10rem;

    a {
      font-size: 1.8rem;
    }
  }
`;

const StyledTitle = styled.h2`
  text-align: center;
  /* padding-bottom: 2rem; */
  hyphens: none;
  @media (min-width: 900px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-weight: 300;
    font-size: 6rem;
    width: 52%;
  }
`;

const Img = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 200px;
  filter: none;
`;

const StyledSubtitle = styled.h4`
  text-align: center;
  hyphens: none;
  @media (min-width: 900px) {
    text-align: left;
  }
  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

const StyledCabinTitle = styled.h4`
  padding-top: 2rem;
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const StyledDescription = styled.p`
  /* font-style: italic; */
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  padding-top: 2rem;
  @media (min-width: 1200px) {
    padding-top: 4rem;
  }
`;

const PrevNextArrow = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 140px;
    ${({ direction }) => leftRightArrow[direction]}
    color: black;
    font-size: 50px;

    svg {
      color: black;
      font-size: 50px;
      &:hover {
        transition: all 0.5s ease;
        opacity: 0.6;
      }
    }
  }
`;

PrevNextArrow.defaultProps = {
  direction: 'leftArr',
};

const leftRightArrow = {
  leftArr: css`
    left: -50px;
  `,
  rightArr: css`
    right: -50px;
  `,
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <PrevNextArrow direction='rightArr'>
      <MdOutlineKeyboardArrowRight onClick={onClick} cursor='pointer' />
    </PrevNextArrow>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <PrevNextArrow direction='leftArr'>
      <MdOutlineKeyboardArrowLeft onClick={onClick} cursor='pointer' />
    </PrevNextArrow>
  );
}

function Carousel({ children }) {
  return <StyledCarousel>{children}</StyledCarousel>;
}

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

function Subtitle({ children }) {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}

function Footer({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

function Body({ data, isLoading }) {
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  if (isLoading) return <Spinner />;

  return (
    <Wrapper>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id || item.name}>
            <Img
              src={item.image || item.images[0]}
              alt={item.name}
              onClick={() =>
                navigate(
                  item.location
                    ? `/${encodeForUrl(item.location)}/${encodeForUrl(
                        item.name
                      )}`
                    : `/${encodeForUrl(item.name)}`
                )
              }
            />
            <StyledCabinTitle>{item.name}</StyledCabinTitle>
            <StyledDescription>
              {item.description[0].paragraph ||
                `${item.description.split('.')[0]}.`}
            </StyledDescription>

            <Link
              to={
                item.location
                  ? `/${encodeForUrl(item.location)}/${encodeForUrl(item.name)}`
                  : `/${encodeForUrl(item.name)}`
              }
            >
              Explore rental <HiMiniChevronRight />
            </Link>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
}

Carousel.Title = Title;
Carousel.Subtitle = Subtitle;
Carousel.Body = Body;
Carousel.Footer = Footer;

export default Carousel;
