import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { colors } from '../../utils/index';

/*--------  responsive ----------*/
import { getScaleSize } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    height: getScaleSize(70),
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: getScaleSize(20),
    backgroundColor: colors.blue
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: getScaleSize(16)
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  imageView: {
    height: getScaleSize(18),
    width: getScaleSize(18),
    alignSelf: 'center'
  },
  horizontalView: {
    flexDirection: 'row',
    backgroundColor: 'transparent'
  }
});
