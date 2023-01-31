type SpaceAlias =
  | 'none'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl';
type ValidSpaceKeys = number | SpaceAlias;

const space: {[K in ValidSpaceKeys]: string} = {
  none: '0px',
  xxxs: '2px',
  xxs: '4px',
  xs: '6px',
  s: '8px',
  m: '10px',
  l: '16px',
  xl: '20px',
  xxl: '24px',
  xxxl: '32px',
  xxxxl: '40px',
  xxxxxl: '44px',
};

const spaceNumbers: {[K in ValidSpaceKeys]: number} = {
  none: 0,
  xxxs: 2,
  xxs: 4,
  xs: 6,
  s: 8,
  m: 10,
  l: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
  xxxxxl: 44,
};

export {space, spaceNumbers};
