import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  background: rgba(119, 119, 119, 0.8);
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: clamp(20rem, 35vw, 50rem);

    @media (max-width: 768px) {
      width: 90vw;
    }
  }

  & > div > form > span {
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    & > button:first-of-type {
      background: ${colors.primary};
      color: ${colors.textColor};
      border: 1px solid #999;
    }
  }
`;
