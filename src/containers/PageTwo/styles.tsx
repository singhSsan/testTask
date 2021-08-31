import { StyleSheet } from 'react-native';

/*-------- helper ----------*/
import { getScaleSize, colors } from '../../utils/index';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: colors.white
  },
  mainView: {
    backgroundColor: colors.white,
    width: '95%',
    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
    paddingVertical: getScaleSize(10),
    marginTop: -15
  },
  itemView: {
    height: getScaleSize(60),
    width: '80%',
    borderLeftWidth: 1,
    alignSelf: 'center',
    paddingLeft: getScaleSize(20),
  },
  titleName: {
    color: colors.black,
    fontSize: getScaleSize(14),
  },
  status: {
    color: colors.lightGray,
    fontSize: getScaleSize(12),
  },
  titleView: {
    width: '100%',
    height: getScaleSize(50),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGray,
    marginBottom: getScaleSize(20),
    justifyContent: 'center'
  },
  title: {
    color: colors.black,
    fontSize: getScaleSize(18),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconView: {
    position: 'absolute',
    top: 0,
    height: getScaleSize(15),
    width: getScaleSize(15)
  },
  active_image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  image: {
    height: '60%',
    width: '60%',
    resizeMode: 'cover',
    backgroundColor: colors.white
  },
  button: {
    height: getScaleSize(40),
    width: '80%',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: getScaleSize(10),
    marginTop: getScaleSize(50)
  },
  btnText: {
    color: colors.white,
    fontSize: getScaleSize(14),
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});
