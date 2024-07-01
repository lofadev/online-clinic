import { PropsFlow } from 'components/page/flow';
import { PropsSubject } from 'components/page/medical-subject';
import { PropsSiekte } from 'components/page/siekte';

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
import {
  Delivery,
  DeliveryGeneral,
  Price,
  PriceGeneral,
  SmartPhone,
  SmartPhoneGeneral,
} from 'assets/icons/icon-feature';
import {
  FlowStep1General,
  FlowStep1Male,
  FlowStep2General,
  FlowStep2Male,
  FlowStep3General,
  FlowStep3Male,
} from 'assets/icons/flow';
import { AgaFemaleSubject, AgaMaleSubject, EdMaleSubject } from 'assets/images/medical-subject';
import { MedicalQuery } from 'components/medicalqueries';
import { IMedicationCard } from 'components/slider/type';

export const listDataSiekte: PropsSiekte[] = [
  {
    id: 1,
    icon: Sleep,
    content: '不眠症睡眠障害',
    gender: 'general',
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
    path: '/menu/sleep',
  },
  {
    id: 6,
    icon: Eye,
    content: 'メディカルアイラッシュ',
    gender: 'female',
    path: '/menu/sleep',
  },
  {
    id: 7,
    icon: Fat,
    content: 'メディカルダイエット・肥満症',
    gender: 'general',
    path: '/menu/sleep',
  },
  {
    id: 8,
    icon: Gender,
    content: '性感染症',
    gender: 'general',
    path: '/menu/sleep',
  },
  {
    id: 9,
    icon: Glass,
    content: '花粉症',
    gender: 'general',
    path: '/menu/sleep',
  },
  {
    id: 10,
    icon: Medicine,
    content: 'ドクターズコスメ',
    gender: 'female',
    path: '/menu/sleep',
  },
  {
    id: 11,
    icon: Other,
    content: 'アフターピル',
    gender: 'female',
    path: '/menu/sleep',
  },
  {
    id: 12,
    icon: Skin,
    content: 'メディカルスキンケア',
    gender: 'general',
    path: '/menu/sleep',
  },
  {
    id: 13,
    icon: UV,
    content: '飲む日焼け止め',
    gender: 'female',
    path: '/menu/sleep',
  },
  {
    id: 14,
    icon: Virut,
    content: 'インフルエンザ予防',
    gender: 'general',
    path: '/menu/sleep',
  },
];
export const listDataFeature: PropsSiekte[] = [
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
export const listDataSubject: PropsSubject[] = [
  {
    id: 1,
    gender: 'female',
    picture: AgaFemaleSubject,
    title: '女性AGA',
    content: 'AGAは、誰もが対策する時代。',
    path: '/menu/agafemale',
  },
  {
    id: 2,
    gender: 'male',
    picture: AgaMaleSubject,
    title: '男性AGA',
    content: 'AGAは、誰もが対策する時代。',
    path: '/menu/agamale',
  },
  {
    id: 3,
    gender: 'male',
    picture: EdMaleSubject,
    title: 'ED・早漏防止',
    content: '成人男性の多くが抱える悩み',
    path: '/menu/edmale',
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
