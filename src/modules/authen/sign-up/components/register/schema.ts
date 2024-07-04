import { translations } from 'locales/translations';
import * as yup from 'yup';

const schema = () =>
  yup.object().shape({
    email: yup
      .string()
      .trim()
      .max(20, translations.validation.sign_in.email_format)
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      .email(translations.validation.sign_in.email_format)
      .required(translations.validation.sign_in.email_format),
    password: yup
      .string()
      .trim()
      .required(translations.validation.required)
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()-+=|{}[\]:;<>,.?/~]).{8,16}$/,
        translations.validation.sign_up.password_format,
      ),
    checkbox: yup
      .boolean()
      .oneOf([true], '空白のままにすることはできません')
      .required('空白のままにすることはできません'),
  });

export default schema;
