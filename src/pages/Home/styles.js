import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: clamp(18rem, 40.404vw, 60rem);
  min-height: 100vh;
  background: ${colors.primary};

  margin: 0 auto 20px;
  padding-bottom: 20px;
  border-radius: 0 0 16px 16px;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;
