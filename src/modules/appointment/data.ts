interface IExam {
  label: string;
  detail: string;
}

export const examMenu: IExam[] = [
  { label: '初診', detail: '当院で同診療科目の受診が初めての方' },
  { label: '再診', detail: '当院で同診療科目で一度でも受診歴がある方' },
];
