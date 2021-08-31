import { Dimensions } from 'react-native';

/* ------------- Dimensions ------------- */
const ScreenHeight = Math.round(Dimensions.get('window').height);
const ScreenWidth = Math.round(Dimensions.get('window').width);

const colors = {
  primary: '#4A064B',
  white: '#FFFFFF',
  lightGray: '#8c8c8c',
  black: '#000000',
  blue: '#3447d9',
  green: '#80F781'
};


/*--------- responsive  ------------*/
const scalingFactor = Math.min(ScreenWidth, ScreenHeight) / 375;

const getScaleSize = (multi: number) =>
  multi ? scalingFactor * multi : scalingFactor;


/*-------- all exports  --------*/
export { ScreenHeight, ScreenWidth, colors, getScaleSize };
