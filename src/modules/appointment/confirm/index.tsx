import { FieldCheckbox, Text } from 'components';
import history from 'configs/history';
import { translations } from 'locales/translations';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppointment } from 'slices/appointment';
import { IPostAppointment } from 'slices/appointment/types';
import { formatDateToJapanese } from 'utils/date';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { BlockContentStyled, ButtonLinkStyled, ButtonStyled, TitleStyled } from './styled';

const ConfirmAppointment = () => {
  const { service, item, createAppointment, type, action, updateAppointment, detail } = useAppointment();
  const { t } = useTranslation();
  const { appointment } = translations;
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
    <AppointmentArticle title={t(appointment.confirm.title)}>
      {item && (
        <AppointmentBlock>
          <BlockContentStyled>
            <TitleStyled> {t(appointment.confirm.medical_item)}</TitleStyled>
            <Text.Primary fontSize="SIZE_16">{service?.name}</Text.Primary>
          </BlockContentStyled>
          <BlockContentStyled>
            <TitleStyled> {t(appointment.confirm.start_time)}</TitleStyled>
            <Text.Primary fontSize="SIZE_16">
              {formatDateToJapanese(item?.date, 'Y年M月D日 (ddd)')} {item.timeStart}～{item.timeEnd}
              {t(appointment.confirm.start_action)}
            </Text.Primary>
          </BlockContentStyled>
          <BlockContentStyled>
            <TitleStyled> {t(appointment.confirm.newsletter_subscribe)}</TitleStyled>
            <FormProvider {...methods}>
              <FieldCheckbox name="confirm" question={t(appointment.confirm.question)} />
            </FormProvider>
            <Text.Primary> {t(appointment.confirm.common_notice)}</Text.Primary>
            <Text.Primary>{t(appointment.confirm.sync_notice)}</Text.Primary>
          </BlockContentStyled>
          <ButtonStyled type="primary" onClick={handleConfirm}>
            {t(appointment.confirm.make_reserve)}
          </ButtonStyled>
          <ButtonLinkStyled type="link" onClick={handleCancel}>
            {t(appointment.confirm.cancel_reserve)}
          </ButtonLinkStyled>
        </AppointmentBlock>
      )}
    </AppointmentArticle>
  );
};

export default ConfirmAppointment;
