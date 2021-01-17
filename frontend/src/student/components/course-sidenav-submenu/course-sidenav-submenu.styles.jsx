import styled from 'styled-components';

export const TopicContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  /* width: 400px; */
  height: 50px;
  &:hover {
    background: rgba(255, 194, 34, 0.45);
  }
`;
export const TopicIconWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TopicName = styled.div`
  /* border: 1px solid pink; */
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ArrowIconWrapper = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  /* width: 400px; */
  height: 50px;
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
  width: 95%;
  border-radius: 0px 20px 20px 0px;
  background: transparent;
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
  &:hover {
    background: rgba(255, 194, 34, 0.45);
  }
`;

export const ContentIconWrapper = styled.div`
  /* border: 1px solid white; */
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentName = styled.div`
  /* border: 1px solid white; */

  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TickIconWrapper = styled.div`
  /* border: 1px solid white; */

  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
