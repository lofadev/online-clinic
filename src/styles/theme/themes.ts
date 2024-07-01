const lightTheme = {
  primary: '#13C4CE',
  secondary: '#3374CD',
  tertiary: '#F35F71',
  quaternary: '#00C17C',
  lightGray: '#E1E2EB',
  lightBlue: '#ECFAFF',
  extraBlue: '#F7F9FC',
  brightTeal: '#03AFB9',
  white: '#fff',
  transparent: 'transparent',
  darkPurple: '#6C77B4',
  blue: '#42B2E9',
  orange: '#FF9255',
  purple: '#9483DA',
  maleColor: '#1651b0',
  femaleColor: '#f35f71',

  textPrimary: '#3F4F5F',
  textDanger: '#F2596B',
};

export type Theme = typeof lightTheme;

const darkTheme: Theme = {
  primary: '#13C4CE',
  secondary: '#3374CD',
  tertiary: '#F35F71',
  quaternary: '#00C17C',
  lightGray: '#E1E2EB',
  lightBlue: '#ECFAFF',
  extraBlue: '#F7F9FC',
  brightTeal: '#03AFB9',
  white: '#fff',
  transparent: 'transparent',
  darkPurple: '#6C77B4',
  blue: '#42B2E9',
  orange: '#FF9255',
  purple: '#9483DA',
  maleColor: '#1651b0',
  femaleColor: '#f35f71',

  textPrimary: '#3F4F5F',
  textDanger: '#F2596B',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
