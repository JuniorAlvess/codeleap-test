import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #ccc;

  width: clamp(18rem, 25vw, 31.35rem);

  display: flex;
  flex-direction: column;

  button {
    align-self: end;
  }
`;

export const Title = styled.strong`
  color: #000;
  font-family: 'Roboto', sans-serif;
  font: var(--font-large);

  margin-bottom: 24px;
`;
