import { InfoIcon, LightIcon, SpeechIcon } from 'assets';
import ArrowButton from 'components/button/arrowButton/ArrowButton';
import history from 'configs/history';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import {
  ButtonWrapper,
  FAQFlexBlockStyled,
  FAQGroupStyled,
  FAQLeftBlockStyled,
  FAQLightIconStyled,
  FAQRightBlockStyled,
  FAQSubTitleStyled,
  FAQTopStyled,
  FAQWrapper,
} from './styled';

export const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const { faq } = translations;

  return (
    <FAQWrapper>
      <FAQFlexBlockStyled>
        <FAQLeftBlockStyled>
          <FAQTopStyled>
            <img src={SpeechIcon} alt="icon" />
            <span>{t(faq.title)}</span>
          </FAQTopStyled>
          <FAQSubTitleStyled>{t(faq.description)}</FAQSubTitleStyled>
          <FAQGroupStyled>
            <li>{t(faq.list_faq.payment)}</li>
            <li>{t(faq.list_faq.consulation)}</li>
            <li>{t(faq.list_faq.medication)}</li>
            <li>{t(faq.list_faq.etc)}</li>
          </FAQGroupStyled>
        </FAQLeftBlockStyled>

        <FAQRightBlockStyled>
          <img src={InfoIcon} alt="icon" />
          <FAQLightIconStyled src={LightIcon} alt="icon" />
        </FAQRightBlockStyled>
      </FAQFlexBlockStyled>
      <ButtonWrapper>
        <ArrowButton size="small" onClick={() => history.push('#')}>
          {t(faq.button)}
        </ArrowButton>
      </ButtonWrapper>
    </FAQWrapper>
  );
};
