import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import QanelasBold from '../Texts/QanelasBold';
import QanelasRegular from '../Texts/QanelasRegular';
import QanelasMedium from '../Texts/QanelasMedium';
import {icons} from '../../assets/images';

const PlanningItem = props => {
  const {item, onPress} = props;
  const [isFavourite, setIsFavourite] = useState(item?.favorite);

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
          <View style={styles.statusContainer}>
            <TouchableOpacity
              style={[styles.statusbtn, {backgroundColor: item.bgColor}]}>
              <QanelasRegular style={styles.statusText}>
                {item?.status}
              </QanelasRegular>
            </TouchableOpacity>
          </View>
          <View style={styles.nameViewStyle}>
            <QanelasBold style={styles.userName}>{item?.name}</QanelasBold>
          </View>
          <QanelasRegular style={styles.dateStyle}>{item?.date}</QanelasRegular>

          <View style={styles.locationDetailsStyle}>
            <View style={styles.mainLocationViewStyle}>
              <View style={styles.locationViewStyle}>
                <QanelasMedium style={styles.locationTextStyle}>
                  Including 30 min Break
                </QanelasMedium>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.heartFilledViewStyle}>
          <Image style={styles.arrowIcon} source={icons.arrowIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PlanningItem;
