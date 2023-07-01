import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: vw * 100,
    marginBottom: vh * 2,
    alignSelf: 'center',
    bottom: vh * 7,
    position: 'absolute',
  },
  icon: {
    height: vw * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  input: {
    marginLeft: vw * 2,
  },
  messageItemYou: {
    backgroundColor: colors.myMessageColor,
    padding: vh * 2,
    borderRadius: vh * 1.5,
    marginHorizontal: vw * 6,
    marginVertical: vh * 1,
    width: vw * 75,
    borderWidth: 0.5,
    borderColor: colors.youBorder,
  },
  messageItemMe: {
    backgroundColor: colors.meMessage,
    padding: vh * 2,
    borderRadius: vh * 1.5,
    marginHorizontal: vw * 6,
    marginVertical: vh * 1,
    width: vw * 75,
    alignSelf: 'flex-end',
    borderWidth: 0.5,
    borderColor: colors.meBorder,
  },
  messageText: {
    color: colors.grayText,
    fontSize: vh * 1.6,
  },
  time: {
    marginTop: vh * 0.5,
    fontSize: vh * 1.4,
  },

  messageStyles: {
    flex: 1,
  },

  contentContainerStyle: {
    width: 100 * vw,
    paddingBottom: 10 * vh,
    
  },

  sendButtonStyle: {
    backgroundColor: colors.primaryColor,
    width: 12 * vw,
    height: 12 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8 * vw,
  },

  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 8 * vw,
    borderWidth: 1,
    borderColor: colors.lightPlaceHolder,
    height: 6 * vh,
    ...themeShadow
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
  flatListStyleView:{
    marginBottom: 16 * vh
  }
});

export default styles;
