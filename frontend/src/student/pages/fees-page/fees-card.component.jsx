import React from 'react';

import { Container, Wrapper, Prompt, Amount } from './fees-card.styles';

export const FeesCard = ({ prompt, amount, amountColor }) => {
  console.log('AMOUNT COLOR', amountColor);
  return (
    <>
      <Container>
        <Wrapper>
          <Prompt>{prompt}</Prompt>
          <Amount amountColor={amountColor}>&#8377;{amount}.00</Amount>
        </Wrapper>
      </Container>
    </>
  );
};
