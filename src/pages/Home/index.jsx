import Header from '../../components/Header';
import Posts from '../../components/Posts';

import { BsArrowUpCircle } from 'react-icons/bs';
import { useScroll } from '../../hooks/getScroll';
import * as S from './styles';

const Home = () => {
  const { scroll } = useScroll();

  return (
    <S.Container>
      <Header />
      <Posts />
      <BsArrowUpCircle
        className={scroll > 500 ? 'arrow-up enable' : 'arrow-up'}
        onClick={() => window.scrollTo(0, 0)}
      />
    </S.Container>
  );
};

export default Home;
