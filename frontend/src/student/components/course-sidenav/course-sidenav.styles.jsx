import styled from 'styled-components';

export const SideNavContainer = styled.div`
  background-color: #202020;
  width: 300px;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  position: fixed;
  top: 75px;
  transition: 350ms;
  z-index: 10;
  overflow: auto;
  left: 0;
  color: #ffffff;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    left: -100%;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
