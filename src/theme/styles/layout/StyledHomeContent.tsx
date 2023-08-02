import { styled } from 'styled-components';
import tw from 'twin.macro';
export const StyledHomeContent = styled.div`

${tw`h-[2676px] m-12 flex flex-col text-center gap-[72px] items-center`}
background: #f8faff;

  h1 {
    font-size: 50px;
    color: #fff;
  }
  @media (max-width: 980px) {
    gap:22px;
  }
`;
