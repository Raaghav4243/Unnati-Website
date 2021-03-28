import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  /* background-color: #fff; */
  /* padding: 3rem 0 0 0; */
  /* border: 1px solid blue; */
  /* margin-top: 100px; */
  margin-top: 2rem;
  /* padding-top: 1rem; */

  /* margin-bottom: 100px; */
`;

export const AboutTitleContainer = styled.div`
  /* margin: 10px 0; */
  /* margin: 2rem 0; */
  margin-top: 100px;
`;

export const AboutTitle = styled.h1`
  font-size: calc(30px + 1vw);
  font-weight: bold;
  text-align: center;

  /* @media screen and (max-width: 900px) {
    font-size: 35px;
  } */
`;

// export const AboutInfoWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   /* margin: 2rem 2.5rem; */
//   /*
//   @media screen and (max-width: 900px) and (min-width: 768px) {
//     margin: 2rem 0;
//   } */

//   margin: 0 calc(30px + 10vw);
// `;

export const AboutInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
  padding: 2rem 10rem;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    /* margin: 2rem 0; */
    padding: 0;
  }
`;
