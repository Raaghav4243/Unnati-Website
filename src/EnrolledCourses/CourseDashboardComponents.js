import React from "react";
import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 65px);
  /* height: 1000px; */
`;

export const SideNavTemp = styled.div`
  width: 18vw;
  /* min-width: 250px; */
  border: 4px solid orange;
  height: 100%;
`;

export const Dashboard = styled.div`
  width: 82vw;
  /* padding: 1vh 1vw; */
  /* height: 1000px; */
  height: 100%;
  /* border: 4px solid blue; */
`;

export const DashboardPageHeadingContainer = styled.div`
  /* font-size: 2rem; */
  font-weight: 600;
  text-transform: uppercase;
  /* border: 4px solid green; */
  height: 10%;
  display: flex;
  align-items: center;
  padding-left: 1vw;
`;

export const CourseDashboardHeading = styled.div`
  padding: 0.5vw 1vw 0.5vw 0.5vw;
  font-size: calc(15px + 1vw);
`;

export const DashboardElements = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* border: 4px solid black; */
  /* padding: 2vh 0 0 0; */
  height: 90%;
`;

export const DashboardLeft = styled.div`
  /* border: 4px solid pink; */
  display: flex;
  flex-direction: column;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  width: 40%;
  /* padding-bottom: 4vh; */
`;

export const CourseProgressWrapper = styled.div`
  /* width: 100%; */
  /* width: 700px; */
  height: 60%;
  width: 100%;
  /* border: 4px solid black; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export const ProgressBarContainer = styled.div`
  height: calc(70px + 20vw);
  width: calc(70px + 20vw);
  /* border: solid 4px brown; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProgressBarWrapper = styled.div`
  height: 85%;
  width: 85%;
  /* border: 4px solid red; */
`;
export const ProgressBarTitle = styled.div`
  height: 15%;
  width: 85%;
  /* border: 4px solid blue; */
  font-size: 2vw;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DoubtWrapper = styled.div`
  /* width: 20vw; */
  height: 30%;
  width: 100%;
  /* border: 4px solid green; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export const DoubtContainer = styled.div`
  display: flex;
  height: 30%;
  width: calc(70px + 20vw);
  border: 1px solid;
  border-radius: 30px;
  font-size: calc(5px + 1vw);
  align-items: center;
  justify-content: center;
`;

export const DashboardRight = styled.div`
  /* border: 4px solid cyan; */
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem 0 0;
  /* padding-bottom: vh; */
`;

export const UpNextContainer = styled.div`
  border: 1px solid black;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1vh;
`;

export const UpNextLogo = styled.img`
  height: calc(20px + 1vw);
  /* border: 1px solid red; */
`;

export const ButtonWrapper = styled.div`
  height: 35%;
  /* border: 4px solid brown; */
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 1vw;
`;

export const ButtonDetails = styled.div`
  width: auto;
  /* border: 1px solid black; */
  padding: 0.5vw 1vw 0.5vw 0.5vw;
  font-size: calc(5px + 1vw);
`;

export const TopicWrapper = styled.div`
  height: 45%;
  width: 100%;
  /* border: 4px solid skyblue; */
  display: flex;
  align-items: center;
  padding-left: 1vw;
`;

export const TopicType = styled.div`
  width: auto;
  /* border: 1px solid black; */
  border-right: 1px solid black;
  padding: 0.5vw 1vw 0.5vw 0.5vw;
  font-size: calc(5px + 1vw);
`;
export const TopicDetails = styled.div`
  width: auto;
  /* border: 4px solid blue; */
  padding: 0.5vw 0.5vw 0.5vw 1vw;
  font-size: calc(5px + 1vw);
`;

export const PerformanceContainer = styled.div`
  border: 1px solid;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PerformanceBoxHeading = styled.div`
  height: 15%;
  width: 100%;
  /* border: 4px solid orchid; */
  padding-left: 1vw;
  display: flex;
  align-items: center;
`;

export const PerformanceTitle = styled.p`
  /* font-size: 1.5rem; */
  font-weight: 600;
  /* color: #7b7b7b; */
  text-transform: uppercase;
  padding: 0.5vw 1vw 0.5vw 0.5vw;
  font-size: calc(10px + 1vw);
`;

export const PerformanceProgressWrapper = styled.div`
  height: 65%;
  width: 100%;
  /* border: 4px solid green; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FeatureProgressBarContainer = styled.div`
  height: calc(10px + 15vw);
  width: calc(10px + 15vw);
  /* border: solid 4px brown; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FeatureProgressBarWrapper = styled.div`
  height: 85%;
  width: 85%;
  /* border: 4px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FeatureProgressBarTitle = styled.div`
  height: 15%;
  width: 85%;
  /* border: 4px solid blue; */
  font-size: calc(1px + 1vw);
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
`;

export const CourseGradeContainer = styled.div`
  height: 20%;
  width: 100%;
  /* border: 4px solid blue; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CourseGradeTitle = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* border: 4px solid red; */
  font-size: 1.5vw;
`;

export const GradeBox = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 4px solid green; */
  font-size: calc(10px + 1.5vw);
  color: red;
`;

export const Grade = styled.p``;
