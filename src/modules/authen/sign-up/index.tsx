import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ContentStyled,
  TitleLeft,
  TitleRight,
  Left,
  Right,
  Content,
  MainStyled,
  TitleStyled,
  TitleRegister,
} from './styled';
import Account from '../components/account';

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
              <Content>
                <TitleStyled>メールアドレスで登録</TitleStyled>
              </Content>
            </Left>

            <Right>
              <Content>
                <TitleStyled>他のアカウントで会員登録</TitleStyled>
                <Account isRegister />
              </Content>
            </Right>
          </MainStyled>
        </ContentStyled>
      </FormProvider>
    </>
  );
};

export { SignUp };
