import { Helmet } from 'react-helmet-async';
import { ExportOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import { translations } from 'locales/translations';
import { Text, Title } from 'components';
import Input from 'components/input/Input';
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
import SliderRegister from '../slider';

interface IFailEmail {
  id: number;
  title: string;
  content: string;
}

interface AuthenticationProps {
  nextStep: () => void;
}

const Authentication: React.FC<AuthenticationProps> = ({ nextStep }) => {
  const { t } = useTranslation();
  const { signUp } = translations;

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
  }, []);

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Helmet>
      <ContentStyled>
        <TitleStyled>
          <Title.Primary level={5} fontSize="SIZE_16">
            {t(signUp['title-authentication'])}
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
            <Input label={t(signUp['authentication-code'])} />
          </FormInput>

          <ButtonWrapper>
            <ButtonStyled onClick={nextStep}>{t(signUp.btn_authentication)}</ButtonStyled>
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
              <ExportOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
            </LinkStyled>
          </TitleTextStyled>

          <ButtonWrapper>
            <ButtonStyled className="back-to"> {t(signUp.back_to_top)}</ButtonStyled>
          </ButtonWrapper>
        </WrapperStyled>
      </ContentStyled>
    </>
  );
};

export default Authentication;
