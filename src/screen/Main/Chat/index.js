import React from 'react';
import {View, FlatList} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import ChatItem from '../../../component/ChatItem';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import {chatlist} from '../../../utils/tempData';

const Chat = ({navigation}) => {
  const renderItem = ({item}) => {
    return <ChatItem 
    item={item} 
    onPress={() => navigation.navigate('ChatDetail')}
    />;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Chats Found
        </QanelasMedium>
      </View>
    );
  };
  return (
    <MainContainer>
      <FlatList
        data={chatlist}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};

export default Chat;
