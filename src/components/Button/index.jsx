import * as S from './styles';

// eslint-disable-next-line react/prop-types
const Button = ({ type, text, isDisabled, onClick }) => {
  return (
    <S.Button type={type || 'text'} disabled={isDisabled} onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default Button;
