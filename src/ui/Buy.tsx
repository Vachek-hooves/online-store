import { FC } from 'react';
import { StyledBuy } from '@/theme/styles/layout/StyledBuy';
import { Button } from '@mui/material';

export const Buy: FC = () => {
  return (
    <StyledBuy>
      <Button
        className="btn"
        onClick={() => {
          console.log('add to busket function');
        }}
        type="submit"
        variant="contained"
        color="success"
      >
        Buy
      </Button>
    </StyledBuy>
  );
};
