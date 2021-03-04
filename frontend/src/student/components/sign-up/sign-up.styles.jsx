import styled, { keyframes } from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SelectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* border: 4px solid red; */
`;

export const RoleContainer = styled.div`
  margin-top: 15px;
  margin-right: 1.5rem;

  /* border: 4px solid red; */
  max-width: 350px;
`;
export const RolePrompt = styled.div`
  margin: 10px 0;
  color: grey;
  font-size: 16px;
  font-weight: normal;
`;
export const RadioWrapper = styled.div`
  display: flex;
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 1.75em;
  font-size: 16px;
`;

export const RadioInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`;

export const RadioIndicator = styled.div`
  border: 1px solid;
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -1.5em;

  ${RadioLabel}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${RadioInput}:checked + &::after {
    display: block;
    border: solid #263238;
    border-radius: 1em;
    background-color: #263238;
    width: 0.5em;
    height: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${RadioInput}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;

export const CafeSelector = styled.div`
  /* margin-top: 15px; */
  margin-right: 1rem;
  width: 100%;
  max-width: 350px;
  /* border: 4px solid black; */
`;
export const CafePrompt = styled.div`
  margin: 10px 0;
  color: grey;
  font-size: 16px;
  font-weight: normal;
`;

export const ButtonWrapper = styled.div`
  /* margin-top: 15px; */
  width: 100%;
  max-width: 250px;
  /* border: 4px solid red; */
`;
