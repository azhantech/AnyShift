import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import QanelasBold from '../Texts/QanelasBold';
import QanelasRegular from '../Texts/QanelasRegular';
import QanelasMedium from '../Texts/QanelasMedium';
import { icons } from '../../assets/images';
import moment from 'moment/moment';

const VacancyItem = props => {
  const { item, onPress } = props;
  const [isFavourite, setIsFavourite] = useState(item?.favorite);
  console.log('VacancyItem ===========>', item?.company?.imagePath);
  const renderFavIcon = () => {
    if (isFavourite) {
      return icons.heartFilled;
    } else {
      return icons.heartNotFilled;
    }
  };

  const handleFav = () => {
    setIsFavourite(!isFavourite);
  };

  console.log(JSON.stringify(item, null, 2), 'itemshereeeee')
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      <View style={styles.row}>
        <View style={styles.profileImageViewStyle}>
          <Image
            source={
              item?.company?.imagePath
                ? { uri: item?.company?.imagePath }
                : icons.planning
            }
            style={styles.userImage}
          />
        </View>
        <View style={styles.userNameContainer}>
          <View style={styles.nameViewStyle}>
            <QanelasBold style={styles.userName}>{item?.title}</QanelasBold>
            <TouchableOpacity
              onPress={handleFav}
              style={styles.heartFilledViewStyle}>
              <Image
                style={styles.heartIconStyle(isFavourite)}
                source={renderFavIcon()}
              />
            </TouchableOpacity>
          </View>
          <QanelasRegular style={styles.dateStyle}>
            {/* {moment(item?.createdAt).utc().local().fromNow()} */}
            {item?.postedOn}
          </QanelasRegular>

          <View style={styles.locationDetailsStyle}>
            <View style={styles.mainLocationViewStyle}>
              <View style={styles.locationViewStyle}>
                <Image
                  source={icons.location}
                  style={styles.locationIconStyle}
                />
                <QanelasMedium
                  style={styles.locationTextStyle}
                  numberOfLines={1}>
                  {item?.address}
                </QanelasMedium>
              </View>
            </View>

            <View style={styles.amountViewStyle}>
              <QanelasBold style={styles.amountTextStyle}>
                {item?.number}
              </QanelasBold>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VacancyItem;
