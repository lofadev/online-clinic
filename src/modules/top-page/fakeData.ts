import { FlowStep1General, FlowStep2General, FlowStep3General } from 'assets/icons/flow';
import { Delivery, Price, SmartPhone } from 'assets/icons/icon-feature';
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
} from 'assets/icons/icon-siekte';
import { PropsFlow } from 'components/page/flow';
import { PropsSiekte } from 'components/page/siekte';

type CurrentIssueType = {
  id: number;
  text: string;
};

type DeliveryInfoType = {
  id: number;
  title: string;
  subTitle: string;
};

export const listDataSiekte: PropsSiekte[] = [
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
];

export const listDataFlow: PropsFlow[] = [
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

export const listCurrentIssue: CurrentIssueType[] = [
  {
    id: 1,
    text: '時間が無くて、病院に行くのは面倒くさい・・・」',
  },
  {
    id: 2,
    text: '「個人輸入薬は危険だと厚労省も注意喚起している し・・・」*1',
  },
  {
    id: 3,
    text: '時間が無くて、病院に行くのは面倒くさい・・・」',
  },
  {
    id: 3,
    text: '時間が無くて、病院に行くのは面倒くさい・・・」',
  },
];

export const listDelivery: DeliveryInfoType[] = [
  {
    id: 1,
    title: 'お薬代＋配送料2,550円',
    subTitle: '港区、千代田区、中央区、新宿区、渋谷区',
  },
  {
    id: 2,
    title: 'お薬代＋配送料2,550円',
    subTitle: '港区、千代田区、中央区、新宿区、渋谷区',
  },
  {
    id: 3,
    title: 'お薬代＋配送料3,550円',
    subTitle: '品川区、目黒区、中野区、豊島区、文京区、台東区、 江東区',
  },
  {
    id: 4,
    title: 'お薬代＋配送料3,550円',
    subTitle: '品川区、目黒区、中野区、豊島区、文京区、台東区、 江東区',
  },
  {
    id: 5,
    title: 'お薬代＋配送料2,550円',
    subTitle: '千代田区、中央区、新宿区、渋谷区',
  },
  {
    id: 6,
    title: 'お薬代＋配送料3,550円',
    subTitle: '品川区、目黒区、中野区、豊島区、文京区、台東区、 江東区',
  },
];
