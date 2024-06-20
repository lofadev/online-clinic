export interface IMedicationCard {
  id: number;
  avatar: string;
  job: string;
  name: string;
  description: string;
  gender: boolean;
}

export type JobStyleProps = {
  gender: boolean;
};
