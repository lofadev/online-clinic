import React from 'react';
import { login_facebook, login_google, login_line, login_x } from 'assets';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { ButonSpan, ButtonStyled, FormButton, IconStyled, LogoIconStyled, SpanStyled } from './styled';

interface AccountProps {
  isRegister: boolean;
}

const Account: React.FC<AccountProps> = ({ isRegister }) => {
  const { t } = useTranslation();
  const { top } = translations;

  return (
    <FormButton>
      <ButtonStyled className="login-google" isRegister={isRegister}>
        <LogoIconStyled>
          <IconStyled src={login_google} alt="" />
        </LogoIconStyled>
        <ButonSpan>{t(top.google)}</ButonSpan>
      </ButtonStyled>

      <ButtonStyled className="login-line" isRegister={isRegister}>
        <LogoIconStyled>
          <IconStyled src={login_line} alt="" />
        </LogoIconStyled>
        <ButonSpan> {t(top.line)}</ButonSpan>
      </ButtonStyled>

      <ButtonStyled className="login-x" isRegister={isRegister}>
        <LogoIconStyled>
          <IconStyled src={login_x} alt="" />
        </LogoIconStyled>
        <ButonSpan>{t(top.x)}</ButonSpan>
      </ButtonStyled>

      <ButtonStyled className="login-facebook" isRegister={isRegister}>
        <LogoIconStyled>
          <IconStyled className="fb-icon" src={login_facebook} alt="" />
        </LogoIconStyled>
        <ButonSpan>{t(top.facebook)}</ButonSpan>
      </ButtonStyled>

      <SpanStyled>{t(top.your_viewing)}</SpanStyled>
    </FormButton>
  );
};

export default Account;
