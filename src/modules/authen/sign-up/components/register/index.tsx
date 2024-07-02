import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import { translations } from 'locales/translations';
import { Button, FieldCheckbox, FieldInput } from 'components';
import { IconEmail, LoginArrow } from 'assets';
import SliderRegister from '../slider';
import {
  ContentStyled,
  TitleLeft,
  TitleRight,
  Left,
  BlockStyled,
  MainStyled,
  TitleStyled,
  TitleRegister,
  RequiredStyled,
  RequiredTop,
  Required,
  SchemaStyled,
  WapperStyled,
  FormCheck,
  ConfirmTerms,
  LinkTerms,
  Terms,
  FormLink,
  LinkStyle,
  ArrowImg,
  IconEmailStyled,
} from './styled';
import scheme from './schema';

interface RegisterProps {
  nextStep: () => void;
}

const Register: React.FC<RegisterProps> = ({ nextStep }) => {
  const { t } = useTranslation();
  const { signUp } = translations;

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(scheme()),
  });

  const handleSubmit = () => {
    nextStep();
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Helmet>

      <FormProvider {...form}>
        <ContentStyled>
          <TitleRegister>
            <TitleLeft>{t(signUp.title_left)}</TitleLeft>
            <TitleRight>{t(signUp.title_right)}</TitleRight>
          </TitleRegister>

          <MainStyled>
            <Left>
              <WapperStyled>
                <BlockStyled>
                  <TitleStyled>{t(signUp.title_right)}</TitleStyled>
                  <SliderRegister currentStep={1} />
                </BlockStyled>

                <RequiredStyled>
                  <RequiredTop>
                    <Required>{t(signUp.required)}</Required>
                    <SchemaStyled>{t(signUp.required_schema)}</SchemaStyled>
                  </RequiredTop>
                  <FieldInput name="email" placeholder={t(signUp.placeholder_email)} />
                </RequiredStyled>

                <RequiredStyled>
                  <RequiredTop>
                    <Required>{t(signUp.required)}</Required>
                    <SchemaStyled>{t(signUp.required_schema)}</SchemaStyled>
                  </RequiredTop>
                  <FieldInput name="password" placeholder={t(signUp.placeholder_password)} />
                </RequiredStyled>

                <FormCheck>
                  <FieldCheckbox name="checkbox" question={t(signUp.check_comprehensive)} />
                </FormCheck>

                <Button type="default" rounded="sm" onClick={form.handleSubmit(handleSubmit)}>
                  <IconEmailStyled src={IconEmail} />
                  {t(signUp.btn_register)}
                </Button>

                <ConfirmTerms>
                  <LinkTerms>{t(signUp.link_terms)}</LinkTerms>
                  <Terms>{t(signUp.terms)}</Terms>
                </ConfirmTerms>
              </WapperStyled>
            </Left>
          </MainStyled>

          <FormLink>
            <LinkStyle>
              <ArrowImg src={LoginArrow} alt="" />
              {t(signUp.login_here)}
            </LinkStyle>
          </FormLink>
        </ContentStyled>
      </FormProvider>
    </>
  );
};

export { Register };
