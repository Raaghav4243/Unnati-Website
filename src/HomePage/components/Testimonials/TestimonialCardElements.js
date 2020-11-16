import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid black;
  height: 450px;
  width: 450px;
  margin-left: 1rem;
  margin-right: 7rem;
  opacity: 50%;
  transition: 0.3s;
  &:hover {
    opacity: 100%;
    transition: 0.3s;
    /* box-shadow: ; */
  }
`;

export const CardUpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
`;

export const ImageWrapper = styled.div`
  width: 45%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Image = styled.img`
  height: 125px;
  width: 125px;
  border-radius: 80px;
  object-fit: cover;
  object-position: center;
  /* border: 1px solid blue; */
`;

export const JobWrapper = styled.div`
  width: 55%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-left: 1rem;
  flex-direction: column;
`;

export const NameTag = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  /* width: 100%; */
`;

export const JobTag = styled.h3`
  font-size: 1.25rem;
  font-weight: lighter;
  text-align: left;
`;

export const CardLower = styled.div`
  height: 65%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* margin-top: 1rem; */
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: grey;
  font-size: 3rem;
  padding: 0 1.25rem 2rem 1.25rem;
`;

export const InfoWrapper = styled.div`
  padding: 0 2rem;
  border-left: 1px solid black;
  font-size: 1.25rem;
`;
