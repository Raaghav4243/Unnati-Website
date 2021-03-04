import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  border-top: 8px solid #ffc222;
  border-radius: 8px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const Payment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50px;
  border-top: ${({ dottedBorder }) =>
    dottedBorder ? '1px dotted #000' : null};
  /* border: 1px solid red; */
`;
export const Title = styled.div`
  /* margin: 0; */
  /* margin-bottom: 0; */
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
export const Amount = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ dueAmount }) => (dueAmount ? '700' : null)};
`;
