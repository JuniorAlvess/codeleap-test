import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.div`
  background: ${colors.primary};
  border-radius: 16px;

  width: calc(100% - 20px);

  margin: 24px auto 0;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: ${colors.secondary};
  border-radius: 16px 16px 0 0;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${colors.primary};
    font: var(--font-large);
  }

  span svg {
    cursor: pointer;
    font-size: clamp(1.35rem, 1.6vw, 2.1875rem);

    & + svg {
      margin-left: 23px;
    }
  }
`;

export const Content = styled.article`
  padding: 24px;
  border-radius: 0 0 16px 16px;
  border: 1px solid ${colors.opaqueColor};

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      color: ${colors.grey};
      font: var(--font-medium);
    }

    b {
      color: ${colors.grey};
      font: var(--font-medium);
    }
  }
`;

export const Paragraph = styled.p`
  color: ${colors.textColor};
  font: var(--font-medium);

  margin: 16px 0 0;
`;
