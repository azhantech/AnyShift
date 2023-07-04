import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import QanelasBold from '../Texts/QanelasBold';
import QanelasRegular from '../Texts/QanelasRegular';
import QanelasMedium from '../Texts/QanelasMedium';
import {icons} from '../../assets/images';

const VacancyItem = props => {
  const {item, onPress} = props;
  const [isFavourite, setIsFavourite] = useState(item?.favorite);

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
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      <View style={styles.row}>
        <View style={styles.profileImageViewStyle}>
          <Image source={item?.picture} style={styles.userImage} />
        </View>

        <View style={styles.userNameContainer}>
          <View style={styles.nameViewStyle}>
            <QanelasBold style={styles.userName}>{item?.name}</QanelasBold>
            <TouchableOpacity
              onPress={handleFav}
              style={styles.heartFilledViewStyle}>
              <Image
                style={styles.heartIconStyle(isFavourite)}
                source={renderFavIcon()}
              />
            </TouchableOpacity>
          </View>
          <QanelasRegular style={styles.dateStyle}>{item?.date}</QanelasRegular>

          <View style={styles.locationDetailsStyle}>
            <View style={styles.mainLocationViewStyle}>
              <View style={styles.locationViewStyle}>
                <Image
                  source={icons.location}
                  style={styles.locationIconStyle}
                />

                <QanelasMedium style={styles.locationTextStyle}>
                  Texas
                </QanelasMedium>
              </View>
            </View>

            <View style={styles.amountViewStyle}>
              <QanelasBold style={styles.amountTextStyle}>
                {item?.amount}
              </QanelasBold>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VacancyItem;
