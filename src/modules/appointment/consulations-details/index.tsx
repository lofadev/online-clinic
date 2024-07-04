import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import { Button, Text, Title } from 'components';
import ButtonPrimaryWhite from 'components/button/button-white/ButtonPrimaryWhite';
import FieldText from 'components/form/field-text/Text';
import history from 'configs/history';
import { translations } from 'locales/translations';
import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppointment } from 'slices/appointment';
import { formatDateToJapanese, timeToHourMinutes } from 'utils/date';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import LoadingAppointment from '../components/loading';
import schema from './schema';
import { ButtonModalStyled, ButtonWrapperStyled, StartDayStyled } from './styled';

interface IFormValues {
  cancel_reason: string;
}

const ConsulationsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { getAppointment, detail, cancelAppointment, loading } = useAppointment();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();
  const { appointment } = translations;

  const methods = useForm<IFormValues>({
    defaultValues: {
      cancel_reason: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (id) {
      getAppointment(id);
    }
  }, [id]);

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  const handleNavigateEdit = () => {
    history.push(`/appointment/${detail?.id}?action=update`);
  };

  const handleCancelAppointment: SubmitHandler<IFormValues> = ({ cancel_reason }) =>
    cancelAppointment(id, cancel_reason);

  return (
    <AppointmentArticle title="診療詳細">
      <AppointmentBlock>
        {loading ? (
          <LoadingAppointment />
        ) : detail ? (
          <>
            <Title.Primary fontSize="SIZE_20">{detail?.service.name}</Title.Primary>
            <StartDayStyled>
              <Title.Primary fontSize="SIZE_16">診療開始日時</Title.Primary>
              <Text.Primary fontSize="SIZE_16">
                {formatDateToJapanese(detail?.booking_date, 'Y年M月D日 (ddd)')}{' '}
                {timeToHourMinutes(detail.time.start_time)}～{timeToHourMinutes(detail.time.end_time)}
              </Text.Primary>
            </StartDayStyled>
          </>
        ) : null}
        <ButtonWrapperStyled>
          <Button onClick={handleNavigateEdit}>{t(appointment.consultations.update)}</Button>
          <Button type="link" onClick={() => setIsOpenModal(true)}>
            {t(appointment.consultations.cancel)}
          </Button>
        </ButtonWrapperStyled>

        <Modal open={isOpenModal} onCancel={handleCancel} footer={null}>
          <FormProvider {...methods}>
            <FieldText label={t(appointment.consultations.cancel_reason)} name="cancel_reason" />
          </FormProvider>

          <ButtonModalStyled>
            <ButtonPrimaryWhite size="middle" onClick={handleCancel}>
              {t(appointment.consultations.cancel)}
            </ButtonPrimaryWhite>
            <Button rounded="sm" type="primary" onClick={methods.handleSubmit(handleCancelAppointment)}>
              {t(appointment.consultations.confirm)}
            </Button>
          </ButtonModalStyled>
        </Modal>
      </AppointmentBlock>
    </AppointmentArticle>
  );
};

export default ConsulationsDetails;
