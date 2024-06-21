import { ReactComponent as ArrowTop } from 'assets/svgs/arrowTop.svg';
import { GoToTopStyled } from './styled';

const GoToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <GoToTopStyled onClick={handleScrollToTop}>
      <ArrowTop />
      トップへ戻る
    </GoToTopStyled>
  );
};

export default GoToTop;
