import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Delivery,
  DeliveryGeneral,
  Price,
  PriceGeneral,
  SmartPhone,
  SmartPhoneGeneral,
} from 'assets/icons/icon-feature';
import { FlowStep1General, FlowStep2General, FlowStep3General } from 'assets/icons/flow';
import { DeliveryReason, PriceReason, VideoCallReason } from 'assets/icons/reason';
import { AgaFemaleSubject, AgaMaleSubject, EdMaleSubject } from 'assets/images/medical-subject';
import { Point1, Point2, Point3, Point4 } from 'assets/images/commitment';
import { BookingStep1, BookingStep2, BookingStep3, ConsultationStep1, OderStep2 } from 'assets/images/apointment';
import {
  Body,
  Cosmetic,
  Eye,
  Fat,
  FemaleAGA,
  Gender,
  Glass,
  Medicine,
  MenAGA,
  Other,
  Skin,
  Sleep,
  UV,
  Virut,
} from 'assets/icons/icon-siekte/index';
import IconSiekte, { PropsSiekte } from '../../components/page/siekte';
import FlowItem, { PropsFlow } from '../../components/page/flow';
import IconReason, { PropsReason } from '../../components/page/reason';
import MedicalSubject, { PropsSubject } from '../../components/page/medical-subject';
import Commitment, { PropsCommitment } from '../../components/page/commitment';
import Appointment, { PropsAppointment } from '../../components/page/appointment';
import DrColumn, { PropsDrColumn } from '../../components/page/dr-column';
import {
  LinkStyle,
  ChildrenAppointment,
  ChildrenStyle,
  ContentChildren,
  FlowItemContainer,
  LinkChildren,
  SubContent,
} from './style';
import IconFeature from '../../components/page/feature';

const listDataSiekte: PropsSiekte[] = [
  {
    id: 1,
    icon: Sleep,
    content: '不眠症睡眠障害',
    gender: 'general',
    disable: true,
    path: '/menu/sleep',
  },
  {
    id: 2,
    icon: MenAGA,
    content: '男性AGA',
    gender: 'male',
    path: '/menu/menaga',
  },
  {
    id: 3,
    icon: FemaleAGA,
    content: '女性AGA',
    gender: 'female',
    path: '/menu/femalega',
  },
  {
    id: 4,
    icon: Body,
    content: 'ED早漏防止',
    gender: 'male',
    path: '/menu/body',
  },
  {
    id: 5,
    icon: Cosmetic,
    content: 'ピル',
    gender: 'general',
  },
  {
    id: 6,
    icon: Eye,
    content: 'メディカルアイラッシュ',
    gender: 'female',
    disable: true,
  },
  {
    id: 7,
    icon: Fat,
    content: 'メディカルダイエット・肥満症',
    gender: 'general',
    disable: true,
  },
  {
    id: 8,
    icon: Gender,
    content: '性感染症',
    gender: 'general',
  },
  {
    id: 9,
    icon: Glass,
    content: '花粉症',
    gender: 'general',
  },
  {
    id: 10,
    icon: Medicine,
    content: 'ドクターズコスメ',
    gender: 'female',
  },
  {
    id: 11,
    icon: Other,
    content: 'アフターピル',
    gender: 'female',
  },
  {
    id: 12,
    icon: Skin,
    content: 'メディカルスキンケア',
    gender: 'general',
  },
  {
    id: 13,
    icon: UV,
    content: '飲む日焼け止め',
    gender: 'female',
  },
  {
    id: 14,
    icon: Virut,
    content: 'インフルエンザ予防',
    gender: 'general',
  },
];

const listDataFeature: PropsSiekte[] = [
  {
    id: 1,
    icon: Price,
    content: '続けやすい安心の価格',
    gender: 'general',
  },
  {
    id: 2,
    icon: Delivery,
    content: '最短当日到着',
    gender: 'general',
  },
  {
    id: 3,
    icon: SmartPhone,
    content: '初診でもすぐに受診可能',
    gender: 'general',
  },
  {
    id: 4,
    icon: PriceGeneral,
    content: '続けやすい安心の価格',
    gender: 'male',
  },
  {
    id: 5,
    icon: DeliveryGeneral,
    content: '最短当日到着',
    gender: 'male',
  },
  {
    id: 6,
    icon: SmartPhoneGeneral,
    content: '初診でもすぐに受診可能',
    gender: 'male',
  },
  {
    id: 7,
    icon: PriceGeneral,
    content: '続けやすい安心の価格',
    gender: 'female',
  },
  {
    id: 8,
    icon: DeliveryGeneral,
    content: '最短当日到着',
    gender: 'female',
  },
  {
    id: 9,
    icon: SmartPhoneGeneral,
    content: '初診でもすぐに受診可能',
    gender: 'female',
  },
];

const listDataFlow: PropsFlow[] = [
  {
    id: 1,
    picture: FlowStep1General,
    count: 1,
    title: '受診したい日時、診療内容を予約',
    content: 'スマホ・PCで簡単！予約の管理も行えます！',
    gender: 'male',
  },
  {
    id: 2,
    picture: FlowStep2General,
    count: 2,
    title: '診療',
    content: 'ビデオツールで診察します！複数科目の同時受診も可能です。',
    gender: 'female',
  },
  {
    id: 3,
    picture: FlowStep3General,
    count: 3,
    title: 'お薬の受け取り',
    content: 'ご自宅や、コンビニへの配送も可能です！',
    gender: 'general',
  },
];

const listDataReason: PropsReason[] = [
  {
    id: 1,
    icon: <PriceReason />,
    content: '続けやすい安心の価格',
    gender: 'male',
  },
  {
    id: 2,
    icon: <DeliveryReason />,
    content: '最短当日到着',
    gender: 'female',
  },
  {
    id: 3,
    icon: <VideoCallReason />,
    content: '自宅にいながら受診が可能',
    gender: 'general',
  },
];

const listDataSubject: PropsSubject[] = [
  {
    id: 1,
    picture: AgaFemaleSubject,
    title: '女性AGA',
    content: 'AGAは、誰もが対策する時代。',
    path: '/menu/agafemale',
  },
  {
    id: 2,
    picture: AgaMaleSubject,
    title: '男性AGA',
    content: 'AGAは、誰もが対策する時代。',
    path: '/menu/agamale',
  },
  {
    id: 3,
    picture: EdMaleSubject,
    title: 'ED・早漏防止',
    content: '成人男性の多くが抱える悩み',
    path: '/menu/edmale',
  },
];

const listDataApointment: PropsAppointment[] = [
  {
    id: 1,
    picture: BookingStep1,
    step: 1,
    title: '診療予約ボタンをクリック',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          サービスサイトの 「
          <LinkStyle href="/path" target="blank">
            診療予約
          </LinkStyle>
          」ボタンをクリックしてください。
        </ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 2,
    picture: BookingStep2,
    step: 2,
    title: '診療メニュー・日時選択',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          予約したい科目や日時を選択してください。
          DMM会員登録をしている方は「ログインして日時確定する」を選択しstep3へ、DMM会員登録をしていない方は「会員登録して日時確定する」を選択しstep4を確認ください。
        </ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 3,
    picture: BookingStep3,
    step: 3,
    title: 'DMMアカウントログイン',
    children: (
      <ChildrenAppointment>
        <ContentChildren>アカウントをお持ちの方はログインしてください。</ContentChildren>
        <ContentChildren>※すでにログインされている場合は、こちらの画面は表示されません。</ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 4,
    picture: ConsultationStep1,
    step: 1,
    title: '診療の開始',
    children: (
      <ChildrenAppointment>
        <ContentChildren>当日は、ご予約時間前にマイページへログインをお願いいたします。</ContentChildren>
        <ContentChildren>
          診療前情報の入力が完了すると、マイページTOPまたは診療一覧ページに表示されている「診療開始」ボタンがクリック可能となります。別画面でビデオツールが表示されますので、ビデオと音声をONにしてお待ちください。
        </ContentChildren>
        <SubContent>※ 診療開始前に、必ず情報のご入力をお願いいたします。</SubContent>
      </ChildrenAppointment>
    ),
  },
  {
    id: 5,
    picture: OderStep2,
    step: 2,
    title: '申請内容を入力',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          追加配送申請・注文の画面で、「お薬・数量選択」下の「現在の処方薬から選択」を選択し、お薬を選んでください。
        </ContentChildren>
        <ContentChildren>
          選択後、画面下に請求金額、配送先、決済方法が表示されるのでご確認いただき「次へ」ボタンを押下してください。
        </ContentChildren>
        <LinkChildren>
          <LinkStyle href="/path" target="blank">
            申請方法について詳しく
          </LinkStyle>
        </LinkChildren>
      </ChildrenAppointment>
    ),
  },
];

const listDataDrColumn: PropsDrColumn[] = [
  {
    id: 1,
    picture: AgaMaleSubject,
    title: 'リジンと薄毛の関係って？ 毛髪への効果を解説',
    content:
      'AGA対策として「リジン」のサプリメントを飲んでいる方のなかには、どのような 効果があるのか詳しく知らない方もいるのではないでしょうか。今回の記事では、リジンを摂ることで「毛髪が増える」「毛量の減少を防ぐ」可能性･･･',
    siekte: '男性AGA',
    date: '2024/06/03',
    confirm: '三上　修',
    path: '/column/aga-male/2551/',
  },
  {
    id: 2,
    picture: AgaFemaleSubject,
    title: '新型コロナウイルス感染の後遺症としての抜け毛について解説',
    content:
      '新型コロナウイルスは感染後も数ヶ月以上持続する症状を引き起こし、後遺症（罹患後症状）と呼ばれています。後遺症の症状は多彩で、息切れ、咳・痰など呼 吸器症状、胸の痛みや動悸などの循環器症･･･',
    siekte: 'その他',
    date: '2024/05/28',
    confirm: '三上　修',
    path: '/column/aga-male/2552/',
  },
];

const listDataCommitment: PropsCommitment[] = [
  {
    id: 1,
    picture: Point1,
    point: 1,
    title: '続けやすい安心の価格',
    content: [
      {
        id: 1,
        text: '個人輸入通販サイトなどでは、偽物が紛れていたり不純物が混入していたりと大変危険です。',
      },
      { id: 2, text: '当院では、安心・安全な正規品を、継続しやすい費用でお届けします。' },
    ],
  },
  {
    id: 2,
    picture: Point2,
    point: 2,
    title: '最短当日到着',
    content: [
      {
        id: 1,
        text: '通院や薬局でのお薬処方に、もう長時間待つ必要はありません。',
      },
      {
        id: 1,
        text: 'ご自宅やコンビニなどお好きな場所、お好きな時間にお薬が届きます。',
      },
    ],
  },
  {
    id: 3,
    picture: Point3,
    point: 3,
    title: '初診でもすぐに受診可能',
    content: [
      {
        id: 1,
        text: 'わざわざ病院まで行かなくてももう大丈夫。',
      },
      {
        id: 2,
        text: 'インターネット環境とスマホやPCなどのデバイスさえあれば、自宅やオフィスなどお好きな場所から受診することが可能です。',
      },
    ],
  },
  {
    id: 4,
    picture: Point4,
    point: 4,
    title: '安心のセキュリティ',
    content: [
      {
        id: 1,
        text: 'DMMオンラインクリニックは機密情報を守る国際基準をクリアしていることを証明する「ISMS認証」を取得しています。',
      },
      {
        id: 2,
        text: 'お客様の大事な情報もセキュリティ性の高い情報管理システムで守られていますので安心です。',
      },
    ],
    children: (
      <ChildrenStyle>
        <div>
          <div>認証基準ISO27001:2013(JISQ27001:2014)</div>
          <div>認証番号JQA-IM2014</div>
        </div>
      </ChildrenStyle>
    ),
  },
];

export const TopPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Top Page</title>
        <meta name="description" content="Top Page" />
      </Helmet>

      <FlowItemContainer>
        {listDataSiekte.length && listDataSiekte.map((data) => <IconSiekte {...data} />)}
      </FlowItemContainer>

      <FlowItemContainer>
        {listDataFeature.length && listDataFeature.map((data) => <IconFeature {...data} />)}
      </FlowItemContainer>

      <FlowItemContainer>{listDataFlow.length && listDataFlow.map((data) => <FlowItem {...data} />)}</FlowItemContainer>

      <FlowItemContainer>
        {listDataReason.length && listDataReason.map((data) => <IconReason {...data} />)}
      </FlowItemContainer>

      <FlowItemContainer>
        {listDataSubject.length && listDataSubject.map((data) => <MedicalSubject {...data} />)}
      </FlowItemContainer>

      <FlowItemContainer>
        {listDataCommitment.length && listDataCommitment.map((data) => <Commitment {...data} />)}
      </FlowItemContainer>

      <FlowItemContainer>
        {listDataApointment.length && listDataApointment.map((data) => <Appointment {...data} />)}
      </FlowItemContainer>

      <FlowItemContainer>
        {listDataDrColumn.length && listDataDrColumn.map((data) => <DrColumn {...data} />)}
      </FlowItemContainer>
    </>
  );
};
