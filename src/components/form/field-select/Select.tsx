import { SelectProps } from 'antd';
import { Controller, useController, useFormContext } from 'react-hook-form';

import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ReactComponent as ArrowdownIcon } from 'assets/svgs/arrowDown.svg';
import ErrorMessage from '../error-message/ErrorMessage';
import { SelectStyled } from './styled';

interface IProps extends SelectProps<any, DefaultOptionType | BaseOptionType> {
  name: string;
}

const FieldSelect: React.FC<IProps> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            <SelectStyled suffixIcon={<ArrowdownIcon />} {...field} {...props} />
            {!!error && <ErrorMessage message={error.message} />}
          </>
        );
      }}
    />
  );
};

export default FieldSelect;
