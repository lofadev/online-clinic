import { Title } from 'components';
import { useHistory } from 'react-router-dom';
import { useAppointment } from 'slices/appointment';
import { formatDateToJapanese } from 'utils/date';
import AppointmentArticle from '../components/appointment-article';
import AppointmentBlock from '../components/appointment-block';
import { ButtonStyled, TextNotiStyled, TextStyled } from './styled';

const CompleteAppointment = () => {
  const { item } = useAppointment();
  const history = useHistory();

  return (
    <AppointmentArticle title="診療予約完了">
      {item && (
        <AppointmentBlock>
          <Title.Primary fontSize="SIZE_20">診療予約が完了しました</Title.Primary>
          <TextStyled>
            ご予約いただきありがとうございます。
            <br />
            詳細内容はご登録のメールに送信しましたのでご確認ください。
          </TextStyled>
          <TextNotiStyled>
            【診療開始日時】{formatDateToJapanese(item?.date, 'Y年M月D日 (ddd)')} {item.timeStart}～{item.timeEnd} 開始
          </TextNotiStyled>
          <ButtonStyled type="primary" onClick={() => history.push('/consulations')}>
            マイページ
          </ButtonStyled>
        </AppointmentBlock>
      )}
    </AppointmentArticle>
  );
};

export default CompleteAppointment;
