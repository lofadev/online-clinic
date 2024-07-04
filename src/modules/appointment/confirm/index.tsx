import { FieldCheckbox, Text } from 'components';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAppointment } from 'slices/appointment';
import { IPostAppointment } from 'slices/appointment/types';
import { formatDateToJapanese } from 'utils/date';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { BlockContentStyled, ButtonLinkStyled, ButtonStyled, TitleStyled } from './styled';

const ConfirmAppointment = () => {
  const history = useHistory();
  const { service, item, createAppointment, type, action, updateAppointment, detail } = useAppointment();
  const methods = useForm({
    defaultValues: {
      confirm: '',
    },
  });

  const handleCancel = () => {
    history.push('/appointment');
  };

  useEffect(() => {
    if (!item && !service && !detail) handleCancel();
  }, [item, service, detail]);

  const handleConfirm = () => {
    if (item) {
      const payload: IPostAppointment = {
        service_id: 0,
        appointment_type: type,
        booking_date: item?.date,
        reservation_type: 'SCHEDULE',
        time_id: item.time_id,
      };

      if (action === 'update' && detail) {
        payload.service_id = detail.service.id;
        updateAppointment(detail.id, payload);
      } else if (action === 'create' && service) {
        payload.service_id = service.id;
        createAppointment(payload);
      }
    }
  };

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
          <ButtonStyled type="primary" onClick={handleConfirm}>
            予約する
          </ButtonStyled>
          <ButtonLinkStyled type="link" onClick={handleCancel}>
            キャンセルする
          </ButtonLinkStyled>
        </AppointmentBlock>
      )}
    </AppointmentArticle>
  );
};

export default ConfirmAppointment;
