import * as S from './styles';

// eslint-disable-next-line react/prop-types
const TextareaGroup = ({ label, onChange, placeholder, isRequired }) => {
  return (
    <S.Group>
      {label && <S.Label>{label}</S.Label>}
      <S.Textarea placeholder={placeholder} required={isRequired} onChange={onChange} />
    </S.Group>
  );
};

export default TextareaGroup;
