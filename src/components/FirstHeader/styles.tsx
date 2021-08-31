import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { colors } from '../../utils/index';

/*--------  responsive ----------*/
import { getScaleSize } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    height: getScaleSize(50),
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: getScaleSize(20),
    backgroundColor: 'transparent'
  },
  text_one: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: getScaleSize(14)
  },
  text_two: {
    color: colors.black,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: getScaleSize(15)
  },
  text_three: {
    color: colors.black,
    alignSelf: 'center',
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
