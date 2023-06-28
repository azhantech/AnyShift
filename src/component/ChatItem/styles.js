import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors} from '../../utils/appTheme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    // borderRadius: vh * 1,
    padding: vh * 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: vh * 0.7,
    marginHorizontal: vw * 2,
    height: 10 * vh,
    borderBottomColor: colors.greyText,
    // borderBottomWidth: 0.25,
  },
  userImage: {
    height: vh * 6,
    width: vh * 6,
    borderRadius: (vh * 5) / 2,
    resizeMode: 'contain'
  },

  onlineIconStyle:{
    resizeMode: 'contain',
    height: vh * 2,
    width: vh * 2,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 1.5 * vh,

  },


  userName: {
    textTransform: 'capitalize',
    fontSize: vh * 2,
    color: colors.black,
    width: 40 * vw
  },
  message: {
    color: colors.darkGray,
    fontSize: 1.8 * vh,
    lineHeight: 2 * vh,
    width: 75 * vw,
    marginTop: 0.8 * vh,
  },
  userNameContainer: {
    marginLeft: vw * 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90 * vw
  },

  timeTextStyle: {
    color: colors.lightPlaceHolder,
    fontSize: 1.7 * vh,
    width: 30 * vw,
    textAlign: 'right',

  },

  nameViewStyle:{
    width: 75 *vw,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  profileImageViewStyle:{
    height: 7 * vh
  }
});

export default styles;
