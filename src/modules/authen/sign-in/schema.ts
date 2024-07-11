import { translations } from 'locales/translations';
import * as yup from 'yup';

const { validation } = translations;
const scheme = yup.object().shape({
  email: yup
    .string()
    .trim()
    .max(20, validation.sign_in.email_format)
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .email(validation.sign_in.email_format)
    .required(validation.sign_in.email_format),
  password: yup
    .string()
    .trim()
    .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,36}$/, validation.sign_in.password_format),
});

export default scheme;
