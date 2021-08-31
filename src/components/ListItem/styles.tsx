import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { colors } from '../../utils/index';

/*--------  responsive ----------*/
import { getScaleSize, ScreenWidth, ScreenHeight } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
  },
  image: {
    height: getScaleSize(350),
    width: '100%',
  },
  titleText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: getScaleSize(18),
    alignSelf: 'center',
    marginTop: getScaleSize(50)
  },
  descText: {
    color: colors.black,
    marginTop: getScaleSize(20),
    width: '90%',
    alignSelf: 'center'
  }
});
