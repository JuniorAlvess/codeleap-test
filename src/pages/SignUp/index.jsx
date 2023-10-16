import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';

import * as S from './styles';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username.trim()) return;
    dispatch({ type: 'SIGNUP_REQUEST', payload: { username } });
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate('/home');
    }
  }, [auth.isLoggedIn]);

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
