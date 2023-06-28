import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import QanelasBold from '../Texts/QanelasBold';
import QanelasRegular from '../Texts/QanelasRegular';
import QanelasMedium from '../Texts/QanelasMedium';
import {icons} from '../../assets/images';

const ChatItem = props => {
  const {item, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.8}>
      <View style={styles.row}>
        <View style={styles.profileImageViewStyle}>
          <Image source={item?.image} style={styles.userImage} />
          {item?.status && (
            <Image source={icons.online} style={styles.onlineIconStyle} />
          )}
        </View>

        <View style={styles.userNameContainer}>
          <View style={styles.nameViewStyle}>
            <QanelasBold style={styles.userName}>{item?.name}</QanelasBold>
            <QanelasMedium style={styles.timeTextStyle}>
              {item?.time}
            </QanelasMedium>
          </View>
          <QanelasRegular style={styles.message}>
            {item?.message}
          </QanelasRegular>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
