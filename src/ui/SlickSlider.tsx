import { StyledSlickSlider } from '@/theme/styles/layout/StyledSlickSlider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Cart } from './Cart';

interface SlickSliderProps {
  headerName?:string;
  saleComponent?: React.ReactNode;
  like?: React.ReactNode;
  raiting?: React.ReactNode;
  buyButton?: React.ReactNode;
  cartData?: {
    title: string;
    img: string;
    description: string;
    price: number;
  }[];
}

export const SlickSlider = ({
  headerName,
  saleComponent,
  like,
  raiting,
  buyButton,
  cartData,
}: SlickSliderProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlickSlider>
      <div className="slider__header">
        <h2>{headerName}</h2>
      </div>
      <Slider {...settings}>
        {cartData?.map((item, index) => (
          <Cart
            saleComponent={saleComponent}
            like={like}
            raiting={raiting}
            buyButton={buyButton}
            cartData={[item]}
            key={index}
          />
        ))}
      </Slider>
    </StyledSlickSlider>
  );
};
