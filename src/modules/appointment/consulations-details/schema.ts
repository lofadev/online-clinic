import * as yup from 'yup';

const schema = yup.object().shape({
  cancel_reason: yup.string().required('キャンセル理由は必須です'),
});

export default schema;
