import { yupResolver } from '@hookform/resolvers/yup';
import FieldPassword from 'components/form/field-password/Password';
import history from 'configs/history';
import { translations } from 'locales/translations';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import RoutesName from 'routes/constant';
import { useAuth } from 'slices';
import scheme from './scheme';
import {
  ButtonLogin,
  ContentStyled,
  FirstStyled,
  FormInput,
  Left,
  MainStyled,
  RegisterStyled,
  TitleStyled,
} from './styled';

interface FormValuesChangePassword {
  oldPassword: string;
  newPassword: string;
}
export const ChangePassword: React.FC = () => {
  const { t } = useTranslation();
  const { changePassword } = translations;
  const { changePasswords, resetChangePassword, changePasswordSuccess } = useAuth();

  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(scheme()),
  });

  const onSubmit: SubmitHandler<FormValuesChangePassword> = (data) => {
    changePasswords({ new_password: data.newPassword, old_password: data.oldPassword });
  };
  useEffect(() => {
    if (changePasswordSuccess) {
      history.push(RoutesName.TOP);
      resetChangePassword();
    }
  }, [changePasswordSuccess]);
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>

      <FormProvider {...form}>
        <ContentStyled>
          <TitleStyled>{t(changePassword.title)}</TitleStyled>

          <MainStyled>
            <Left>
              <FormInput>
                <FieldPassword
                  name="oldPassword"
                  placeholder={t(changePassword.old_password_placeholder)}
                  label={t(changePassword.lable_old_password)}
                />
              </FormInput>
              <FormInput>
                <FieldPassword
                  name="newPassword"
                  placeholder={t(changePassword.new_password_placeholder)}
                  label={t(changePassword.lable_new_password)}
                />
              </FormInput>
              <FormInput>
                <FieldPassword
                  name="confirmPassword"
                  placeholder={t(changePassword.comfirm_password_placeholder)}
                  label={t(changePassword.lable_new_passwordconfirm)}
                />
              </FormInput>
              <ButtonLogin onClick={form.handleSubmit(onSubmit)}>{t(changePassword.btn_confirm)}</ButtonLogin>
            </Left>
          </MainStyled>

          <RegisterStyled>
            <FirstStyled>{t(changePassword.register)}</FirstStyled>
            <ButtonLogin className="btn_res">{t(changePassword.btn_register)}</ButtonLogin>
          </RegisterStyled>
        </ContentStyled>
      </FormProvider>
    </>
  );
};
