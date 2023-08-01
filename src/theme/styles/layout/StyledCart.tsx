import { styled } from 'styled-components';

export const StyledCart = styled.div`
  .product__singleCart {
    height: 500px;
    max-width: 250px;
    border-radius: 24px;
    background: #fff;
    display: flex !important;
    width: 250px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }
  .product__like {
    display: flex;
    justify-content: space-between;
    width: 218px;
  }
  .product__image {
    width: 220px;
    height: 144px;
  }
  .product__raiting {
    display: flex;
    flex-direction: row;
  }
  .product__title {
    color: #212121;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
  }
  .product__price {
    text-align: left;
    color: var(--black, #212121);
    font-family: Lato;
    font-size: 26px;
    font-style: normal;
    font-weight: 900;
    line-height: 120%;
  }
`;
