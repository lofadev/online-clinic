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
import IconSiekte from 'components/page/siekte';
import history from 'configs/history';
import { translations } from 'locales/translations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import RoutesName from 'routes/constant';
import { useServicesSlice } from 'slices/services';
import { IService } from 'types/service';
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
          {dataServices.length > 0 &&
            dataServices.map((item) => (
              <IconSiekte
                id={item.id}
                icon={item.icon}
                content={item.name}
                gender={item.type}
                path={`/appointment/${item.id}`}
                key={item.id}
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
                    <p>{t(item.text)}</p>
                  </CurrentIssueItem>
                ))}
              </CurrentIssues>
              <IssueTextStyled>{t(topPage.currentIssues.text1)}</IssueTextStyled>
              <IssueTitleStyled>{t(topPage.currentIssues.text2)}</IssueTitleStyled>
              <IssueSubtitletStyled>
                {t(topPage.currentIssues.text3)}
                <br />
                {t(topPage.currentIssues.text4)}
              </IssueSubtitletStyled>
              <IssueNoteStyled>
                {t(topPage.currentIssues.note)}
                <Link to="#">
                  {t(topPage.currentIssues.linkNote)}
                  <br />
                  {t(topPage.currentIssues.linkNote2)}
                </Link>
                {t(topPage.currentIssues.text5)}
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
                  <p>{t(topPage.deliveryInfoBlock.left.title)}</p>
                  {listDelivery.slice(0, 2).map((item) => (
                    <DeliveryInfoItemStyled key={item.id}>
                      <span />
                      <p>
                        <span>{t(item.title)}</span>
                        <span>{t(item.subTitle)}</span>
                      </p>
                    </DeliveryInfoItemStyled>
                  ))}
                </DeliveryLeftStyled>
                <DeliveryLeftStyled type="2">
                  <p>{t(topPage.deliveryInfoBlock.right.title)}</p>
                  {listDelivery.slice(2, 6).map((item) => (
                    <DeliveryInfoItemStyled key={item.id}>
                      <span />
                      <p>
                        <span>{t(item.title)}</span>
                        <span>{t(item.subTitle)}</span>
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
            <span>{t(topPage.article_news.date1)}</span>
            <Link to="#">{t(topPage.article_news.content1)}</Link>
          </NewInfoStyled>
          <NewInfoStyled>
            <span>{t(topPage.article_news.date2)}</span>
            <Link to="#">{t(topPage.article_news.content2)}</Link>
          </NewInfoStyled>
          <NewInfoStyled>
            <span>{t(topPage.article_news.date3)}</span>
            <Link to="#">{t(topPage.article_news.content3)}</Link>
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
