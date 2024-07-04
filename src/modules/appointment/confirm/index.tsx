import { FieldCheckbox, Text } from 'components';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAppointment } from 'slices/appointment';
import { formatDateToJapanese } from 'utils/date';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { BlockContentStyled, ButtonLinkStyled, ButtonStyled, TitleStyled } from './styled';

const ConfirmAppointment = () => {
  const history = useHistory();
  const { service, item } = useAppointment();
  const methods = useForm({
    defaultValues: {
      confirm: '',
    },
  });

  useEffect(() => {
    if (!item) history.push('/appointment');
  }, [item]);

  return (
    <AppointmentArticle title="診療予約確認">
      {item && (
        <AppointmentBlock>
          <BlockContentStyled>
            <TitleStyled>診療項目</TitleStyled>
            <Text.Primary fontSize="SIZE_16">{service?.name}</Text.Primary>
          </BlockContentStyled>
          <BlockContentStyled>
            <TitleStyled>診療開始日時</TitleStyled>
            <Text.Primary fontSize="SIZE_16">
              {formatDateToJapanese(item?.date, 'Y年M月D日 (ddd)')} {item.timeStart}～{item.timeEnd} 開始
            </Text.Primary>
          </BlockContentStyled>
          <BlockContentStyled>
            <TitleStyled>メルマガ購読</TitleStyled>
            <FormProvider {...methods}>
              <FieldCheckbox name="confirm" question="お得な情報や処方後の案内などを受け取る" />
            </FormProvider>
            <Text.Primary>※DMMオンラインクリニックとキュアステーションのメルマガは共通です。</Text.Primary>
            <Text.Primary>
              どちらかで登録及び解除した場合、連動して登録及び解除されますのでご注意ください。
            </Text.Primary>
          </BlockContentStyled>
          <ButtonStyled type="primary">予約する</ButtonStyled>
          <ButtonLinkStyled type="link">キャンセルする</ButtonLinkStyled>
        </AppointmentBlock>
      )}
    </AppointmentArticle>
  );
};

export default ConfirmAppointment;
