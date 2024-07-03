import * as yup from 'yup';
import { translations } from 'locales/translations';

const schemeConfirm = () => {
  return yup.object().shape({
    secretCode: yup
      .string()
      .matches(/^\d{6}$/, translations.validation.change_password.secret_code_format)
      .required(translations.validation.change_password.secret_code_requied),
    newPassword: yup
      .string()
      .trim()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, translations.validation.change_password.password_format)
      .required(translations.validation.change_password.password_requied),
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref('newPassword')], translations.validation.change_password.confirm_password_no_match)
      .required(translations.validation.change_password.password_requied),
  });
};
const schemeSendMail = () => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .email(translations.validation.change_password.email_format)
      .required(translations.validation.change_password.email_requied),
  });
};

export { schemeSendMail, schemeConfirm };
