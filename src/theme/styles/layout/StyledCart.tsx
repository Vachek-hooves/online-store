import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCart = styled.div`
  .product__singleCart {
    ${tw`h-[500px] w-[250px] rounded-3xl p-4  flex flex-col justify-center items-start gap-5`}
    background: #fff;
  }
  .product__like {
    ${tw` w-[218px] flex justify-between`}
  }
  .product__image {
    ${tw`h-[144px] w-[220px]`}
  }
  .product__raiting {
    ${tw`flex flex-row`}
  }
  .product__title {
    ${tw`text-xl not-italic font-normal text-left`}
    font-family: Lato;
    color: #212121;
  }
  .product__price {
    ${tw`text-left font-normal font-black text-lg`}
    font-weight: 900;
    font-family: Lato;
    color: var(--black, #212121);
  }
`;
