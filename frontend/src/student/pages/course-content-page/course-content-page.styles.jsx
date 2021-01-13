import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 90px;
  margin-left: 320px;
  margin-right: 20px;
  display: flex;
  /* flex-wrap: wrap; */
  /* overflow: s; */
  min-height: 500px;
  /* height: calc(100vh - 90px); */
  /* height: calc(100vh-75px); */
  width: calc(100% - 340px);
  /* border: 4px solid red; */

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;
