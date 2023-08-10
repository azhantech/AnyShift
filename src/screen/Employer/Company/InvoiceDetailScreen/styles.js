import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../../utils/dimensions';
import {colors} from '../../../../utils/appTheme';

const styles = StyleSheet.create({
  listStyle: {
    height: 100 * vh,
  },
  headerRight: {
    width: vw * 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contentContainerStyle: {
    paddingBottom: 10 * vh,
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 8 * vw,
    height: 8 * vw,
    borderRadius: 8 * vw,
  },
  notificationsIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: colors.primaryColor,
  },
  emptyComponentViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30 * vh,
  },
  noChatsTextStyle: {
    fontSize: 2 * vh,
    color: colors.darkGray,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: vh * 10,
    backgroundColor: colors.myMessageColor,
  },
  headerMainContainer: {
    height: vh * 25,
    borderBottomRightRadius: vh * 2,
    borderBottomLeftRadius: vh * 2,
    alignItems: 'center',
    width: vw * 100,
    backgroundColor: colors.primaryColor,
    justifyContent: 'flex-end',
    paddingBottom: vh * 4,
  },
  inputContainerIcon: {
    borderRadius: vh * 4,
    height: vh * 6,
    borderColor: colors.lightBorderColor,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  grayContainerFirst: {
    backgroundColor: colors.border,
    borderRadius: vh * 2,
    padding: vh * 2,
    marginVertical: vh * 1,
    maxWidth: vw * 55,
  },
  grayContainerSecond: {
    backgroundColor: colors.border,
    borderRadius: vh * 2,
    padding: vh * 2,
    marginVertical: vh * 1,
    maxWidth: vw * 70,
  },
  grayContainerText: {
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: colors.lighterRed,
    borderRadius: vh * 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw * 20,
    height: vh * 5,
    position: 'absolute',
    right: 0,
    top: vh * 2,
  },
  statusText: {
    color: colors.primaryColor,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default styles;
