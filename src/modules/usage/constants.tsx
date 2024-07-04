import { PropsAppointment } from 'components/page/appointment';
import { PropsCommitment } from 'components/page/commitment';
import { Point1, Point2, Point3, Point4 } from 'assets/images/commitment';
import { ChildrenAppointment, ChildrenStyle, ContentChildren, LinkChildren, LinkStyle, SubContent } from './styled';

export const listDataApointment: PropsAppointment[] = [
  {
    id: 1,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_01_pc.webp?=20240221',
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
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_02_pc.webp?=20240221',
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
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_03_pc.webp?=20240221',
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
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_04_pc.webp?=20240221',
    step: 4,
    title: '個人情報の登録',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          受診の際に必要な基本情報の入力画面が表示されますので、画面に沿ってご入力ください。
        </ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 5,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_05_pc.webp?=20240221',
    step: 5,
    title: '認証コードの入力',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          step2にて「会員登録して日時確定する」を選択された方は、個人情報登録後、認証コードの確認が必要になります。
        </ContentChildren>
        <ContentChildren>※DMM会員登録をすでに行なっている方は表示されません。</ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 6,
    picture: '	https://clinic.dmm.com/images/usage/pic_usage_appointment_06_pc.webp?=20240221',
    step: 6,
    title: '予約内容の確認',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          予約内容の確認個人情報の入力後、予約内容が表示されます。内容に問題がないか確認の上「予約する」ボタンを選択ください。
        </ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 7,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_07_pc.webp?=20240221',
    step: 7,
    title: '予約完了',
    children: (
      <ChildrenAppointment>
        <ContentChildren>予約完了後、診療予約完了ページが表示されます。</ContentChildren>
        <ContentChildren>
          診療開始までに入力が必要な情報が表示されますので、ステップに合わせて入力ください。
        </ContentChildren>
      </ChildrenAppointment>
    ),
  },
];

export const listDataFlowDay: PropsAppointment[] = [
  {
    id: 1,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_appointment_01_pc.webp?=20240221',
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
    id: 2,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_flowoftheday_02_pc.webp?=20240221',
    step: 2,
    title: '診療の流れ',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          初めに、医師との診察です。ご記入いただいた問診票をもとに、ご体調の確認や処方薬のご説明などを行います。
        </ContentChildren>
        <ContentChildren>診察が終わり次第、お薬の金額やお支払い方法、配送方法などを説明いたします。</ContentChildren>
        <SubContent>※ 2023年11月より診察の流れを変更しました。</SubContent>
      </ChildrenAppointment>
    ),
  },
  {
    id: 3,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_flowoftheday_03_pc.webp?=20240221',
    step: 3,
    title: '診療後の流れ',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          診察後、確認した金額にて決済を行い、決済が完了次第、お薬の配送手配に進ませていただきます。
        </ContentChildren>
        <ContentChildren>
          決済情報については、決済完了後に「診療一覧」ページの「診療済み」へ表示されますのでご確認ください
        </ContentChildren>
      </ChildrenAppointment>
    ),
  },
];
export const listDataOrder: PropsAppointment[] = [
  {
    id: 1,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_order_01_pc.webp?=20240221',
    step: 1,
    title: '追加配送ボタンをクリック',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          追加配送ページから再度購入したいお薬の診療履歴を選択し、「追加配送」ボタンを押下してください。
        </ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 2,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_order_02_pc.webp?=20240221',
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
          <LinkStyle href="/blog/1" target="blank">
            申請方法について詳しく
          </LinkStyle>
        </LinkChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 3,
    picture: '	https://clinic.dmm.com/images/usage/pic_usage_order_03_pc.webp?=20240221',
    step: 3,
    title: '追加配送注文内容の確認',
    children: (
      <ChildrenAppointment>
        <ContentChildren>申請内容の確認画面が表示されます。</ContentChildren>
        <ContentChildren>内容を確認し「注文を確定する」ボタンを選択してください。</ContentChildren>
      </ChildrenAppointment>
    ),
  },
  {
    id: 4,
    picture: 'https://clinic.dmm.com/images/usage/pic_usage_order_04_pc.webp?=20240221',
    step: 4,
    title: '追加配送注文の完了',
    children: (
      <ChildrenAppointment>
        <ContentChildren>
          こちらの画面が表示されましたら、注文完了です。 配送までしばらくお待ちください。
        </ContentChildren>
        <SubContent>※ 確認事項がある場合のみ、ご連絡させていただきます。</SubContent>
      </ChildrenAppointment>
    ),
  },
];
export const listDataCommitment: PropsCommitment[] = [
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
