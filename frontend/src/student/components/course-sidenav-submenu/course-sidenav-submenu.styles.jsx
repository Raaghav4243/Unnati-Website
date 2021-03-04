import styled from 'styled-components';

export const TopicContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 15px;
  /* font-weight: 500; */
  /* width: 400px; */
  /* min-height: 100px; */
  padding: 1rem;
  &:hover {
    background: rgba(255, 194, 34, 0.45);
  }
`;
export const TopicIconWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TopicName = styled.div`
  /* border: 1px solid pink; */
  width: 175px;
  /* display: flex; */
  /* justify-content: center; */
  text-align: center;
  align-items: center;
`;
export const ArrowIconWrapper = styled.div`
  /* border: 1px solid blue; */
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  border-bottom: 1px solid black;
  /* width: 400px; */
  /* font-size: 15px; */
  /* padding: 1rem; */

  /* height: 50px; */
  /* &:hover {
    background-color: ${({ contentType }) =>
    contentType === 'LECTURE' ? 'red' : null};
    background-color: ${({ contentType }) =>
    contentType === 'ASSIGNMENT' ? 'blue' : null};
    background-color: ${({ contentType }) =>
    contentType === 'TEST' ? 'yellow' : null};
  } */
`;

export const ContentWrapper = styled.div`
  background: ${({ currentContent }) =>
    currentContent ? 'rgba(255, 194, 34, 0.15)' : 'transparent'};
  border-left: ${({ currentContent }) =>
    currentContent ? '0.25rem solid #ffc222' : null};
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 20px 20px 0px;
  /* background: transparent; */
  display: flex;
  /* padding-left: 20px; */
  /* padding: 0.5rem; */
  padding: ${({ currentContent }) =>
    currentContent
      ? '0.5rem 0.5rem 0.5rem 1.75rem'
      : '0.5rem 0.5rem 0.5rem 2rem'};
  font-size: 14px;

  justify-content: space-between;
  &:hover {
    background: rgba(255, 194, 34, 0.45);
  }
`;

export const ContentIconWrapper = styled.div`
  /* border: 1px solid white; */
  /* width: 50px; */
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentName = styled.div`
  /* border: 1px solid red; */

  width: 150px;
  text-align: center;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;
export const TickIconWrapper = styled.div`
  /* border: 1px solid blue; */

  width: 45px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
`;
