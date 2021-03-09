import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  min-height: 180px;
  border-radius: 12px;
  /* border: 1px solid black; */
  padding: 1rem;
  /* background-image: linear-gradient(to right, #1e8983, #0dc985); */
  background: #ffc222; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffc222,
    #f48c06
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffc222,
    #f48c06
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* box-shadow: 0px 1.5px 5px grey; */

  margin-right: 20px;
`;
export const CardTitle = styled.div`
  height: 50%;
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
  /* border: 1px solid blue; */
  padding-left: 1rem;
  /* word-wrap: break-word; */
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  width: 100%;
  -ms-word-break: break-word;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const ProgressWrapper = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: 1px solid green; */
`;

export const ProgressBarOuterWrapper = styled.div`
  height: 6px;
  border-radius: 3px;
  width: 100%;
  background-color: #202020;
`;

export const ProgressBarInnerWrapper = styled.div`
  height: 100%;
  border-radius: 3px;
  /* width: ${({ PercentageStatus }) =>
    PercentageStatus ? PercentageStatus : '20%'}; */
  width: ${({ PercentageStatus }) =>
    PercentageStatus ? PercentageStatus : '0%'};
  background-color: #fff;
`;

export const BottomContainer = styled.div`
  height: 30%;
  width: 100%;
  /* border: 1px solid brown; */
  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;
`;
export const Percentage = styled.div`
  height: 100%;
  width: 40%;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  width: 60%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ResumeButton = styled.div`
  height: 25px;
  width: 100px;
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
