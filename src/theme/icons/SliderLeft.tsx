import { IIconClassProps } from '@/types';
import { FC } from 'react';
export const SliderLeft: FC<IIconClassProps> = ({ iconClass }) => {
  const combainClass = `icon-${iconClass}`;
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={combainClass}
    >
      <path
        d="M18.6665 28.0001H37.3332M37.3332 28.0001L29.1665 19.8334M37.3332 28.0001L29.1665 36.1667M27.9998 51.3334C40.8868 51.3334 51.3332 40.8871 51.3332 28.0001C51.3332 15.1131 40.8868 4.66675 27.9998 4.66675C15.1128 4.66675 4.6665 15.1131 4.6665 28.0001C4.6665 40.8871 15.1128 51.3334 27.9998 51.3334Z"
        stroke="#212121"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
