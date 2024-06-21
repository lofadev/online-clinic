import { translations } from 'locales/translations';
import * as yup from 'yup';

const { validation } = translations;
const scheme = yup.object().shape({
  email: yup.string().trim().email(validation.sign_in.email_format).required(validation.sign_in.email_format),
  password: yup
    .string()
    .trim()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, validation.sign_in.password_format),
});

export default scheme;
