import { Title } from 'components';
import history from 'configs/history';
import { useSearchParams } from 'hooks/useQuery';
import { useEffect } from 'react';
import { useAppointment } from 'slices/appointment';
import { formatDateToJapanese, timeToHourMinutes } from 'utils/date';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { ButtonStyled, TextNotiStyled, TextStyled } from './styled';

const CompleteAppointment = () => {
  const { detail, getAppointment } = useAppointment();
  const params: { id: string } = useSearchParams();

  useEffect(() => {
    if (params && params.id) {
      getAppointment(params.id);
    } else {
      history.push('/appointment');
    }
  }, [params]);

  return (
    <AppointmentArticle title="診療予約完了">
      {detail && (
        <AppointmentBlock>
          <Title.Primary fontSize="SIZE_20">診療予約が完了しました</Title.Primary>
          <TextStyled>
            ご予約いただきありがとうございます。
            <br />
            詳細内容はご登録のメールに送信しましたのでご確認ください。
          </TextStyled>
          <TextNotiStyled>
            【診療開始日時】{formatDateToJapanese(detail?.booking_date, 'Y年M月D日 (ddd)')}{' '}
            {timeToHourMinutes(detail.time.start_time)}～{timeToHourMinutes(detail.time.end_time)} 開始
          </TextNotiStyled>
          <ButtonStyled type="primary" onClick={() => history.push('/consultations')}>
            マイページ
          </ButtonStyled>
        </AppointmentBlock>
      )}
    </AppointmentArticle>
  );
};

export default CompleteAppointment;
