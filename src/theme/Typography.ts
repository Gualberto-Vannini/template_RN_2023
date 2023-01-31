const allFonts = {
  MONTSERRAT_REGULAR: 'Montserrat-Regular',
  MONTSERRAT_MEDIUM: 'Montserrat-Medium',
  MONTSERRAT_SEMI_BOLD: 'Montserrat-SemiBold',
};

export interface IFontGroup {
  regular: string;
  medium: string;
  'semi-bold': string;
}

const fontMap: IFontGroup = {
  regular: allFonts.MONTSERRAT_REGULAR,
  medium: allFonts.MONTSERRAT_MEDIUM,
  'semi-bold': allFonts.MONTSERRAT_SEMI_BOLD,
};

type ValidSpaceKeys = number | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
const fontSizes: {[K in ValidSpaceKeys]: string} = {
  xs: '11px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '22px',
  xxl: '30px',
};

const fontSizeNumbers: {[K in ValidSpaceKeys]: number} = {
  xs: 11,
  s: 14,
  m: 16,
  l: 18,
  xl: 22,
  xxl: 30,
};

export {fontSizes, fontSizeNumbers, fontMap};
