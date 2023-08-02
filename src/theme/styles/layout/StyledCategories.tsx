import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCategories = styled.div`
  ${tw`h-[624px] grid gap-5 grid-cols-3 auto-rows-fr justify-center`}
  transition: height 2s easy-out;

  @media (max-width: 1280px) {
    ${tw`h-[960px] grid-cols-2`}
  }
  @media (max-width: 720px) {
    ${tw`h-[520px]`}
  }

  .category__container {
    ${tw`max-w-full`}
  }
  .category__img {
    ${tw`max-w-full h-auto`}
  }

  .category__link {
    ${tw`relative`}
  }

  .category__header {
    ${tw`absolute bottom-8 not-italic font-medium leading-10 pl-8`}
    font-size: 45px;
    font-family: Lato;
    transition: font-size 0.8s ease-out;
    color: #fbfbfb;
  }

  @media (max-width: 1420px) {
    .category__header {
      ${tw`pl-3.5 bottom-3`}
      font-size: 26px;
    }
  }
`;
