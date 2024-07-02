import { PropsFlow } from 'components/page/flow';

import {
  FlowStep1General,
  FlowStep1Male,
  FlowStep2General,
  FlowStep2Male,
  FlowStep3General,
  FlowStep3Male,
} from 'assets/icons/flow';
import { MedicalQuery } from 'components/medicalqueries';
import { IMedicationCard } from 'components/slider/type';
import {
  Price,
  Delivery,
  SmartPhone,
  PriceGeneral,
  DeliveryGeneral,
  SmartPhoneGeneral,
} from 'assets/icons/icon-feature';
import { PropsFeature } from 'components/page/feature';

export const listDataFeature: PropsFeature[] = [
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
export const listDataFlow: PropsFlow[] = [
  {
    id: 1,
    picture: FlowStep1General,
    count: 1,
    title: '受診したい日時、診療内容を予約',
    content: 'スマホ・PCで簡単！予約の管理も行えます！',
    gender: 'female',
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
    gender: 'female',
  },
  {
    id: 4,
    picture: FlowStep1Male,
    count: 1,
    title: '受診したい日時、診療内容を予約',
    content: 'スマホ・PCで簡単！予約の管理も行えます！',
    gender: 'male',
  },
  {
    id: 5,
    picture: FlowStep2Male,
    count: 2,
    title: '診療',
    content: 'ビデオツールで診察します！複数科目の同時受診も可能です。',
    gender: 'male',
  },
  {
    id: 6,
    picture: FlowStep3Male,
    count: 3,
    title: 'お薬の受け取り',
    content: 'ご自宅や、コンビニへの配送も可能です！',
    gender: 'male',
  },
];
export const dataMedicalQueryMale: MedicalQuery[] = [
  {
    id: '1',
    text: '仕事の合間や土日に 診療をしてほしい',
    url: 'https://clinic.dmm.com/images/gender/male/pic_for3points_1.svg',
  },
  {
    id: '2',
    text: 'プライバシーが 気になる',
    url: 'https://clinic.dmm.com/images/gender/male/pic_for3points_2.svg',
  },
  {
    id: '3',
    text: 'お薬が家に 届けばいいのに...',
    url: 'https://clinic.dmm.com/images/gender/male/pic_for3points_3.svg',
  },
];
export const dataMedicalQueryFemale: MedicalQuery[] = [
  {
    id: '1',
    text: '時間がなくて 通院できない 続かない',
    url: 'https://clinic.dmm.com/images/gender/female/pic_for3points_1.svg',
  },
  {
    id: '2',
    text: '繰り返す症状に そろそろちゃんと 向き合いたい...',
    url: 'https://clinic.dmm.com/images/gender/female/pic_for3points_2.svg',
  },
  {
    id: '3',
    text: 'お薬が家に 届けばいいのに...',
    url: 'https://clinic.dmm.com/images/gender/female/pic_for3points_3.svg',
  },
];
export const dataSlideStaffRecommend: IMedicationCard[] = [
  {
    id: 1,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_2.svg',
    job: '医師',
    name: 'K.K',
    description:
      '診察費用が無料なので、まずは症状や気になる薬のご相談を目的に予約していただければと思います。薬の処方を受ける場合もかかる費用は送料と薬代のみです。',
    gender: true,
  },
  {
    id: 2,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_3.svg',
    job: 'カウンセラー',
    name: 'A.K',
    description:
      'カウンセリングから医師の診察まで多くの場合が10分以内に終了するのも当院の魅力だと思います。都合の良い時間に、自宅から診察できるのは便利ですね！',
    gender: false,
  },
  {
    id: 3,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_4.svg',
    job: '医師',
    name: 'S.H',
    description:
      '再診で再度担当する時に、体調が以前より改善したことをお話しいただけるととても嬉しくなります。再診も診察料は無料なので、続けやすいのではないでしょうか。',
    gender: false,
  },
  {
    id: 4,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_1.svg',
    job: '薬剤師',
    name: 'R.H',
    description:
      'クリニックだから処方のできる、高い効果が期待できる医薬品を揃えています。自由診療ではありますが、比較的安価で処方を受けられるので気になる症状がある方はぜひ試していただきたいです。',
    gender: false,
  },
];
