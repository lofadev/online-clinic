/* eslint-disable no-plusplus */

import { PrefectureCoverProps, PrefectureProps } from 'models';

type DateProps = {
  value: string;
  label: string;
};

export const generateDays = (year, month) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (v, k) => ({
    value: (k + 1).toString().padStart(2, '0'),
    label: (k + 1).toString().padStart(2, '0'),
  }));
};

export const years: DateProps[] = Array.from({ length: 2024 - 1900 + 1 }, (v, k) => ({
  value: (1900 + k).toString(),
  label: (1900 + k).toString(),
}));

export const months: DateProps[] = Array.from({ length: 12 }, (v, k) => ({
  value: (k + 1).toString().padStart(2, '0'),
  label: (k + 1).toString().padStart(2, '0'),
}));

export const coverPrefectureList = (data: PrefectureProps[]): PrefectureCoverProps[] | [] => {
  if (data) {
    const newList: PrefectureCoverProps[] = [];
    data.forEach((item, index) => {
      newList[index] = {
        id: item.id,
        label: item.name_jp,
        value: item.id,
      };
    });
    return newList;
  }
  return [];
};

export const findPrefecture = (id: number, prefectureList: PrefectureProps[]): PrefectureCoverProps | null => {
  const item: PrefectureProps | undefined = prefectureList.find((i) => i.id === id);
  if (item) {
    const newItem = {
      id: item.id,
      value: item.id,
      label: item.name_jp,
    };
    return newItem;
  }
  return null;
};

export const isValidAgeRange = (dob: string) => {
  const [year, month, day] = dob.split('-').map(Number);
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age: number = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 15 && age <= 75;
};
