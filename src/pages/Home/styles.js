import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: clamp(30rem, 40.404vw, 60rem);
  min-height: 100vh;
  background: ${colors.primary};

  margin: 0 auto 20px;
  padding-bottom: 20px;
  border-radius: 0 0 16px 16px;

  .arrow-up {
    position: fixed;
    right: -5rem;
    bottom: 3.5rem;
    font-size: clamp(2rem, 2.5vw, 4rem);
    cursor: pointer;

    transition: all 0.3s ease-in-out;
    color: ${colors.grey};

    &:hover {
      color: ${colors.textColor};
    }
  }

  .enable {
    right: 1rem;
  }

  @media (max-width: 768px) {
    width: 100vw;

    .arrow-up {
      color: ${colors.textColor};
    }
  }
`;
