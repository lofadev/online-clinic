import { Title } from 'components';
import history from 'configs/history';
import { useSearchParams } from 'hooks/useQuery';
import { useEffect } from 'react';
import { useAppointment } from 'slices/appointment';
import { formatDateToJapanese, timeToHourMinutes } from 'utils/date';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { ButtonStyled, TextNotiStyled, TextStyled } from './styled';

const CompleteAppointment = () => {
  const { detail, getAppointment } = useAppointment();
  const params: { id: string } = useSearchParams();
  const { t } = useTranslation();
  const { appointment } = translations;

  useEffect(() => {
    if (params && params.id) {
      getAppointment(params.id);
    } else {
      history.push('/appointment');
    }
  }, [params]);

  return (
    <AppointmentArticle title={t(appointment.complete.title)}>
      {detail && (
        <AppointmentBlock>
          <Title.Primary fontSize="SIZE_20">{t(appointment.complete.title)}</Title.Primary>
          <TextStyled>
            {t(appointment.complete.text1)}
            <br />
            {t(appointment.complete.text2)}
          </TextStyled>
          {detail ? (
            <TextNotiStyled>
              {t(appointment.complete.text_noti1)}
              {formatDateToJapanese(detail.booking_date, 'Y年M月D日 (ddd)')} {timeToHourMinutes(detail.time.start_time)}
              ～{timeToHourMinutes(detail.time.end_time)}
              {t(appointment.complete.text_noti2)}
            </TextNotiStyled>
          ) : null}
          <ButtonStyled type="primary" onClick={() => history.push('/consultations')}>
            {t(appointment.complete.button)}
          </ButtonStyled>
        </AppointmentBlock>
      )}
    </AppointmentArticle>
  );
};

export default CompleteAppointment;
