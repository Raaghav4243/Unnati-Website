import styled from 'styled-components';

export const TestimonialItem = styled.div`
  border: 1px solid #000000;
  width: 500px;
  height: 500px;
  margin: 1rem;
`;

export const UpperWrapper = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  /* width: 40%; */
  height: 100%;
  padding: 1rem;
`;

export const Profile = styled.img`
  border-radius: 40px;
  object-fit: cover;
`;

export const Position = styled.div`
  /* width: 60%; */
  height: 100%;
  padding: 1rem;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const Job = styled.h3`
  font-size: 15px;
  font-weight: 400;
`;

export const LowerWrapper = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.p`
  font-size: 10px;
  border-left: 1px solid black;
  padding: 1rem;
`;
