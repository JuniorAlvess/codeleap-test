import styled from 'styled-components';
import colors from '../../styles/colors';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  color: ${colors.textColor};
  font: var(--font-medium);
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #777;
  padding: 8px 0 8px 11px;
  color: ${colors.textColor};
  font: var(--font-small);
  outline: none;

  &::placeholder {
    color: ${colors.opaqueColor};
  }

  &:invalid:required {
    background-color: #ffcccc;
  }

  input:invalid + &::before {
    content: 'Campo obrigatório. Preencha este campo.';
    color: red;
    font-size: 14px;
    margin-left: 10px;
    display: block;
  }
`;
