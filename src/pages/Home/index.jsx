import Header from '../../components/Header';
import Posts from '../../components/Posts';
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <Posts />
    </S.Container>
  );
};

export default Home;
