import styled from 'styled-components';

export const CourseOverviewHeaderContainer = styled.div`
  min-height: 324px;
  width: 100%;
  /* padding: 0.5rem; */
  /* border: 4px solid yellow; */
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const CourseOverviewHeaderWrapper = styled.div`
  /* border: 4px solid pink; */
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const CourseNameWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;
  font-size: 40px;
  line-height: 49px;
  font-weight: 500;
  color: #fff;
  /* border: 2px solid brown; */
`;
export const CourseFeesWrapper = styled.div`
  padding: 0.5rem;
  color: #17de9f;
  font-size: 24px;
  width: 100%;
  line-height: 29px;
  font-weight: 600;
  /* border: 2px solid brown; */
`;

export const CourseAvailableAtWrapper = styled.div`
  /* border: 4px solid red; */
  padding: 0.5rem;
  font-size: 18px;
  line-height: 22px;

  /* width: 100px; */
`;

export const AvailableAtTitle = styled.span`
  color: white;
  font-weight: 600;
`;
