import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';

import * as S from './styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username.trim()) return;
    dispatch({ type: 'SIGNUP_REQUEST', payload: { username } });
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSignUp}>
        <S.Title>Welcome to CodeLeap network!</S.Title>
        <InputGroup
          label="Please enter your username"
          placeholder="John doe"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" text="ENTER" isDisabled={!username.trim()} />
      </S.Form>
    </S.Container>
  );
};

export default SignUp;
