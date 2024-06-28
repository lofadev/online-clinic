import { ReactComponent as ArrowTop } from 'assets/svgs/arrowTop.svg';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { GoToTopStyled } from './styled';

const GoToTop = () => {
  const { t } = useTranslation();
  const { footer } = translations;
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <GoToTopStyled onClick={handleScrollToTop}>
      <ArrowTop />
      {t(footer.go_to_top)}
    </GoToTopStyled>
  );
};

export default GoToTop;
