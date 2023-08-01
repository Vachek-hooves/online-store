import { StyledCart } from '@/theme/styles/layout/StyledCart';
interface CartProps {
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

export const Cart = ({
  saleComponent,
  like,
  raiting,
  buyButton,
  cartData,
}: CartProps) => {
  console.log(cartData);
  return (
    <StyledCart>
      {cartData?.map((item, index) => (
        <div className="product__singleCart" key={index}>
          <div className="product__like">
            <div>{saleComponent}</div>
            <div>{like}</div>
          </div>
          <div className="product__image">
            <img src={item.img} alt="product img"></img>
          </div>
          <div className="product__raiting">
            {raiting}
            {raiting}
            {raiting}
            {raiting}
            {raiting}
          </div>
          <div className="product__title">
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
          <div className="product__price">$ {item.price}</div>
          <div>{buyButton}</div>
        </div>
      ))}
    </StyledCart>
  );
};
