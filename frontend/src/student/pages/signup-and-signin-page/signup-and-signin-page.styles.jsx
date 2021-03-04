import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  /* width: 850px; */
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  /* margin: 100px auto; */
  /* border: 4px solid red; */
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 4px solid red; */
  justify-content: space-around;

  display: flex;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SignInWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 550px;
  margin: 20px 0;

  /* height: 200px; */
  display: flex;
  flex-direction: column;
  border: 1px solid #a3a3a3;
  border-radius: 42px;
  padding: 1.5rem;
  /* justify-content: center; */
  /* align-items: center; */
  /* margin-left: 55px; */
  /* border: 4px solid green; */
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
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

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  /* border: 4px solid blue; */
  border: 1px solid #a3a3a3;
  border-radius: 42px;
  padding: 2rem 1.5rem;
  margin: 20px 0;
`;

export const MainTitle = styled.div`
  width: 100%;
  /* height: 25px; */
  /* border: 2px solid red; */
  font-size: 25px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  line-height: 23.16px;
  /* margin-bottom: 10px; */
`;
