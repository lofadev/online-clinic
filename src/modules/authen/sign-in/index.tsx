import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';

import { LoginArrow } from 'assets';
import { FieldInput } from 'components';
import { translations } from 'locales/translations';
// import { useHistory } from 'react-router-dom';
import { useAuth } from 'slices';
import scheme from './schema';
import {
  ArrowImg,
  ButtonLogin,
  ContentStyled,
  FirstStyled,
  FormInput,
  FormLink,
  Left,
  LinkStyle,
  MainStyled,
  RegisterStyled,
  TitleStyled,
} from './styled';

interface FormValues {
  email?: string;
  password?: string;
}

export const SignIn: React.FC = () => {
  const { login } = useAuth();
  const { t } = useTranslation();
  const { signIn } = translations;
  // const history = useHistory();

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

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>

      <FormProvider {...form}>
        <ContentStyled>
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
              </FormInput>

              <FieldInput name="password" type="password" placeholder={t(signIn.password)} />

              <ButtonLogin onClick={form.handleSubmit(onSubmit)}>{t(signIn.login)}</ButtonLogin>

              <FormLink>
                <LinkStyle>
                  <ArrowImg src={LoginArrow} alt="" />
                  {t(signIn.forgot_password)}
                </LinkStyle>
              </FormLink>
            </Left>
          </MainStyled>

          <RegisterStyled>
            <FirstStyled>{t(signIn.register)}</FirstStyled>
            <ButtonLogin className="btn_res" onClick={() => dispatch(push('/register'))}>
              {t(signIn.btn_register)}
            </ButtonLogin>
          </RegisterStyled>
        </ContentStyled>
      </FormProvider>
    </>
  );
};
