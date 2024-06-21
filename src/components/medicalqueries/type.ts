export type MedicalQuery = {
  id: string;
  text: string;
  url: string;
};

export interface IMedicalQuery {
  data: MedicalQuery[];
  gender: boolean;
}

export type TextProps = {
  gender: boolean;
};
