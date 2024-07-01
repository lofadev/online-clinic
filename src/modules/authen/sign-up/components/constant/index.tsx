import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, FieldInput, Text } from 'components';
import { useAuth } from 'slices';
import {
  ButtonStyled,
  ContentStyled,
  FormGroup,
  FormInputStyled,
  LabelStyled,
  MainStyled,
  TitleStyled,
  WrapperStyled,
} from './styled';

interface IFormInput {
  label?: string;
  id: number;
  inputs: IInput[];
}

interface IInput {
  name: string;
  placeholder?: string;
  id: number;
  type?: string;
  disabled?: boolean;
}

const FormInput: IFormInput[] = [
  {
    id: 1,
    label: 'お名前',
    inputs: [
      { id: 1, placeholder: '性', name: 'firstname' },
      { placeholder: '名', id: 2, name: 'lastname' },
    ],
  },

  { id: 2, label: 'メールアドレス', inputs: [{ placeholder: '半角英数字', id: 1, name: 'email', disabled: true }] },

  { id: 3, label: '電話番号', inputs: [{ placeholder: '半角数字', id: 1, name: 'phone' }] },
];

const Complete: React.FC = () => {
  const { registerEmail } = useAuth();
  const form = useForm({
    mode: 'onSubmit',
  });

  return (
    <>
      <Helmet>
        <title>Complete</title>
        <meta name="description" content="Complete" />
      </Helmet>
      <MainStyled>
        <TitleStyled>
          <Text.Primary fontWeight="FW_700" fontSize="SIZE_32">
            基本情報入力
          </Text.Primary>
        </TitleStyled>

        <FormProvider {...form}>
          <ContentStyled>
            <WrapperStyled>
              {FormInput.map((form) => (
                <FormInputStyled key={form.id}>
                  <LabelStyled>{form.label}</LabelStyled>

                  <FormGroup>
                    {form.inputs.map((props) => (
                      <FieldInput
                        name={props.name}
                        type={props.type}
                        placeholder={props.placeholder}
                        key={props.id}
                        defaultValue={props.name === 'email' ? registerEmail : undefined}
                        disabled={props.disabled}
                      />
                    ))}
                  </FormGroup>
                </FormInputStyled>
              ))}
            </WrapperStyled>

            <ButtonStyled>
              <Button type="primary">登録</Button>
            </ButtonStyled>
          </ContentStyled>
        </FormProvider>
      </MainStyled>
    </>
  );
};

export default Complete;
