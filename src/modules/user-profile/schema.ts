import { translations } from 'locales/translations';
import * as yup from 'yup';

const { validation } = translations;

const schema = yup.object().shape({
  first_name: yup.string().trim().required(validation.user_info.name.first_name),
  last_name: yup.string().trim().required(validation.user_info.name.last_name),
  first_hiragana: yup
    .string()
    .trim()
    .required(validation.user_info.hiragana.first_name)
    .matches(/^[\u3040-\u309F]+$/, validation.user_info.hiragana.first_format),
  last_hiragana: yup
    .string()
    .trim()
    .required(validation.user_info.hiragana.last_name)
    .matches(/^[\u3040-\u309F]+$/, validation.user_info.hiragana.last_format),
  gender: yup.number().required('※性別を選択してください'),
  date_of_birth: yup.string().trim().required('※生年月日を入力してください'),
  phone: yup
    .string()
    .trim()
    .min(10, validation.user_info.min_10)
    .required(validation.user_info.phone)
    .max(10, validation.user_info.max_10)
    .matches(/^\d{10}$/, validation.user_info.number_format),
  deliveryPhone: yup
    .string()
    .trim()
    .min(10, validation.user_info.min_10)
    .required(validation.user_info.phone)
    .max(10, validation.user_info.max_10)
    .matches(/^\d{10}$/, validation.user_info.number_format),
  zip_code: yup
    .string()
    .trim()
    .min(3, validation.user_info.min_3)
    .required(validation.user_info.zip_code)
    .max(15, validation.user_info.max_15),
  prefecture: yup.number().required('※都道府県を選択してください'),
  municipality: yup.string().trim().required(validation.user_info.address),
  address: yup.string().trim().required(validation.user_info.address).min(5, validation.user_info.min_5),
});

export default schema;
