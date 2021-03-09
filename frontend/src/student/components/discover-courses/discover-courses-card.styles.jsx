import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  min-height: 130px;
  border-radius: 12px;
  /* border: 1px solid black; */
  padding: 0.5rem 1rem;
  /* background-image: linear-gradient(to right, #1e8983, #0dc985); */
  background: #ff0099; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #493240,
    #ff0099
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #493240,
    #ff0099
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-right: 20px;
`;
export const CardTitle = styled.div`
  height: 75%;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
`;
export const LogoWrapper = styled.div`
  height: 100%;
  width: 30%;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  /* border: 1px solid blue; */
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  width: 100%;
  -ms-word-break: break-word;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const ButtonWrapper = styled.div`
  height: 25%;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ExploreButton = styled.div`
  height: 25px;
  width: 100%;
  cursor: pointer;
  /* width: 50%; */
  /* color: #11bb85; */
  background-color: #ffffff;
  border-radius: 10px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-color: white; */
`;
