import {
  ArrowWhiteIcon,
  CarIcon,
  CheckMarkIcon,
  CurestationImage,
  PraticipalImage,
  ReorderImage,
  ReserveIcon,
  UserImage,
} from 'assets';
import { Delivery, Price, SmartPhone } from 'assets/icons/icon-feature';
import { ArrowButton, Button } from 'components';
import ArticleBlock from 'components/article-block/ArticleBlock';
import { Banner } from 'components/banner';
import { FAQSection } from 'components/faq-block';
import IconFeature from 'components/page/feature';
import FlowItem from 'components/page/flow';
// import IconSiekte from 'components/page/siekte';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import RoutesName from 'routes/constant';
import { useEffect, useState } from 'react';
import { IService } from 'types/service';
import { useServicesSlice } from 'slices/services';
import IconSiekte from 'components/page/siekte';
import { listCurrentIssue, listDataFlow, listDelivery } from './constant';

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
} from './styled';

export const TopPage: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { topPage } = translations;
  const [dataServices, setDataServices] = useState<IService[]>([]);
  const { fetchServices, serviceList } = useServicesSlice();

  useEffect(() => {
    const fetchDataServices = () => {
      fetchServices('ALL');
    };
    fetchDataServices();
  }, []);

  useEffect(() => {
    if (serviceList.length) {
      setDataServices(serviceList);
    }
  }, [serviceList]);

  return (
    <div>
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
        <SiekteWrapper>
          {dataServices.length &&
            dataServices.map((item) => (
              <IconSiekte
                id={item.id}
                icon={item.icon}
                content={item.name}
                gender={item.type}
                path={`/menu/${item.id}`}
              />
            ))}
        </SiekteWrapper>

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
            <ArrowButton size="small" onClick={() => history.push(`${RoutesName.ABOUT}`)}>
              {t(topPage.button.about)}
            </ArrowButton>
          </ButtonWrapper>

          <FAQSection />
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
            {listDataFlow.length && listDataFlow.map((data) => <FlowItem key={data.id} {...data} />)}
          </FollowBlockStyled>
          <FollowButtonSWrapper>
            <ArrowButton size="small" onClick={() => history.push(`${RoutesName.USAGE}`)}>
              {t(topPage.button.service_info)}
            </ArrowButton>
          </FollowButtonSWrapper>

          <FollowButtonMWrapper>
            <ArrowButton size="small" color="secondary" onClick={() => history.push(`${RoutesName.APPOINTMENT}`)}>
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
                <DeliveryLeftStyled type="2">
                  <p>大阪市24区エリア</p>
                  {listDelivery.slice(2, 6).map((item) => (
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
          <NewInfoStyled isLink>
            <span>2024.04.14</span>
            <Link to="#">マイページTOPに、お薬の補充ボタンを設置いたしました。この機会に是非にご利用ください。</Link>
          </NewInfoStyled>
          <NewInfoStyled>
            <span>2024.04.14</span>
            <Link to="#">対応可能時間は8:00～20:30です。</Link>
          </NewInfoStyled>
          <NewInfoStyled>
            <span>2024.04.10</span>
            <Link to="#">男性AGA・女性AGA・メディカルダイエットなど、一部診療科目が新しいプラン価格となりました。</Link>
          </NewInfoStyled>
        </NewBlockWrapper>

        <ButtonWrapper>
          <ArrowButton size="small" onClick={() => history.push(`${RoutesName.NEW}`)}>
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
    </div>
  );
};
