import { FlowStep1General, FlowStep2General, FlowStep3General } from 'assets/icons/flow';
import { PropsFlow } from 'components/page/flow';
import { IMedicationCard } from 'components/slider/type';

type CurrentIssueType = {
  id: number;
  text: string;
};

type DeliveryInfoType = {
  id: number;
  title: string;
  subTitle: string;
};

export const listDataFlow: PropsFlow[] = [
  {
    id: 1,
    picture: FlowStep1General,
    count: 1,
    title: 'topPage.dataFlow.flow1.title',
    content: 'topPage.dataFlow.flow1.title',
    gender: 'general',
  },
  {
    id: 2,
    picture: FlowStep2General,
    count: 2,
    title: 'topPage.dataFlow.flow2.title',
    content: 'topPage.dataFlow.flow2.title',
    gender: 'general',
  },
  {
    id: 3,
    picture: FlowStep3General,
    count: 3,
    title: 'topPage.dataFlow.flow3.title',
    content: 'topPage.dataFlow.flow3.title',
    gender: 'general',
  },
];

export const listCurrentIssue: CurrentIssueType[] = [
  {
    id: 1,
    text: 'topPage.dataCurrentIssue.text1',
  },
  {
    id: 2,
    text: 'topPage.dataCurrentIssue.text2',
  },
  {
    id: 3,
    text: 'topPage.dataCurrentIssue.text3',
  },
  {
    id: 4,
    text: 'topPage.dataCurrentIssue.text4',
  },
];

export const listDelivery: DeliveryInfoType[] = [
  {
    id: 1,
    title: 'topPage.dataDelivery.delivery1.title',
    subTitle: 'topPage.dataDelivery.delivery1.subTitle',
  },
  {
    id: 2,
    title: 'topPage.dataDelivery.delivery2.title',
    subTitle: 'topPage.dataDelivery.delivery2.subTitle',
  },
  {
    id: 3,
    title: 'topPage.dataDelivery.delivery3.title',
    subTitle: 'topPage.dataDelivery.delivery3.subTitle',
  },
  {
    id: 4,
    title: 'topPage.dataDelivery.delivery4.title',
    subTitle: 'topPage.dataDelivery.delivery4.subTitle',
  },
  {
    id: 5,
    title: 'topPage.dataDelivery.delivery5.title',
    subTitle: 'topPage.dataDelivery.delivery5.subTitle',
  },
  {
    id: 6,
    title: 'topPage.dataDelivery.delivery6.title',
    subTitle: 'topPage.dataDelivery.delivery6.subTitle',
  },
  {
    id: 7,
    title: 'topPage.dataDelivery.delivery7.title',
    subTitle: 'topPage.dataDelivery.delivery7.subTitle',
  },
];

export const dataSlideStaffRecommend: IMedicationCard[] = [
  {
    id: 1,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_2.svg',
    job: 'topPage.dataSlideStaffRecommend.staff1.job',
    name: 'K.K',
    description: 'topPage.dataSlideStaffRecommend.staff1.description',
    gender: true,
  },
  {
    id: 2,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_3.svg',
    job: 'topPage.dataSlideStaffRecommend.staff2.job',
    name: 'A.K',
    description: 'topPage.dataSlideStaffRecommend.staff2.description',
    gender: false,
  },
  {
    id: 3,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_4.svg',
    job: 'topPage.dataSlideStaffRecommend.staff3.job',
    name: 'S.H',
    description: 'topPage.dataSlideStaffRecommend.staff3.description',
    gender: false,
  },
  {
    id: 4,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_1.svg',
    job: 'topPage.dataSlideStaffRecommend.staff4.job',
    name: 'R.H',
    description: 'topPage.dataSlideStaffRecommend.staff4.description',
    gender: false,
  },
];
