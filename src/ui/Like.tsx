import { FC } from 'react';
import { useState } from 'react';
import { StyledLike } from '@/theme/styles/layout/StledLike';

export const Like: FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <StyledLike onClick={toggleLike}>
      <svg
        className={`icon ${isLiked ? 'active' : ''}`}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3333 11.816C29.3379 13.8677 28.5475 15.8413 27.128 17.3227C23.8733 20.6973 20.716 24.216 17.3413 27.4667C16.5667 28.2 15.3387 28.1733 14.5987 27.4067L4.87199 17.324C1.93199 14.276 1.93199 9.356 4.87199 6.30933C5.56685 5.58 6.40257 4.99936 7.32851 4.60263C8.25445 4.2059 9.25131 4.00133 10.2587 4.00133C11.266 4.00133 12.2629 4.2059 13.1888 4.60263C14.1147 4.99936 14.9505 5.58 15.6453 6.30933L16 6.67467L16.3533 6.30933C17.0496 5.58173 17.8856 5.00215 18.8112 4.60534C19.7368 4.20852 20.7329 4.00263 21.74 4C23.7667 4 25.704 4.832 27.1267 6.30933C28.5466 7.79046 29.3376 9.76415 29.3333 11.816Z"
          stroke="#212121"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </StyledLike>
  );
};