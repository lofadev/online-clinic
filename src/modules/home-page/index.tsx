import ArticleBlock from 'components/article-block/ArticleBlock';
import { Banner } from 'components/banner';
import { Link } from 'react-router-dom';
import { ArrowButton, Button } from 'components';
import {
  ArticleBlockWrapper,
  ButtonWrapper,
  CurrentIssueItem,
  CurrentIssues,
  CurrentIssuesBlock,
  DeliveryButtonStyled,
  DeliveryContentStyled,
  DeliveryDescriptiontStyled,
  DeliveryInfoBlockStyled,
  DeliveryInfoItemStyled,
  DeliveryLeftStyled,
  DeliveryTitletStyled,
  DeliveryTopStyled,
  DeliveryWrapper,
  FAQGroupStyled,
  FAQSubTitleStyled,
  FAQWrapper,
  FQAFlexBlockStyled,
  FQALeftBlockStyled,
  FQALightIconStyled,
  FQARightBlockStyled,
  FQATopStyled,
  IssueNoteStyled,
  IssueSubtitletStyled,
  IssueTextStyled,
  IssueTitleStyled,
  LeftBlockStyled,
  NewBlockWrapper,
  NewInfoStyled,
  NoticeWrapper,
  ProjectParticipalWrapper,
  ProjectParticipation,
  ProjectParticipationImage,
  ProjectParticipationText,
  UserImageStyled,
  Wrapper,
} from './styled';

export type DeliveryInfoType = {
  type: number;
};

export const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Banner />
      <ArticleBlockWrapper code="#f7f9fc">
        <ArticleBlock title="DMMオンラインクリニックとは？" desc="About" isBackgroundTitle={false} isItalicDesc={false}>
          <CurrentIssuesBlock>
            <LeftBlockStyled>
              <CurrentIssues>
                <CurrentIssueItem>
                  <img
                    src="https://clinic.dmm.com/img/icon/ico_checkMark_primary.svg?id=cff7723dbdb35a4965ff"
                    alt="icon"
                  />
                  <p>「時間が無くて、病院に行くのは面倒くさい・・・」</p>
                </CurrentIssueItem>
                <CurrentIssueItem>
                  <img
                    src="https://clinic.dmm.com/img/icon/ico_checkMark_primary.svg?id=cff7723dbdb35a4965ff"
                    alt="icon"
                  />
                  <p>「時間が無くて、病院に行くのは面倒くさい・・・」</p>
                </CurrentIssueItem>
                <CurrentIssueItem>
                  <img
                    src="https://clinic.dmm.com/img/icon/ico_checkMark_primary.svg?id=cff7723dbdb35a4965ff"
                    alt="icon"
                  />
                  <p>「時間が無くて、病院に行くのは面倒くさい・・・」</p>
                </CurrentIssueItem>
                <CurrentIssueItem>
                  <img
                    src="https://clinic.dmm.com/img/icon/ico_checkMark_primary.svg?id=cff7723dbdb35a4965ff"
                    alt="icon"
                  />
                  <p>「個人輸入薬は危険だと厚労省も注意喚起している し・・・」*1</p>
                </CurrentIssueItem>
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
            <UserImageStyled src="https://clinic.dmm.com/img/pc/top/pic_about_pc@2x.jpg" alt="image" />
          </CurrentIssuesBlock>
          <ButtonWrapper>
            <ArrowButton size="small">当院について</ArrowButton>
          </ButtonWrapper>

          <FAQWrapper>
            <FQAFlexBlockStyled>
              <FQALeftBlockStyled>
                <FQATopStyled>
                  <img src="https://clinic.dmm.com/img/pc/top/ico_faq_speech.svg" width={64} height={65} alt="icon" />
                  <span>よくある質問</span>
                </FQATopStyled>
                <FAQSubTitleStyled>サービスについてのあれこれが知りたい！</FAQSubTitleStyled>
                <FAQGroupStyled>
                  <li>決済方法</li>
                  <li>診察内容</li>
                  <li>お薬</li>
                  <li>など</li>
                </FAQGroupStyled>
              </FQALeftBlockStyled>

              <FQARightBlockStyled>
                <img src="https://clinic.dmm.com/img/pc/top/pic_faq_info.svg" alt="icon" />
                <FQALightIconStyled src="https://clinic.dmm.com/img/pc/top/ico_faq_light.svg" alt="icon" />
              </FQARightBlockStyled>
            </FQAFlexBlockStyled>
            <p style={{ margin: '24px  230px 0 230px' }}>Button</p>
          </FAQWrapper>
        </ArticleBlock>
      </ArticleBlockWrapper>

      <ArticleBlockWrapper code="#F7F9FC">
        <ArticleBlock title="配送料について" desc="Delivery" isBackgroundTitle={false} isItalicDesc={false}>
          <DeliveryWrapper>
            <DeliveryTopStyled>
              <img src="https://clinic.dmm.com/img/pc/top/ico_about_delivery_left.svg" alt="icon" />
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
                <DeliveryLeftStyled type={1}>
                  <p>東京都23区エリア</p>
                  <DeliveryInfoItemStyled>
                    <span />
                    <p>
                      <span>お薬代＋配送料2,550円</span>
                      <span>港区、千代田区、中央区、新宿区、渋谷区</span>
                    </p>
                  </DeliveryInfoItemStyled>
                  <DeliveryInfoItemStyled>
                    <span />
                    <p>
                      <span>お薬代＋配送料3,550円</span>
                      品川区、目黒区、中野区、豊島区、文京区、台東区、 江東区
                      <span />
                    </p>
                  </DeliveryInfoItemStyled>
                </DeliveryLeftStyled>
                <DeliveryLeftStyled type={2}>
                  <p>東京都23区エリア</p>
                  <DeliveryInfoItemStyled>
                    <span />
                    <p>
                      <span>お薬代＋配送料2,550円</span>
                      <span>港区、千代田区、中央区、新宿区、渋谷区</span>
                    </p>
                  </DeliveryInfoItemStyled>
                  <DeliveryInfoItemStyled>
                    <span />
                    <p>
                      <span>お薬代＋配送料3,550円</span>
                      品川区、目黒区、中野区、豊島区、文京区、台東区、 江東区
                      <span />
                    </p>
                  </DeliveryInfoItemStyled>
                  <DeliveryInfoItemStyled>
                    <span />
                    <p>
                      <span>お薬代＋配送料3,550円</span>
                      品川区、目黒区、中野区、豊島区、文京区、台東区、 江東区
                      <span />
                    </p>
                  </DeliveryInfoItemStyled>
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
      </ArticleBlockWrapper>

      <ArticleBlockWrapper code="#fff">
        <ArticleBlock title="お知らせ" desc="News" isBackgroundTitle={false} isItalicDesc={false}>
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
            <ArrowButton size="small">お知らせ一覧はこちら</ArrowButton>
          </ButtonWrapper>
        </ArticleBlock>
      </ArticleBlockWrapper>

      <ProjectParticipalWrapper>
        <ProjectParticipation>
          <ProjectParticipationText>
            合同会社DMM.comは「中小企業からニッポンを元気にプロジェクト」に参画しています
          </ProjectParticipationText>
          <ProjectParticipationImage src="https://clinic.dmm.com/img/pc/top/pic_project_banner_pc.webp?id=2bbee01484689baee9a6" />
        </ProjectParticipation>
      </ProjectParticipalWrapper>

      <div />
    </Wrapper>
  );
};
