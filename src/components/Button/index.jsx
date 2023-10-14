import * as S from './styles';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, text, isDisabled, onClick } = props;
  return (
    <S.Button type={type || 'text'} disabled={isDisabled} onClick={onClick || undefined}>
      {text}
    </S.Button>
  );
};

export default Button;
