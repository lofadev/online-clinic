import { InputProps } from 'antd';
import { Controller, useController, useFormContext } from 'react-hook-form';

import ErrorMessage from '../errorMessage/ErrorMessage';
import { InputStyled, LabelStyled } from './styled';

interface IProps extends InputProps {
  name: string;
  label?: string;
}

const FieldInput: React.FC<IProps> = ({ label, name, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });
  return (
    <div className="form-group">
      {!!label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => <InputStyled {...field} {...props} status={error ? 'error' : undefined} id={name} />}
      />
      {!!error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default FieldInput;
