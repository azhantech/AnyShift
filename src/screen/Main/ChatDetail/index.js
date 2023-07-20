import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import styles from './styles';
import {vh} from '../../../utils/dimensions';
import {generalImage, icons} from '../../../assets/images';
import {messages} from '../../../utils/tempData';
import MessageItem from '../../../component/MessageItem';
import MainContainer from '../../../component/MainContainer';
import InputField from '../../../component/Inputs/InputField';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import QanelasBold from '../../../component/Texts/QanelasBold';


const ChatDetail = ({navigation}) => {
  const [message, setMessage] = useState(null);
  const [allMessages, setAllMessages] = useState(messages);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => {
        return (
          <View style={styles.headerMainContainer}>
            <View style={styles.profileDetailsContainerStyle}>
              <View style={styles.profileImageStyle}>
                <Image source={generalImage.chatProfile} style={styles.profileImage}/>
              </View>

              <View style={styles.profileNameViewStyle}>
                <QanelasBold style={styles.profileNameTextStyle}>Athony Williams</QanelasBold>
              </View>
            </View>
          </View>
        );
      },
    });
  });

  const handleMessages = () => {
    const tempMessages = [...allMessages];
    tempMessages.push({
      id: Math.random() + Date.now(),
      message: message,
      type: 'me',
      time: '10:00 AM',
    });
    setAllMessages(tempMessages);
  };

  const renderMessageItem = ({item}) => {
    return <MessageItem item={item} />;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          Start Chatting
        </QanelasMedium>
      </View>
    );
  };

  return (
    <MainContainer>
      <View style={styles.flatListStyleView}>
        <FlatList
          data={allMessages}
          renderItem={renderMessageItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={renderEmptyComponent}
        />
      </View>

      <View
        style={[styles.searchBar, Platform.OS == 'ios' && {padding: vh * 1.5}]}>
        <InputField
          placeholder="Enter your message"
          inputContainerIcon={styles.inputContainer}
          value={message}
          onChangeText={text => setMessage(text)}
          onSubmitEditing={() => handleMessages()}
        />
        <TouchableOpacity
          onPress={handleMessages}
          style={styles.sendButtonStyle}
          activeOpacity={0.8}>
          <Image source={icons.send} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};

export default ChatDetail;
