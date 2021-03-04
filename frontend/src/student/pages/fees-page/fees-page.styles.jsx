import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* border: 4px solid black; */
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 4px solid red; */
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const PaymentHistoryWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  /* border: 4px solid violet; */
`;

export const Title = styled.div`
  width: 100%;
  height: 25px;
  /* border: 2px solid red; */
  font-size: 18px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 10px;
`;

export const BalanceWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin-left: 55px;
  /* border: 4px solid blue; */
  @media screen and (max-width: 1200px) {
    /* margin-left: 0; */
    margin: 20px 0 20px 0;
  }
`;
