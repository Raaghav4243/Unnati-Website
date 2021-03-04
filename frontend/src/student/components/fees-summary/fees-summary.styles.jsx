import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 4px solid pink; */
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
`;
