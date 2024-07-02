import FieldPassword from 'components/form/field-password/Password';
import { FormProvider, useForm } from 'react-hook-form';

export const HomePage: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      password: '',
    },
  });

  return (
    <div>
      <FormProvider {...methods}>
        <FieldPassword name="password" />
      </FormProvider>
    </div>
  );
};
