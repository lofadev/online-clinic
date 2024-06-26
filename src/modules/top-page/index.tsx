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
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import RoutesName from 'routes/constant';
import { push } from 'redux-first-history';

import { listCurrentIssue, listDataFeature, listDataFlow, listDataSiekte, listDelivery } from './fakeData';
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

  return (
    <Wrapper>
      <Banner />
      <ArticleBlock
        title="オンライン診療一覧から探す?"
        desc="Medical Subjects"
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

        <MediaTextStyled>※保険診療は別サイトに遷移します</MediaTextStyled>
      </ArticleBlock>

      <ArticleBlockWrapper>
        <ArticleBlock
          title="DMMオンラインクリニックとは?"
          desc="About"
          descStyles={{
            fontSize: 'SIZE_16',
            fontWeight: 'FW_700',
            color: 'brightTeal',
          }}
          backgroundWrapper="extraBlue"
        >
          <AboutTopBlock>
            {listDataFeature.length && listDataFeature.map((data) => <IconFeature {...data} />)}
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
              当院について
            </ArrowButton>
          </ButtonWrapper>

          <FAQWrapper>
            <FAQFlexBlockStyled>
              <FAQLeftBlockStyled>
                <FAQTopStyled>
                  <img src={SpeechIcon} alt="icon" />
                  <span>よくある質問</span>
                </FAQTopStyled>
                <FAQSubTitleStyled>サービスについてのあれこれが知りたい！</FAQSubTitleStyled>
                <FAQGroupStyled>
                  <li>決済方法</li>
                  <li>診察内容</li>
                  <li>お薬</li>
                  <li>など</li>
                </FAQGroupStyled>
              </FAQLeftBlockStyled>

              <FAQRightBlockStyled>
                <img src={InfoIcon} alt="icon" />
                <FAQLightIconStyled src={LightIcon} alt="icon" />
              </FAQRightBlockStyled>
            </FAQFlexBlockStyled>
            <ButtonWrapper>
              <ArrowButton size="small" onClick={() => dispatch(push(`${RoutesName.FAQ}`))}>
                よくある質問はこちら
              </ArrowButton>
            </ButtonWrapper>
          </FAQWrapper>
        </ArticleBlock>
      </ArticleBlockWrapper>

      <ArticleBlockWrapper>
        <ArticleBlock
          title="オンライン診療の流れ"
          desc="Flow"
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
              詳しい使い方はこちら
            </ArrowButton>
          </FollowButtonSWrapper>

          <FollowButtonMWrapper>
            <ArrowButton size="small" color="secondary" onClick={() => dispatch(push(`${RoutesName.APPOINTMENT}`))}>
              診療予約をする
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
          title="配送料について"
          desc="Delivery"
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
                全国配送対応 配送料一律 <span>550</span>(税込)
              </p>
            </DeliveryTopStyled>
            <DeliveryContentStyled>
              <DeliveryButtonStyled>
                <Button size="small">追加オプション</Button>
              </DeliveryButtonStyled>
              <DeliveryTitletStyled>バイク便ならすぐ届く！</DeliveryTitletStyled>
              <DeliveryDescriptiontStyled>
                お薬の受け取りが可能なサービスです。<b>3時間程度で</b>
                お薬の受け取りが可能なサービスです。
                <p>東京都23区、大阪市24区エリアで対応しています。</p>
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
                  <p>東京都23区エリア</p>
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
                <p>※土日祝はお薬代+配送料+別途1,000円がかかります。</p>
                <p>※対応可能時間は8:00～20:30です。</p>
                <p>※交通量の状況で多少配達が遅れる場合がございます。</p>
              </NoticeWrapper>
            </DeliveryContentStyled>
          </DeliveryWrapper>
        </ArticleBlock>
      </DeliveryBlockWrapper>

      <ArticleBlock
        title="お知らせ"
        desc="News"
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
            お知らせ一覧はこちら
          </ArrowButton>
        </ButtonWrapper>
      </ArticleBlock>

      <ProjectParticipalWrapper>
        <ProjectParticipation>
          <ProjectParticipationText>
            合同会社DMM.comは「中小企業からニッポンを元気にプロジェクト」に参画しています
          </ProjectParticipationText>
          <ProjectParticipationImage src={PraticipalImage} alt="image" />
        </ProjectParticipation>
      </ProjectParticipalWrapper>
    </Wrapper>
  );
};
