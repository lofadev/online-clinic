import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import Input from 'components/input/Input';
import { Button, FieldCheckbox } from 'components';
import { icon_email, login_arrow } from 'assets';
import {
  ContentStyled,
  TitleLeft,
  TitleRight,
  Left,
  Right,
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
  LabelCheck,
  IconEmail,
  ConfirmTerms,
  LinkTerms,
  Terms,
  FormLink,
  LinkStyle,
  ArrowImg,
} from './styled';
import { Account, SliderRegister } from '../components';

const SignUp: React.FC = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Helmet>

      <FormProvider {...form}>
        <ContentStyled>
          <TitleRegister>
            <TitleLeft>新規登録</TitleLeft>
            <TitleRight>DMMアカウントを登録します</TitleRight>
          </TitleRegister>

          <MainStyled>
            <Left>
              <WapperStyled>
                <BlockStyled>
                  <TitleStyled>メールアドレスで登録</TitleStyled>
                  <SliderRegister widthActive="17%" />
                </BlockStyled>

                <RequiredStyled>
                  <RequiredTop>
                    <Required>必須</Required>
                    <SchemaStyled>Half-width alphanumeric symbol characters</SchemaStyled>
                  </RequiredTop>
                  <Input name="email" placeholder="メールアドレス" />
                </RequiredStyled>

                <RequiredStyled>
                  <RequiredTop>
                    <Required>必須</Required>
                    <SchemaStyled>Half-width alphanumeric symbol characters</SchemaStyled>
                  </RequiredTop>
                  <Input name="password" placeholder="メールアドレス" />
                </RequiredStyled>
                <FormCheck>
                  <FieldCheckbox name="checkbox" />
                  <LabelCheck> DMM.com総合版メールマガジンを受信する</LabelCheck>
                </FormCheck>
                <Button type="default" rounded="sm">
                  <IconEmail src={icon_email} />
                  認証コードを送信する
                </Button>
                <ConfirmTerms>
                  <LinkTerms>DMM会員規約</LinkTerms>
                  <Terms>をお読みになり、すべての内容に同意のう え、ご登録ください。</Terms>
                </ConfirmTerms>
              </WapperStyled>
            </Left>

            <Right>
              <WapperStyled>
                <BlockStyled>
                  <TitleStyled>他のアカウントで会員登録</TitleStyled>
                  <Account isRegister />
                </BlockStyled>
              </WapperStyled>
            </Right>
          </MainStyled>
          <FormLink>
            <LinkStyle>
              <ArrowImg src={login_arrow} alt="" />
              ログインはこちら
            </LinkStyle>

            <LinkStyle>
              <ArrowImg src={login_arrow} alt="" />
              ヘルプ
            </LinkStyle>
          </FormLink>
        </ContentStyled>
      </FormProvider>
    </>
  );
};

export { SignUp };
