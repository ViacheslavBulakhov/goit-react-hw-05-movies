import styled from 'styled-components';

export const CastWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;
export const CastItemWrap = styled.li`
  max-width: 250px;
  box-shadow: inset 5px 4px 15px -1px rgba(0, 0, 0, 0.39);
  & > div {
    padding-left: 20px;
  }
`;
