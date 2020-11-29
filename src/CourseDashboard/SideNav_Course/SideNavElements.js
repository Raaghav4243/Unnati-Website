import styled from "styled-components";

export const CourseSideNavContainer = styled.div`
  border: 1px solid;
  /* border-radius: 5px; */
  height: 100%;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 1vw 0.5vw;
  /* background-color: black; */
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.06);
  font-family: "Montserrat", sans-serif;
`;
export const CourseProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  height: 10%;
  width: 100%;
  border: 2px solid;
  border-radius: 2rem;
  padding: 0.25vw;
  /* background-color: white; */
`;

export const CourseImgWrap = styled.div`
  height: 100%;
  /* width: 100%; */
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 4px solid green; */
`;
export const CourseUserImage = styled.img`
  height: 100%;
  /* width: 100%; */
`;

export const CourseSideNavUserDetails = styled.div`
  height: 100%;
  width: 70%;
  /* border: 4px solid brown; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 1vw;

  @media screen and (max-width: 938px) {
    display: none;
  }
`;

export const CourseUserName = styled.div`
  font-size: 1.5vw;
`;

export const CourseCafeName = styled.div`
  font-size: 1vw;
`;

export const CourseSideNavTitleContainer = styled.div`
  height: 25%;
  width: 100%;
  /* border: 4px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.25vw;
`;

export const CourseSideNavTitle = styled.div``;

export const CourseTopicContainer = styled.div`
  height: 45%;
  width: 100%;
  /* border: 4px solid brown; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* justify-content: space-around; */
  /* font-size: 1.25vw;   */
`;
// export const CourseTopicListWrapper = styled.ul``;
export const CourseTopicHeader = styled.div`
  height: 15%;
  width: 100%;
  /* border: 4px solid green; */
  border-bottom: 2px solid grey;
  font-size: 1.25vw;

  /* align-self: flex-end; */
  /* justify-self: flex-start; */
`;

export const CourseTopic = styled.div`
  height: 15%;
  width: 100%;
  /* border: 4px solid blue; */
  font-size: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const CourseReturnBtn = styled.div`
  height: 20%;
  width: 100%;
  /* border: 4px solid purple; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25vw;
`;

export const CourseSideNavIconWrap = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
