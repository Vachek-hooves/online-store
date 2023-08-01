import { FC } from 'react';
import { StyledHome } from '@/theme/styles/layout/StyledHome';
import { StyledHomeContent } from '@/theme/styles/layout/StyledHomeContent';
import { Categories } from './Categories';
import { Sale } from '@/ui/Sale';
import { bikesData } from '@/mock-data/products';
import { Like } from '@/ui/Like';
import { Raiting } from '@/ui/Raiting';
import { Buy } from '@/ui/Buy';
import {
  StyledHeroFrame,
  StyledButton,
  StyledHero,
} from '@/theme/styles/layout/StyledHomeBanner';
import { SlickSlider } from '@/ui/SlickSlider';

export const HomeComponent: FC = () => {
  return (
    <StyledHome>
      <StyledHero>
        <StyledHeroFrame>
          <h2>Faster on wheels</h2>
          <p>Buy new wheels for yourself and move with pleasure</p>
          <StyledButton>
            <p>Button</p>
          </StyledButton>
        </StyledHeroFrame>
      </StyledHero>
      <StyledHomeContent>
        <Categories />
        <SlickSlider
          headerName={'Best sellers'}
          cartData={bikesData}
          saleComponent={<Sale />}
          like={<Like />}
          raiting={<Raiting />}
          buyButton={<Buy />}
        />
        <SlickSlider
          headerName={'Skateboards'}
          cartData={bikesData}
          like={<Like />}
          raiting={<Raiting />}
          buyButton={<Buy />}
        />
        <SlickSlider
          headerName={'Bicucle'}
          cartData={bikesData}
          like={<Like />}
          raiting={<Raiting />}
          buyButton={<Buy />}
        />
      </StyledHomeContent>
    </StyledHome>
  );
};
