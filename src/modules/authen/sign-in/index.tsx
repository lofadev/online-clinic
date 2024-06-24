import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { push } from 'redux-first-history';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';
import { login_arrow } from 'assets';
import { useAuth } from 'slices';
import { Button, FieldCheckbox, FieldInput } from 'components';
import Account from '../components/account';
import scheme from './schema';
import {
  ArrowImg,
  ButtonLogin,
  ContentStyled,
  FirstStyled,
  FormCheck,
  FormInput,
  FormLink,
  LabelCheck,
  LabelStyled,
  Language,
  Left,
  LinkStyle,
  MainStyled,
  RegisterStyled,
  Right,
  TitleStyled,
  Wrapper,
} from './styled';

interface FormValues {
  email?: string;
  password?: string;
}

export const SignIn: React.FC = () => {
  const { login } = useAuth();
  const { t, i18n } = useTranslation();
  const { signIn } = translations;

  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(scheme),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(push('/'));
    login(data);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>

      <FormProvider {...form}>
        <Wrapper>
          <ContentStyled>
            <Language>
              <Button name="lng" onClick={() => changeLanguage('en')}>
                ENG
              </Button>
              <Button name="lng" onClick={() => changeLanguage('jp')}>
                JP
              </Button>
            </Language>

            <TitleStyled>{t(signIn.title)}</TitleStyled>

            <MainStyled>
              <Left>
                <FormInput>
                  <FieldInput
                    name="email"
                    type="text"
                    placeholder={t(signIn.email_placeholder)}
                    label={t(signIn.email)}
                  />

                  <FormCheck>
                    <FieldCheckbox name="saveEmail" />
                    <LabelCheck> {t(signIn.email_save)}</LabelCheck>
                  </FormCheck>
                </FormInput>

                <FormInput>
                  <FieldInput name="password" type="password" placeholder={t(signIn.password)} />

                  <FormCheck>
                    <FieldCheckbox name="savePass" />
                    <LabelCheck> {t(signIn.password_save)}</LabelCheck>
                  </FormCheck>
                </FormInput>

                <ButtonLogin onClick={form.handleSubmit(onSubmit)}>{t(signIn.login)}</ButtonLogin>

                <FormCheck>
                  <FieldCheckbox name="AutoLogin" />
                  <LabelCheck>{t(signIn.login_auto)}</LabelCheck>
                </FormCheck>

                <FormLink>
                  <LinkStyle>
                    <ArrowImg src={login_arrow} alt="" />
                    {t(signIn.forgot_password)}
                  </LinkStyle>

                  <LinkStyle>
                    <ArrowImg src={login_arrow} alt="" />
                    {t(signIn.not_email)}
                  </LinkStyle>

                  <LinkStyle>
                    <ArrowImg src={login_arrow} alt="" />
                    {t(signIn.not_login)}
                  </LinkStyle>

                  <LinkStyle>
                    <ArrowImg src={login_arrow} alt="" />
                    {t(signIn.help)}
                  </LinkStyle>
                </FormLink>
              </Left>

              <Right>
                <LabelStyled>{t(signIn.account)}</LabelStyled>
                <Account isRegister={false} />
              </Right>
            </MainStyled>

            <RegisterStyled>
              <FirstStyled>{t(signIn.register)}</FirstStyled>
              <ButtonLogin className="btn_res" onClick={() => dispatch(push('/register'))}>
                {t(signIn.btn_register)}
              </ButtonLogin>
            </RegisterStyled>
          </ContentStyled>
        </Wrapper>
      </FormProvider>
    </>
  );
};
