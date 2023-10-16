import * as S from './styles';

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit, title, children }) => (
  <S.Form onSubmit={onSubmit}>
    <S.Title>{title}</S.Title>
    {children}
  </S.Form>
);

export default Form;
