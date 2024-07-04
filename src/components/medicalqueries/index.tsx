import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { translations } from 'locales/translations';
import {
  HealthQueriesStyled,
  ImageStyled,
  MessageBlockStyled,
  QueryEntryStyled,
  QueryEntryTextStyled,
  TextStyled,
  WrapperStyled,
} from './styled';

export type MedicalQuery = {
  id: string;
  text: string;
  url: string;
};

interface IMedicalQuery {
  data: MedicalQuery[];
  gender: boolean;
}

export type TextProps = {
  gender: boolean;
};

export const MedicalQueries: FC<IMedicalQuery> = ({ data, gender }) => {
  const { t } = useTranslation();
  const { genderPage } = translations;

  return (
    <WrapperStyled>
      <HealthQueriesStyled>
        {data?.map((item) => (
          <QueryEntryStyled key={item.id}>
            <QueryEntryTextStyled>
              <TextStyled gender={gender}>{t(item.text)}</TextStyled>
            </QueryEntryTextStyled>
            <ImageStyled src={item.url} alt="image" />
          </QueryEntryStyled>
        ))}
      </HealthQueriesStyled>
      <MessageBlockStyled>
        <p>{t(genderPage.MedicalQueries.MessageBlockBottom)}</p>
        <p>
          {t(genderPage.MedicalQueries.MessageBlockMiddle)}
          <br />
          {t(genderPage.MedicalQueries.MessageBlockTop)}
        </p>
      </MessageBlockStyled>
    </WrapperStyled>
  );
};
