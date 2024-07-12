import { useTranslation } from 'react-i18next';

import EvoBanner from 'components/evo-banner/EvoBanner';
import ArticleBlock from 'components/article-block/ArticleBlock';
import Appointment from 'components/page/appointment';
import Commitment from 'components/page/commitment';
import { translations } from 'locales/translations';
import { AppointmentBox, AppointmentMain, AppointmentTop, ContentAppointmentBox, UsageStyled } from './styled';
import { listDataApointment, listDataCommitment, listDataFlowDay, listDataOrder } from './constants';

export const Usage: React.FC = () => {
  const { t } = useTranslation();
  const { usage } = translations;
  return (
    <UsageStyled>
      <EvoBanner title={t(usage.evobaner)} />
      <AppointmentBox>
        <ArticleBlock
          title={t(usage.articleBlock.title1)}
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
              {listDataCommitment.length && listDataCommitment(t).map((data) => <Commitment key={data.id} {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>

      <AppointmentBox>
        <ArticleBlock
          title={t(usage.articleBlock.title2)}
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
              {t(usage.appointmentTop.text1)}
              <br />
              {t(usage.appointmentTop.text2)}
            </AppointmentTop>
            <AppointmentMain>
              {listDataApointment.length &&
                listDataApointment(t).map((data) => <Appointment key={data.id} {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>

      <AppointmentBox>
        <ArticleBlock
          title={t(usage.articleBlock.title3)}
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
              {t(usage.appointmentTop.text3)}
              <br />
              {t(usage.appointmentTop.text4)}
            </AppointmentTop>
            <AppointmentMain>
              {listDataFlowDay.length && listDataFlowDay(t).map((data) => <Appointment key={data.id} {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>

      <AppointmentBox>
        <ArticleBlock
          title={t(usage.articleBlock.title4)}
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
              {t(usage.appointmentTop.text5)}
              <br />
              {t(usage.appointmentTop.text6)}
              <br />
              {t(usage.appointmentTop.text7)}
              <br />
              {t(usage.appointmentTop.text8)}
            </AppointmentTop>
            <AppointmentMain>
              {listDataOrder.length && listDataOrder(t).map((data) => <Appointment key={data.id} {...data} />)}
            </AppointmentMain>
          </ContentAppointmentBox>
        </ArticleBlock>
      </AppointmentBox>
    </UsageStyled>
  );
};
export default Usage;
