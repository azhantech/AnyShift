import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';
import QanelasRegular from '../../component/Texts/QanelasRegular';

const MessageItem = props => {
  const {item} = props;
  return (
    <View>
      <View
        style={
          item.type == 'me' ? styles.messageItemMe : styles.messageItemYou
        }>
        <QanelasRegular style={styles.messageText(item.type)}>
          {item?.message}
        </QanelasRegular>
      </View>
      <View style={styles.timeViewStyle(item?.type)}>
        <QanelasRegular style={styles.time(item?.type)}>
          {item?.time}
        </QanelasRegular>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeViewStyle: type => ({
    width: vw * 75,
    alignSelf: type == 'me' ? 'flex-end' : 'flex-start',
    marginHorizontal: vw * 6,
  }),
  messageItemMe: {
    backgroundColor: colors.white,
    padding: vh * 2,
    borderTopLeftRadius: vh * 1.5,
    borderTopRightRadius: vh * 1.5,
    borderBottomLeftRadius: vh * 1.5,
    marginHorizontal: vw * 6,
    marginVertical: vh * 1,
    width: vw * 75,
    alignSelf: 'flex-end',
  },

  messageItemYou: {
    backgroundColor: colors.myMessageColor,
    padding: vh * 2,
    borderTopRightRadius: vh * 1.5,
    borderTopLeftRadius: vh * 1.5,
    borderBottomRightRadius: vh * 1.5,
    marginHorizontal: vw * 6,
    marginVertical: vh * 1,
    width: vw * 75,
  },

  messageText: type => ({
    color: type == 'me' ? colors.darkGray : colors.white,
    fontSize: vh * 1.9,
  }),

  time: type => ({
    marginTop: vh * 0.2,
    fontSize: vh * 1.4,
    textAlign: type == 'me' ? 'right' : 'left',
    color: colors.darkGray,
  }),
});

export default MessageItem;
