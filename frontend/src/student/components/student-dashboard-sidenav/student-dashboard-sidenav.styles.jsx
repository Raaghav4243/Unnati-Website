import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* border: 1px solid black; */
  /* background-color: #c4c4c4; */
  background-color: #202020;
  color: #fff;
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

  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
    /* padding: 0 10px; */
    left: -100%;
  }
`;

export const PictureContainer = styled.div`
  /* position: relative; */
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid red; */
`;
export const UserPrompt = styled.div`
  margin-top: 20px;
  font-size: 1.75rem;
`;

export const Profile = styled.div`
  /* position: relative; */
  width: 100%;
  height: 30%;
  /* border-bottom: 1px solid red; */
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const ProfileTitle = styled.div`
  width: 50%;
  border-bottom: 1px solid #868686;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.25rem;
  /* color: #868686; */
`;

export const SidenavLink = styled(Link)`
  color: #fff;
  /* border: 1px solid blue; */
  padding-left: 10px;
  margin-bottom: 5px;
  justify-content: flex-start;
`;

export const SignOutButton = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  padding-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Dashboard = styled.div`
  /* position: relative; */
  width: 100%;
  height: 30%;
  /* border-bottom: 1px solid red; */
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const DashboardTitle = styled.div`
  width: 50%;
  border-bottom: 1px solid #868686;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.25rem;
  /* color: #868686; */
`;
