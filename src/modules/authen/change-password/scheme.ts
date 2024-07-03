import * as yup from 'yup';
import { translations } from 'locales/translations';

const scheme = () => {
  return yup.object().shape({
    oldPassword: yup
      .string()
      .trim()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, translations.validation.change_password.password_format)
      .required(translations.validation.change_password.password_requied),
    newPassword: yup
      .string()
      .trim()
      .notOneOf([yup.ref('oldPassword')], translations.validation.change_password.password_no_match)
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, translations.validation.change_password.password_format)
      .required(translations.validation.change_password.password_requied),
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref('newPassword')], translations.validation.change_password.confirm_password_no_match)
      .required(translations.validation.change_password.password_requied),
  });
};

export default scheme;
