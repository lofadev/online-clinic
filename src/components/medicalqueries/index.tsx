import { FC } from 'react';
import { IMedicalQuery } from './type';

import {
  HealthQueriesStyled,
  ImageStyled,
  MessageBlockStyled,
  QueryEntryStyled,
  QueryEntryTextStyled,
  TextStyled,
  WrapperStyled,
} from './styled';

export const MedicalQueries: FC<IMedicalQuery> = ({ data, gender }) => {
  return (
    <WrapperStyled>
      <HealthQueriesStyled>
        {data?.map((item) => (
          <QueryEntryStyled>
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
