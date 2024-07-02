export interface IService {
  id: number;
  name: string;
  type: 'FOR_MALE' | 'FOR_FEMALE' | 'GENERAL';
  icon: string;
  image: string;
  insurance_accepted: 0 | 1;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}
