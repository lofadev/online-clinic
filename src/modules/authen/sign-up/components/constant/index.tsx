import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, FieldCheckbox, FieldInput, Text } from 'components';
import { FormTerm } from './constant';
import {
  ButtonStyled,
  ContentStyled,
  FormAgree,
  FormCheckStyled,
  FormGroup,
  FormInputStyled,
  FormLink,
  FormTexts,
  LabelCheck,
  LabelStyled,
  LinkStyled,
  MainStyled,
  ScrollStyled,
  TextStyled,
  TitleStyled,
  WrapperStyled,
} from './styled';

interface IFormInput {
  label?: string;
  id: number;
  inputs: IInput[];
}

interface IInput {
  placeholder?: string;
  id: number;
}

const FormInput: IFormInput[] = [
  {
    id: 1,
    label: 'お名前',
    inputs: [
      { id: 1, placeholder: '性' },
      { placeholder: '名', id: 2 },
    ],
  },

  { id: 2, label: 'メールアドレス', inputs: [{ placeholder: '半角英数字', id: 1 }] },
  { id: 3, label: 'パスワード', inputs: [{ placeholder: '半角英数字8～36文字', id: 1 }] },
  { id: 4, label: '電話番号', inputs: [{ placeholder: '半角数字', id: 1 }] },
];

const Complete: React.FC = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
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
                        name={`complete${props.id}`}
                        type="text"
                        placeholder={props.placeholder}
                        key={props.id}
                      />
                    ))}
                  </FormGroup>
                </FormInputStyled>
              ))}
            </WrapperStyled>

            <ScrollStyled>
              <TitleStyled>
                <Text.Primary fontSize="SIZE_16" fontWeight="FW_600">
                  DMMオンラインクリニック受診支援サービス利用規約
                </Text.Primary>
              </TitleStyled>

              {FormTerm.map((props) => (
                <FormTexts key={props.id}>
                  <TextStyled>
                    <Text.Primary fontSize="SIZE_14" fontWeight="FW_700">
                      {props.chapter}
                    </Text.Primary>
                  </TextStyled>
                  <TextStyled>
                    <Text.Primary fontSize="SIZE_14" fontWeight="FW_700">
                      {props.article}
                    </Text.Primary>
                  </TextStyled>
                  {props.contents.map((texts) => (
                    <Text.Primary key={texts.id}>{texts.content}</Text.Primary>
                  ))}
                </FormTexts>
              ))}
            </ScrollStyled>

            <FormAgree>
              <FormLink>
                <LinkStyled>DMMオンラインクリニック受診支援サービスプライバシーポリシー</LinkStyled>
              </FormLink>

              <FormCheckStyled>
                <FieldCheckbox name="agree" />
                <LabelCheck>利用規約および、プライバシーポリシーに同意します</LabelCheck>
              </FormCheckStyled>

              <FormCheckStyled>
                <FieldCheckbox name="agree-provide" />
                <LabelCheck>
                  ユーザーが指定した登録医療機関等のオンラインクリニックを受診するために、
                  当社がユーザーにより本サービスにおいて登録された個人情報を当該医療機関等に
                  所定のシステムを通じて提供することについて同意します
                </LabelCheck>
              </FormCheckStyled>
            </FormAgree>

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
