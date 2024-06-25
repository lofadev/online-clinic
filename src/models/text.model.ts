import { FONT_FAMILY_TYPE, FONT_STYLE_TYPE, FONT_WEIGHT_TYPE, SIZE_TYPE, THEME_TYPE } from './type.model';

export interface ITextProps {
  color?: THEME_TYPE;
  fontSize?: SIZE_TYPE;
  fontWeight?: FONT_WEIGHT_TYPE;
  fontStyle?: FONT_STYLE_TYPE;
  fontFamily?: FONT_FAMILY_TYPE;
}
