import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../../../utils/dimensions';
import {colors} from '../../../../../utils/appTheme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'center',
    // marginTop: -8 * vh,
  },
  profileImageStyle: {
    height: vh * 10,
    width: vh * 10,
    resizeMode: 'contain',
  },

  profileImageViewStyle: {
    height: vh * 13,
    width: vh * 13,
    borderRadius: (vh * 13) / 2,
    backgroundColor: colors.behindProfile,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  onlineIconStyle: {
    resizeMode: 'contain',
    height: vh * 3,
    width: vh * 3,
  },

  camViewStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0.5 * vh,
  },

  mainButtonViewStyle: {
    width: 90 * vw,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.greyText,
    borderBottomWidth: 0.1 * vw,
    paddingVertical: 2 * vh,
  },

  flatListStyle: {
    flex: 1,
    // marginBottom: 8 * vh,
  },

  contentContainerStyle: {
    width: 100 * vw,
    alignItems: 'center',
  },

  itemIconViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemIconStyle: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 10 * vw,
  },

  nameViewStyle: {
    // backgroundColor: 'red',
    width: 68 * vw,
    marginLeft: 2 * vw,
  },

  statusButtonViewStyle: status => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2 * vw,
    width: 7 * vw,
    height: 7 * vw,
    borderColor:
      status == 'incomplete'
        ? colors.lightPlaceHolder
        : status == 'complete'
        ? colors.successColor
        : colors.lightPlaceHolder,
    borderRadius: 6 * vw,
  }),

  statusIconStyle: status => ({
    resizeMode: 'contain',
    height: 1.5 * vh,
    width: 8 * vw,
    tintColor:
      status == 'incomplete'
        ? colors.lightPlaceHolder
        : status == 'complete'
        ? colors.successColor
        : colors.lightPlaceHolder,
  }),

  nameKeyStyle: {
    color: colors.blackappText,
    fontSize: 1.8 * vh,
  },

  nameValueStyle: {
    color: colors.greyText,
    fontSize: 1.8 * vh,
    marginTop: 0.5 * vh,
  },
});

export default styles;
