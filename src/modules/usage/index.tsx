import EvoBanner from 'components/evo-banner/EvoBanner';
import ArticleBlock from 'components/article-block/ArticleBlock';
import Appointment from 'components/page/appointment';
import Commitment from 'components/page/commitment';
import { AppointmentBox, AppointmentMain, AppointmentTop, ContentAppointmentBox, UsageStyled } from './styled';
import { listDataApointment, listDataCommitment, listDataFlowDay, listDataOrder } from './constants';

export const Usage: React.FC = () => {
  return (
    <UsageStyled>
      <EvoBanner title="サービスの使い方" />
      <AppointmentBox>
        <ArticleBlock
          title="DMMオンラインクリニックの強み"
          desc="Commitment"
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            fontFamily: 'NOTO_SANS',
            color: 'primary',
          }}
        >
          <ContentAppointmentBox>
            <AppointmentMain>
              {listDataCommitment.length && listDataCommitment.map((data) => <Commitment {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>

      <AppointmentBox>
        <ArticleBlock
          title="初回診療予約 | DMMオンラインクリニック"
          desc="Appointment"
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            fontFamily: 'NOTO_SANS',
            color: 'primary',
          }}
        >
          <ContentAppointmentBox>
            <AppointmentTop>
              サービス初回利用時のアカウント登録を含めた予約方法を説明いたします。
              <br />
              次回以降も同様にログイン後の「診療予約」ボタンからご予約が可能です。
            </AppointmentTop>
            <AppointmentMain>
              {listDataApointment.length && listDataApointment.map((data) => <Appointment {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>

      <AppointmentBox>
        <ArticleBlock
          title="診察当日の流れ"
          desc="Flow of the day"
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            fontFamily: 'NOTO_SANS',
            color: 'primary',
          }}
        >
          <ContentAppointmentBox>
            <AppointmentTop>
              ビデオツールを使用しオンライン診療を行います。
              <br />
              処方薬の情報や、決済金額についても診療内で確認させていただきます。
            </AppointmentTop>
            <AppointmentMain>
              {listDataFlowDay.length && listDataFlowDay.map((data) => <Appointment {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>

      <AppointmentBox>
        <ArticleBlock
          title="以前購入したお薬を追加購入したい方"
          desc="Order"
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            fontFamily: 'NOTO_SANS',
            color: 'primary',
          }}
        >
          <ContentAppointmentBox>
            <AppointmentTop>
              お手持ちのお薬がなくなる前にお支払いをいただき、
              <br />
              お支払いいただいた分のお薬を都度お届けさせていただく「分割調剤」の仕組みです。
              <br />
              受診した診療項目内にて、一定期間の処方を受けた場合に申請が可能です！
              <br />
              ご申請いただいた内容に問題がなければ、順次決済と配送の準備を進めてまいります。
            </AppointmentTop>
            <AppointmentMain>
              {listDataOrder.length && listDataOrder.map((data) => <Appointment {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>
    </UsageStyled>
  );
};
export default Usage;
