import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { colors } from '../../utils/index';

/*--------  responsive ----------*/
import { getScaleSize } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    height: getScaleSize(50),
    width: '70%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: getScaleSize(20),
    alignSelf: 'center'
  },
  text: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: getScaleSize(14),

  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  imageView: {
    height: getScaleSize(16),
    width: getScaleSize(16),
    alignSelf: 'center'
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
