import React from 'react';
import {View, FlatList} from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import {planning} from '../../../../utils/tempData';
import PostFeedbackItem from '../../../../component/Items/PostFeedbackItem';

const PostFeedbackScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <PostFeedbackItem
        item={item}
        onPress={() => navigation.navigate('FeedbackDetailScreen')}
      />
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Planning Available
        </QanelasMedium>
      </View>
    );
  };

  return (
    <MainContainer>
      <FlatList
        data={planning}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={ListHeaderComponent}
      />
    </MainContainer>
  );
};

export default PostFeedbackScreen;
