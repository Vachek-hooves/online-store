import { styled } from 'styled-components';
import tw from 'twin.macro';
const ArrowRight = `<svg
width="56"
height="56"
viewBox="0 0 56 56"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M18.6665 28.0001H37.3332M37.3332 28.0001L29.1665 19.8334M37.3332 28.0001L29.1665 36.1667M27.9998 51.3334C40.8868 51.3334 51.3332 40.8871 51.3332 28.0001C51.3332 15.1131 40.8868 4.66675 27.9998 4.66675C15.1128 4.66675 4.6665 15.1131 4.6665 28.0001C4.6665 40.8871 15.1128 51.3334 27.9998 51.3334Z"
  stroke="#212121"
  strokeWidth="3.5"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
</svg>`;
const ArrowLeft = `<svg
width="56"
height="56"
viewBox="0 0 56 56"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M18.6665 28.0001H37.3332M37.3332 28.0001L29.1665 19.8334M37.3332 28.0001L29.1665 36.1667M27.9998 51.3334C40.8868 51.3334 51.3332 40.8871 51.3332 28.0001C51.3332 15.1131 40.8868 4.66675 27.9998 4.66675C15.1128 4.66675 4.6665 15.1131 4.6665 28.0001C4.6665 40.8871 15.1128 51.3334 27.9998 51.3334Z"
  stroke="#212121"
  strokeWidth="3.5"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
</svg>`;

export const StyledSlickSlider = styled.div`
${tw`max-w-[1620px] h-[572px] flex flex-col justify-between`}

  .slider__header {
    ${tw`text-left text-[34px] not-italic font-black leading-10`}
    font-family: Lato;
    color: var(--black, #212121);
  }

  .slick-list {
    ${tw`max-w-[1620px]`}
    transition: max-width 0.3s ease-out;
  }
  @media (max-width: 1680px) {
    .slick-list {
      ${tw`max-w-[1420px]`}
    }
  }
  @media (max-width: 1420px) {
    .slick-list {
      ${tw`max-w-[1048px]`}
      max-width: 1048px;
    }
  }
  @media (max-width: 1280px) {
    .slick-list {
      ${tw`max-w-[900px]`}
    }
  }
  @media (max-width: 980px) {
    .slick-list {
      ${tw`max-w-[600px]`}
    }
  }
  .slick-slide,
  .slick-active,
  .slick-current {
    width: 250px !important;
  }
  .slick-track {
    ${tw``}
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  .slick-prev {
    transform: rotate(180deg);
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
    transition: display 0.8s easy-out;
  }
  @media (max-width: 1280px) {
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }

  .slick-prev:before {
    content: url('data:image/svg+xml;utf8,${encodeURIComponent(ArrowLeft)}');
    transform: rotate(180deg);
  }
  .slick-next:before {
    content: url('data:image/svg+xml;utf8,${encodeURIComponent(ArrowRight)}');
  }
`;
