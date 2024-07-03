import { yupResolver } from '@hookform/resolvers/yup';
import { FieldInput } from 'components';
import FieldPassword from 'components/form/field-password/Password';
import { translations } from 'locales/translations';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'slices';
import { schemeConfirm } from '../scheme';
import {
  ContentStyled,
  TitleStyled,
  MainStyled,
  Left,
  FormInput,
  ButtonLogin,
  RegisterStyled,
  FirstStyled,
} from '../styled';

interface FormValuesForgotPasswordConfirm {
  secretCode: string;
  newPassword: string;
  confirmPassword: string;
}
const FormConfirm: FC<FormValuesForgotPasswordConfirm> = () => {
  const { t } = useTranslation();
  const { changePassword } = translations;
  const { changePasswords } = useAuth();
  const formConfirm = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schemeConfirm()),
  });
  const onSubmitConfirm: SubmitHandler<FormValuesForgotPasswordConfirm> = (data) => {
    changePasswords({ new_password: data.newPassword, token: data.secretCode });
    formConfirm.reset();
  };

  return (
    <FormProvider {...formConfirm}>
      <ContentStyled>
        <TitleStyled>{t(changePassword.title_forgot_password)}</TitleStyled>

        <MainStyled>
          <Left>
            <FormInput>
              <FieldInput
                name="secretCode"
                placeholder={t(changePassword.secret_code_placeholder)}
                label={t(changePassword.lable_secret_code)}
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
            <ButtonLogin onClick={formConfirm.handleSubmit(onSubmitConfirm)}>
              {t(changePassword.btn_restore_password)}
            </ButtonLogin>
          </Left>
        </MainStyled>

        <RegisterStyled>
          <FirstStyled>{t(changePassword.register)}</FirstStyled>
          <ButtonLogin className="btn_res">{t(changePassword.btn_register)}</ButtonLogin>
        </RegisterStyled>
      </ContentStyled>
    </FormProvider>
  );
};
export default FormConfirm;
