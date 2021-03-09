import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  min-height: ${({ small }) => (small ? '70px' : '110px')};
  /* min-height: ${({ small }) => (small ? '70px' : null)}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  background-color: #ffffff;
  /* box-shadow: 0px 0px 30px 3px rgba(0, 0, 0, 0.25); */
  /* border: 2px solid orange; */
  /* margin-bottom: 10px; */
`;
export const LogoWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-height: 50px; */
`;
export const NameWrapper = styled.p`
  width: 65%;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  -ms-word-break: break-word;
  word-break: break-word;
  white-space: pre-wrap;

  /* justify-content: center; */
  /* align-items: center; */
`;
