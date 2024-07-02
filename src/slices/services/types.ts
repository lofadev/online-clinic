import { IService } from 'types/Service';

export type ServicesState = {
  serviceList: IService[];
  medicalSubjectList: IService[];
  gender: GenderServices;
};
export type GenderServices = 'FOR_MALE' | 'FOR_FEMALE' | 'GENERAL' | 'ALL';
