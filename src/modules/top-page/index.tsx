import {
  ArrowWhiteIcon,
  CarIcon,
  CheckMarkIcon,
  CurestationImage,
  InfoIcon,
  LightIcon,
  PraticipalImage,
  ReorderImage,
  ReserveIcon,
  SpeechIcon,
  UserImage,
} from 'assets';
import { ArrowButton, Button } from 'components';
import ArticleBlock from 'components/article-block/ArticleBlock';
import { Banner } from 'components/banner';
import IconFeature from 'components/page/feature';
import FlowItem from 'components/page/flow';
import IconSiekte from 'components/page/siekte';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'redux-first-history';
import RoutesName from 'routes/constant';
import { Delivery, Price, SmartPhone } from 'assets/icons/icon-feature';
import { listCurrentIssue, listDataFlow, listDataSiekte, listDelivery } from './fakeData';

import {
  AboutTopBlock,
  ArrowWhiteIconStyled,
  ArticleBlockWrapper,
  ButtonWrapper,
  CurrentIssueItem,
  CurrentIssues,
  CurrentIssuesBlock,
  DeliveryBlockWrapper,
  DeliveryButtonStyled,
  DeliveryContentStyled,
  DeliveryDescriptiontStyled,
  DeliveryImageStyled,
  DeliveryImageWrapper,
  DeliveryInfoBlockStyled,
  DeliveryInfoItemStyled,
  DeliveryLeftStyled,
  DeliveryTitletStyled,
  DeliveryTopStyled,
  DeliveryWrapper,
  FAQFlexBlockStyled,
  FAQGroupStyled,
  FAQLeftBlockStyled,
  FAQLightIconStyled,
  FAQRightBlockStyled,
  FAQSubTitleStyled,
  FAQTopStyled,
  FAQWrapper,
  FollowBlockStyled,
  FollowButtonMWrapper,
  FollowButtonSWrapper,
  FollowImageStyled,
  IssueNoteStyled,
  IssueSubtitletStyled,
  IssueTextStyled,
  IssueTitleStyled,
  LeftBlockStyled,
  MediaImageStyled,
  MediaImageWrapper,
  MediaTextStyled,
  NewBlockWrapper,
  NewInfoStyled,
  NoticeWrapper,
  ProjectParticipalWrapper,
  ProjectParticipation,
  ProjectParticipationImage,
  ProjectParticipationText,
  SiekteWrapper,
  UserImageStyled,
  Wrapper,
} from './styled';

export const TopPage: React.FC = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { topPage } = translations;

  return (
    <Wrapper>
      <Banner />
      <ArticleBlock
        title={t(topPage.article_medical.title)}
        desc={t(topPage.article_medical.description)}
        descStyles={{
          fontSize: 'SIZE_16',
          fontWeight: 'FW_700',
          color: 'brightTeal',
        }}
        backgroundWrapper="lightBlue"
      >
        <SiekteWrapper>{listDataSiekte.length && listDataSiekte.map((item) => <IconSiekte {...item} />)}</SiekteWrapper>

        <MediaImageWrapper>
          <MediaImageStyled src={CurestationImage} alt="image" />
        </MediaImageWrapper>
        <MediaTextStyled>{t(topPage.article_medical.note)}</MediaTextStyled>
      </ArticleBlock>

      <ArticleBlockWrapper>
        <ArticleBlock
          title={t(topPage.article_about.title)}
          desc={t(topPage.article_about.description)}
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            color: 'brightTeal',
          }}
          backgroundWrapper="extraBlue"
        >
          <AboutTopBlock>
            <IconFeature id={1} icon={Price} content={t(topPage.article_about.features.price)} gender="general" />
            <IconFeature id={2} icon={Delivery} content={t(topPage.article_about.features.delivery)} gender="general" />
            <IconFeature
              id={3}
              icon={SmartPhone}
              content={t(topPage.article_about.features.smartphone)}
              gender="general"
            />
          </AboutTopBlock>

          <CurrentIssuesBlock>
            <LeftBlockStyled>
              <CurrentIssues>
                {listCurrentIssue?.map((item) => (
                  <CurrentIssueItem key={item.id}>
                    <img src={CheckMarkIcon} alt="icon" />
                    <p>{item.text}</p>
                  </CurrentIssueItem>
                ))}
              </CurrentIssues>
              <IssueTextStyled>というお悩みを感じている方へ。</IssueTextStyled>
              <IssueTitleStyled>スキマ時間でパパっとオンライン診療！</IssueTitleStyled>
              <IssueSubtitletStyled>
                少しでも気になる方はまずご相談下さい！
                <br />
                身だしなみを整える感覚で、自信に満ちた毎日を！
              </IssueSubtitletStyled>
              <IssueNoteStyled>
                *1 厚生労働省
                <Link to="#">
                  「医薬品等を海外から購入しようとされる方へ海外医薬品や海外サ
                  <br />
                  プリメントの個人輸入のリスクについて」
                </Link>
                参照
              </IssueNoteStyled>
            </LeftBlockStyled>
            <UserImageStyled src={UserImage} alt="image" />
          </CurrentIssuesBlock>
          <ButtonWrapper>
            <ArrowButton size="small" onClick={() => dispatch(push(`${RoutesName.ABOUT}`))}>
              {t(topPage.button.about)}
            </ArrowButton>
          </ButtonWrapper>

          <FAQWrapper>
            <FAQFlexBlockStyled>
              <FAQLeftBlockStyled>
                <FAQTopStyled>
                  <img src={SpeechIcon} alt="icon" />
                  <span>{t(topPage.article_about.faq.title)}</span>
                </FAQTopStyled>
                <FAQSubTitleStyled>{t(topPage.article_about.faq.description)}</FAQSubTitleStyled>
                <FAQGroupStyled>
                  <li>{t(topPage.article_about.faq.list_faq.payment)}</li>
                  <li>{t(topPage.article_about.faq.list_faq.consulation)}</li>
                  <li>{t(topPage.article_about.faq.list_faq.medication)}</li>
                  <li>{t(topPage.article_about.faq.list_faq.etc)}</li>
                </FAQGroupStyled>
              </FAQLeftBlockStyled>

              <FAQRightBlockStyled>
                <img src={InfoIcon} alt="icon" />
                <FAQLightIconStyled src={LightIcon} alt="icon" />
              </FAQRightBlockStyled>
            </FAQFlexBlockStyled>
            <ButtonWrapper>
              <ArrowButton size="small" onClick={() => dispatch(push(`${RoutesName.FAQ}`))}>
                {t(topPage.button.faq)}
              </ArrowButton>
            </ButtonWrapper>
          </FAQWrapper>
        </ArticleBlock>
      </ArticleBlockWrapper>

      <ArticleBlockWrapper>
        <ArticleBlock
          title={t(topPage.article_flow.title)}
          desc={t(topPage.article_flow.description)}
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            color: 'brightTeal',
          }}
          backgroundWrapper="lightBlue"
        >
          <FollowBlockStyled>
            {listDataFlow.length && listDataFlow.map((data) => <FlowItem {...data} />)}
          </FollowBlockStyled>
          <FollowButtonSWrapper>
            <ArrowButton size="small" onClick={() => dispatch(push(`${RoutesName.USAGE}`))}>
              {t(topPage.button.service_info)}
            </ArrowButton>
          </FollowButtonSWrapper>

          <FollowButtonMWrapper>
            <ArrowButton size="small" color="secondary" onClick={() => dispatch(push(`${RoutesName.APPOINTMENT}`))}>
              {t(topPage.button.appoinment)}
              <FollowImageStyled src={ReserveIcon} alt="icon" />
              <ArrowWhiteIconStyled src={ArrowWhiteIcon} alt="icon" />
            </ArrowButton>
          </FollowButtonMWrapper>
        </ArticleBlock>
      </ArticleBlockWrapper>

      <DeliveryBlockWrapper>
        <DeliveryImageWrapper>
          <DeliveryImageStyled src={ReorderImage} alt="image" />
        </DeliveryImageWrapper>
        <ArticleBlock
          title={t(topPage.article_delivery.title)}
          desc={t(topPage.article_delivery.description)}
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            color: 'brightTeal',
          }}
        >
          <DeliveryWrapper>
            <DeliveryTopStyled>
              <img src={CarIcon} alt="icon" />
              <p>
                {t(topPage.article_delivery.fees.ship_fees)} <span>550</span>
                {t(topPage.article_delivery.fees.tax)}
              </p>
            </DeliveryTopStyled>
            <DeliveryContentStyled>
              <DeliveryButtonStyled>
                <Button size="small"> {t(topPage.button.additional_options)}</Button>
              </DeliveryButtonStyled>
              <DeliveryTitletStyled>{t(topPage.article_delivery.about_service.title)}</DeliveryTitletStyled>
              <DeliveryDescriptiontStyled>
                {t(topPage.article_delivery.about_service.description)}
                <b>{t(topPage.article_delivery.about_service.delivery_time)}</b>
                {t(topPage.article_delivery.about_service.medication_pickup)}
                <p> {t(topPage.article_delivery.about_service.service_area)}</p>
              </DeliveryDescriptiontStyled>

              <DeliveryInfoBlockStyled>
                <DeliveryLeftStyled>
                  <p>東京都23区エリア</p>
                  {listDelivery.slice(0, 2).map((item) => (
                    <DeliveryInfoItemStyled key={item.id}>
                      <span />
                      <p>
                        <span>{item.title}</span>
                        <span>{item.subTitle}</span>
                      </p>
                    </DeliveryInfoItemStyled>
                  ))}
                </DeliveryLeftStyled>
                <DeliveryLeftStyled type>
                  <p>大阪市24区エリア</p>
                  {listDelivery.slice(2, 5).map((item) => (
                    <DeliveryInfoItemStyled key={item.id}>
                      <span />
                      <p>
                        <span>{item.title}</span>
                        <span>{item.subTitle}</span>
                      </p>
                    </DeliveryInfoItemStyled>
                  ))}
                </DeliveryLeftStyled>
              </DeliveryInfoBlockStyled>

              <NoticeWrapper>
                <p>{t(topPage.article_delivery.notice.note1)}</p>
                <p>{t(topPage.article_delivery.notice.note2)}</p>
                <p>{t(topPage.article_delivery.notice.note3)}</p>
              </NoticeWrapper>
            </DeliveryContentStyled>
          </DeliveryWrapper>
        </ArticleBlock>
      </DeliveryBlockWrapper>

      <ArticleBlock
        title={t(topPage.article_news.title)}
        desc={t(topPage.article_news.description)}
        descStyles={{
          fontSize: 'SIZE_16',
          fontWeight: 'FW_700',
          color: 'brightTeal',
        }}
        backgroundWrapper="white"
      >
        <NewBlockWrapper>
          <NewInfoStyled>
            <span>2024.04.14</span>
            <Link to="#">マイページTOPに、お薬の補充ボタンを設置いたしました。この機会に是非にご利用ください。</Link>
          </NewInfoStyled>
          <NewInfoStyled>
            <span>2024.04.14</span>
            <Link to="#">男性AGAの海外製デュタステリド0.6mgが一時的に欠品しております。</Link>
          </NewInfoStyled>
          <NewInfoStyled>
            <span>2024.04.10</span>
            <Link to="#">マイページTOPに、お薬の補充ボタンを設置いたしました。この機会に是非にご利用ください。</Link>
          </NewInfoStyled>
        </NewBlockWrapper>

        <ButtonWrapper>
          <ArrowButton size="small" onClick={() => dispatch(push(`${RoutesName.NEW}`))}>
            {t(topPage.button.see_list)}
          </ArrowButton>
        </ButtonWrapper>
      </ArticleBlock>

      <ProjectParticipalWrapper>
        <ProjectParticipation>
          <ProjectParticipationText>{t(topPage.project_participation)}</ProjectParticipationText>
          <ProjectParticipationImage src={PraticipalImage} alt="image" />
        </ProjectParticipation>
      </ProjectParticipalWrapper>
    </Wrapper>
  );
};
