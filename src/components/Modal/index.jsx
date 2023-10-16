import * as S from './styles';
// eslint-disable-next-line react/prop-types
function Modal({ children }) {
  return (
    <S.Container>
      <div>{children}</div>
    </S.Container>
  );
}

export default Modal;
