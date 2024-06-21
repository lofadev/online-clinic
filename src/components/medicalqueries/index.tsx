import { FC } from 'react';

import {
  HealthQueriesStyled,
  ImageStyled,
  MessageBlockStyled,
  QueryEntryStyled,
  QueryEntryTextStyled,
  TextStyled,
  WrapperStyled,
} from './styled';

type MedicalQuery = {
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
  return (
    <WrapperStyled>
      <HealthQueriesStyled>
        {data?.map((item) => (
          <QueryEntryStyled key={item.id}>
            <QueryEntryTextStyled>
              <TextStyled gender={gender}>{item.text}</TextStyled>
            </QueryEntryTextStyled>
            <ImageStyled src={item.url} alt="image" />
          </QueryEntryStyled>
        ))}
      </HealthQueriesStyled>
      <MessageBlockStyled>
        <p>そんなときは、DMMオンラインクリニック！</p>
        <p>
          男性特有のお悩みが少しでも気になったら、お気軽にご相談ください。
          <br />
          できる限り早いうちに治療することが改善の近道です！
        </p>
      </MessageBlockStyled>
    </WrapperStyled>
  );
};
