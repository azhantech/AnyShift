import React from 'react';
import {View, FlatList} from 'react-native';

import ReviewItem from '../../../../component/ReviewItem';
import {reviews} from '../../../../utils/tempData';

const ReviewListScreen = () => {
  const renderReviewItem = ({item}) => {
    return <ReviewItem item={item} />;
  };

  return (
    <View>
      <FlatList data={reviews} renderItem={renderReviewItem} />
    </View>
  );
};

export default ReviewListScreen;
