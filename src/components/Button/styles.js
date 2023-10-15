import styled from 'styled-components';
import colors from '../../styles/colors';

export const Button = styled.button`
  width: fit-content;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  font: var(--font-medium);

  padding: 7px 30px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    filter: opacity(70%);
    cursor: not-allowed;
  }
`;
