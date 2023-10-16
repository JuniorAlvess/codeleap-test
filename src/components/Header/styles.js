import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
  background: ${colors.secondary};
  width: calc(100% - 63px);
  padding: 27px 27px 27px 37px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: ${colors.primary};
  font: var(--font-large);
`;
