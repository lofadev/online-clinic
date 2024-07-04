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
    content: 'genderPage.dataFeature.content1',
    gender: 'general',
  },
  {
    id: 2,
    icon: Delivery,
    content: 'genderPage.dataFeature.content2',
    gender: 'general',
  },
  {
    id: 3,
    icon: SmartPhone,
    content: 'genderPage.dataFeature.content3',
    gender: 'general',
  },
  {
    id: 4,
    icon: PriceGeneral,
    content: 'genderPage.dataFeature.content4',
    gender: 'male',
  },
  {
    id: 5,
    icon: DeliveryGeneral,
    content: 'genderPage.dataFeature.content5',
    gender: 'male',
  },
  {
    id: 6,
    icon: SmartPhoneGeneral,
    content: 'genderPage.dataFeature.content6',
    gender: 'male',
  },
  {
    id: 7,
    icon: PriceGeneral,
    content: 'genderPage.dataFeature.content7',
    gender: 'female',
  },
  {
    id: 8,
    icon: DeliveryGeneral,
    content: 'genderPage.dataFeature.content8',
    gender: 'female',
  },
  {
    id: 9,
    icon: SmartPhoneGeneral,
    content: 'genderPage.dataFeature.content9',
    gender: 'female',
  },
];
export const listDataFlow: PropsFlow[] = [
  {
    id: 1,
    picture: FlowStep1General,
    count: 1,
    title: 'genderPage.dataFlow.flow1.title',
    content: 'genderPage.dataFlow.flow1.content',
    gender: 'female',
  },
  {
    id: 2,
    picture: FlowStep2General,
    count: 2,
    title: 'genderPage.dataFlow.flow2.title',
    content: 'genderPage.dataFlow.flow2.content',
    gender: 'female',
  },
  {
    id: 3,
    picture: FlowStep3General,
    count: 3,
    title: 'genderPage.dataFlow.flow3.title',
    content: 'genderPage.dataFlow.flow3.content',
    gender: 'female',
  },
  {
    id: 4,
    picture: FlowStep1Male,
    count: 1,
    title: 'genderPage.dataFlow.flow4.title',
    content: 'genderPage.dataFlow.flow4.content',
    gender: 'male',
  },
  {
    id: 5,
    picture: FlowStep2Male,
    count: 2,
    title: 'genderPage.dataFlow.flow5.title',
    content: 'genderPage.dataFlow.flow5.content',
    gender: 'male',
  },
  {
    id: 6,
    picture: FlowStep3Male,
    count: 3,
    title: 'genderPage.dataFlow.flow6.title',
    content: 'genderPage.dataFlow.flow6.content',
    gender: 'male',
  },
];
export const dataMedicalQueryMale: MedicalQuery[] = [
  {
    id: '1',
    text: 'genderPage.dataMedicalQueryMale.Medical1.textMale',
    url: 'https://clinic.dmm.com/images/gender/male/pic_for3points_1.svg',
  },
  {
    id: '2',
    text: 'genderPage.dataMedicalQueryMale.Medical2.textMale',
    url: 'https://clinic.dmm.com/images/gender/male/pic_for3points_2.svg',
  },
  {
    id: '3',
    text: 'genderPage.dataMedicalQueryMale.Medical3.textMale',
    url: 'https://clinic.dmm.com/images/gender/male/pic_for3points_3.svg',
  },
];
export const dataMedicalQueryFemale: MedicalQuery[] = [
  {
    id: '1',
    text: 'genderPage.dataMedicalQueryMale.Medical1.textFeMale',
    url: 'https://clinic.dmm.com/images/gender/female/pic_for3points_1.svg',
  },
  {
    id: '2',
    text: 'genderPage.dataMedicalQueryMale.Medical2.textFeMale',
    url: 'https://clinic.dmm.com/images/gender/female/pic_for3points_2.svg',
  },
  {
    id: '3',
    text: 'genderPage.dataMedicalQueryMale.Medical3.textFeMale',
    url: 'https://clinic.dmm.com/images/gender/female/pic_for3points_3.svg',
  },
];
export const dataSlideStaffRecommend: IMedicationCard[] = [
  {
    id: 1,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_2.svg',
    job: 'genderPage.dataSlideStaffRecommend.staff1.job',
    name: 'K.K',
    description: 'genderPage.dataSlideStaffRecommend.staff1.description',
    gender: true,
  },
  {
    id: 2,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_3.svg',
    job: 'genderPage.dataSlideStaffRecommend.staff2.job',
    name: 'A.K',
    description: 'genderPage.dataSlideStaffRecommend.staff2.description',
    gender: false,
  },
  {
    id: 3,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_4.svg',
    job: 'genderPage.dataSlideStaffRecommend.staff3.job',
    name: 'S.H',
    description: 'genderPage.dataSlideStaffRecommend.staff3.description',
    gender: false,
  },
  {
    id: 4,
    avatar: 'https://clinic.dmm.com/images/gender/pic_staff_1.svg',
    job: 'genderPage.dataSlideStaffRecommend.staff4.job',
    name: 'R.H',
    description: 'genderPage.dataSlideStaffRecommend.staff4.description',
    gender: false,
  },
];
