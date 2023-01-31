import colors from './Colors';
import {space, spaceNumbers} from './Space';
import {fontSizeNumbers, fontSizes} from './Typography';

export const cardShadow = {
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  shadowColor: '#e2e2e2',
  elevation: 5,
};

const Theme = {
  space,
  spaceNumbers,
  fontSizeNumbers,
  colors,
  fontSizes,
};

export default Theme;
