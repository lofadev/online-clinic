import { yupResolver } from '@hookform/resolvers/yup';
import { FieldInput } from 'components';
import { translations } from 'locales/translations';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'slices';
import { schemeSendMail } from '../scheme';
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

interface FormValuesForgotPasswordSendMail {
  email: string;
}
const FormSendMail: FC<FormValuesForgotPasswordSendMail> = () => {
  const { t } = useTranslation();
  const { changePassword } = translations;
  const { sendMail } = useAuth();
  const formSendMail = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schemeSendMail()),
  });
  const onSubmitSendMail: SubmitHandler<FormValuesForgotPasswordSendMail> = (data) => {
    sendMail(data);
    formSendMail.reset();
  };
  return (
    <FormProvider {...formSendMail}>
      <ContentStyled>
        <TitleStyled>{t(changePassword.title_forgot_password)}</TitleStyled>

        <MainStyled>
          <Left>
            <FormInput>
              <FieldInput
                name="email"
                placeholder={t(changePassword.email_placehold)}
                label={t(changePassword.lable_email)}
              />
            </FormInput>
            <ButtonLogin onClick={formSendMail.handleSubmit(onSubmitSendMail)}>
              {t(changePassword.btn_send_mail)}
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
export default FormSendMail;
