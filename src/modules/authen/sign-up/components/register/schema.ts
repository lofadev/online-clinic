import { translations } from 'locales/translations';
import * as yup from 'yup';

const scheme = () => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .email(translations.validation.sign_in.email_format)
      .required(translations.validation.sign_in.email_format),
    password: yup
      .string()
      .trim()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, translations.validation.sign_up.password_format),
  });
};

export default scheme;
