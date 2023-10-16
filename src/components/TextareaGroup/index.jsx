import * as S from './styles';

// eslint-disable-next-line react/prop-types
const TextareaGroup = ({ label, defaultValue, value, onChange, placeholder, isRequired }) => {
  return (
    <S.Group>
      {label && <S.Label>{label}</S.Label>}
      <S.Textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={isRequired}
        onChange={onChange}
      />
    </S.Group>
  );
};

export default TextareaGroup;
