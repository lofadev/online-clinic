import { TOptions } from 'models';
import { IService } from 'slices/appointment/types';

export const transformDataSelect = (data: IService[] | null) => {
  let result: TOptions[] = [{ label: '選択してください', value: 0 }];
  if (data) {
    const options = data.map((item) => ({ label: item.name, value: item.id }));
    result = [...result, ...options];
  }
  return result;
};
