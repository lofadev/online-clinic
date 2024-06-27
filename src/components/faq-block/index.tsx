import ArrowButton from 'components/button/arrowButton/ArrowButton';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { push } from 'redux-first-history';
import { InfoIcon, LightIcon, SpeechIcon } from 'assets';

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

  const dispatch = useDispatch();

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
        <ArrowButton size="small" onClick={() => dispatch(push('#'))}>
          {t(faq.button)}
        </ArrowButton>
      </ButtonWrapper>
    </FAQWrapper>
  );
};
