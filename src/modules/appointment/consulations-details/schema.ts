import * as yup from 'yup';

const schema = yup.object().shape({
  cancel_reason: yup.string().required(),
});

export default schema;
