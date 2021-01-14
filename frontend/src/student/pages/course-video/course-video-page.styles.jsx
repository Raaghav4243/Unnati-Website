import styled from 'styled-components';

//export const SideNav = styled.div`
//width: 20vw;
//height: 89vh;
//background: #ffffff;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  font-size: 2.5vw;
//  border: 4px solid black;
//  font-family: 'Montserrat', sans-serif;
//`

export const CourseVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* border: 4px solid blue; */
`;

export const CourseVideoPDFContainer = styled.div`
  /* padding-top: 6vh; */
  /* height: 75vh; */
  /* width: 80vw; */
  /* border: 4px solid red; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LectureTitleWrapper = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  display: flex;
  /* align-items: center; */
  /* padding-left: 1rem; */
  font-size: 20px;
  font-weight: 700;
  /* height: 50px; */
  padding-bottom: 10px;
  width: 150px;
  border-bottom: 2px solid grey;
  text-transform: uppercase;
`;

export const LectureVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  padding: 2rem;
`;

export const LectureNotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  padding: 2rem;
`;

export const LectureNotesTitleWrapper = styled.div`
  /* width: 100%; */
  /* border: 2px solid orange; */
  display: flex;
  /* align-items: center; */
  /* padding-left: 1rem; */
  font-size: 20px;
  font-weight: 700;
  /* height: 50px; */
  padding-bottom: 10px;
  width: 200px;
  border-bottom: 2px solid grey;
  text-transform: uppercase;
`;
