import styled from 'styled-components';

export const SideNavContainer = styled.div`
  /* background-color: #202020; */
  /* border: 4px solid red; */
  padding: 0.75rem;
  width: 300px;
  min-height: calc(100vh - 75px - 66px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(75px + 66px);
  transition: 350ms;
  z-index: 10;
  overflow: auto;
  left: 0;

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    left: -100%;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  /* border: 4px solid blue; */
  width: 100%;
  /* max-width: 800px; */
  border-top: 8px solid #f48c06;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 170px;
  /* border: 0.5px solid #bababa; */

  border-right: 1px solid #bababa;
  border-bottom: 1px solid #bababa;
  border-left: 1px solid #bababa;
  border-radius: 0px 0px 6px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* padding: 1.5rem; */
  background: #fff;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const DetailsContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  max-width: 250px;
  min-height: ${({ small }) => (small ? '70px' : '110px')};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 0.5rem;
  align-items: center;
  background-color: #ffffff;

  /* box-shadow: 0px 0px 30px 3px rgba(0, 0, 0, 0.25); */
  /* border: 2px solid orange; */
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;
export const Detail = styled.div`
  /* border: 2px solid orange; */
  width: 100%;
  font-weight: ${({ heading }) => (heading ? '500' : null)};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  /* font-family: 'Montserrat', sans-serif; */
`;

export const InstructionsWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #bababa;
  border-radius: 6px;
  padding: 0.75rem;
`;
export const Title = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 10px;
`;
export const Instructions = styled.div``;
