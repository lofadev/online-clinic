import { Helmet } from 'react-helmet-async';
// import { ExportOutlined } from '@ant-design/icons';
import { FieldInput, Text, Title } from 'components';
import history from 'configs/history';
import { translations } from 'locales/translations';
import { useEffect, useMemo } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'slices';
import SliderRegister from '../slider';
import {
  ButtonStyled,
  ButtonWrapper,
  CodeStyled,
  ContentStyled,
  FormInput,
  LinkStyled,
  TextStyled,
  TitleStyled,
  TitleTextStyled,
  WrapperStyled,
} from './styled';

interface IFailEmail {
  id: number;
  title: string;
  content: string;
}
interface FormValues {
  token: string;
}
const Authentication: React.FC = () => {
  const { verifyEmail, temp_token, registerSuccess } = useAuth();
  const { t } = useTranslation();
  const { signUp } = translations;

  const form = useForm({
    defaultValues: {
      token: '',
    },
    mode: 'onSubmit',
  });

  const handleSubmit: SubmitHandler<FormValues> = ({ token }) => {
    verifyEmail({ data: token || temp_token });
  };

  useEffect(() => {
    if (registerSuccess) history.push('/login');
  }, [registerSuccess]);

  const failEmail: IFailEmail[] = useMemo(() => {
    return [
      {
        id: 1,
        title: t(signUp.failEmail.mistaken),
        content: t(signUp.failEmail.content1),
      },
      {
        id: 2,
        title: t(signUp.failEmail.reception),
        content: t(signUp.failEmail.content2),
      },
    ];
  }, [t, signUp]);

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Helmet>
      <ContentStyled>
        <FormProvider {...form}>
          <TitleStyled>
            <Title.Primary level={5} fontSize="SIZE_16">
              {t(signUp.title_authentication)}
            </Title.Primary>
          </TitleStyled>

          <SliderRegister currentStep={2} />

          <TitleTextStyled>
            <Text.Primary color="textDanger" fontWeight="FW_600">
              {t(signUp.registration)}
            </Text.Primary>
          </TitleTextStyled>

          <TextStyled>
            <Text.Primary fontSize="SIZE_14">{t(signUp.notification.text1)}</Text.Primary>

            <Text.Primary fontSize="SIZE_14">{t(signUp.notification.text2)}</Text.Primary>

            <Text.Primary fontSize="SIZE_12">{t(signUp.notification.text3)}</Text.Primary>
          </TextStyled>

          <CodeStyled>
            <FormInput>
              <FieldInput name="token" label={t(signUp['authentication-code'])} />
            </FormInput>

            <ButtonWrapper>
              <ButtonStyled onClick={form.handleSubmit(handleSubmit)}>{t(signUp.btn_authentication)}</ButtonStyled>
            </ButtonWrapper>
          </CodeStyled>

          <WrapperStyled>
            <TitleTextStyled>
              <Text.Primary fontSize="SIZE_14" fontWeight="FW_600">
                {t(signUp.failEmail.title)}
              </Text.Primary>
            </TitleTextStyled>

            <TitleTextStyled>
              {failEmail.map((fail) => (
                <TitleTextStyled key={fail.id}>
                  <Text.Primary fontSize="SIZE_12" fontWeight="FW_600">
                    {fail.title}
                  </Text.Primary>
                  <TextStyled>
                    <Text.Primary fontSize="SIZE_12">{fail.content}</Text.Primary>
                  </TextStyled>
                </TitleTextStyled>
              ))}

              <LinkStyled>
                {t(signUp.failEmail.change_setting)}
                {/* <ExportOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> */}
              </LinkStyled>
            </TitleTextStyled>

            <ButtonWrapper>
              <ButtonStyled className="back-to"> {t(signUp.back_to_top)}</ButtonStyled>
            </ButtonWrapper>
          </WrapperStyled>
        </FormProvider>
      </ContentStyled>
    </>
  );
};

export default Authentication;
