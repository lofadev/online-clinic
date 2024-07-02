import { Helmet } from 'react-helmet-async';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FieldInput } from 'components';
import { LoginArrow } from 'assets';
import { translations } from 'locales/translations';
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
export const ChangePassword: React.FC = () => {
  const { t } = useTranslation();
  const { signIn } = translations;

  const form = useForm({
    defaultValues: {
      password: '',
      rePassword: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
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
            <ButtonLogin className="btn_res">{t(signIn.btn_register)}</ButtonLogin>
          </RegisterStyled>
        </ContentStyled>
      </FormProvider>
    </>
  );
};
