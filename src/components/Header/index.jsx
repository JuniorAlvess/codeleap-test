import { useNavigate } from 'react-router-dom';

import { IoMdLogOut } from 'react-icons/io';
import * as S from './styles';

import { useDispatch } from 'react-redux';
import * as actions from '../../actions/auth/actions';
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout() {
    dispatch(actions.signUpFailure());
    navigate('/');
  }
  return (
    <S.Header>
      <S.Title>CodeLeap Network</S.Title>
      <IoMdLogOut size={24} color="#fff" onClick={logout} />
    </S.Header>
  );
}

export default Header;
