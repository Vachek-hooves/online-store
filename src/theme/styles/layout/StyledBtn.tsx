import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledBtn = styled.div`
  ${tw`w-[250px] `}
  width: 1600px;
  min-width: 370px;
  display: flex;
  .btn__style {
    background-color: #8083ff;
    display: flex;
    width: 355px;
    padding: 24px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 24px;
    text-align: left;
  }
`;
