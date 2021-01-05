import styled from 'styled-components';

export const SideNavContainer = styled.div`
  border: 1px solid black;
  width: 300px;
  height: calc(100vh - 75px);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 75px;
  transition: 350ms;
  z-index: 10;
  overflow: auto;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
