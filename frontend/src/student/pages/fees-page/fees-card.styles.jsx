import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  margin: 2px;
  /* border: 1px solid blue; */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* background-color: #2475b0; */
  background: #f3f3f3;
  color: #ffffff;
  /* box-shadow: 0px 1.5px 1.2px grey; */
`;

export const Prompt = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  color: #000;
  font-family: 'Montserrat', sans-serif;
`;
export const Amount = styled.div`
  font-size: 32px;
  color: ${({ amountColor }) => (amountColor ? `${amountColor}` : '#000000')};

  /* font-family: 'Montserrat', sans-serif; */
`;
