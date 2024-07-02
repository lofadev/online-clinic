import { themes } from 'styles';
import { FONT_FAMILY, FONT_WEIGHT, SIZE, FONT_STYLE } from 'styles/styleConstants';

export type SIZE_TYPE = keyof typeof SIZE;
export type FONT_WEIGHT_TYPE = keyof typeof FONT_WEIGHT;
export type FONT_FAMILY_TYPE = keyof typeof FONT_FAMILY;
export type FONT_STYLE_TYPE = keyof typeof FONT_STYLE;
export type THEME_TYPE = keyof typeof themes.light;
export type TOptions = {
  label: string | number;
  value: string | number;
};
