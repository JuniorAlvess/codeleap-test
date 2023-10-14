import * as S from './styles';

// eslint-disable-next-line react/prop-types
const InputGroup = ({ type, label, onChange, placeholder, isRequired }) => {
  return (
    <S.Group>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        type={type || 'text'}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
      />
    </S.Group>
  );
};

export default InputGroup;
