import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import HalfHeader from '../../../component/HalfHeader';
import styles from './styles';
import { generalImage, icons } from '../../../assets/images';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold'
import QanelasMedium from '../../../component/Texts/QanelasMedium'


const ReferalCode = ({navigation, route}) => {
  const renderCodeContainer = () => {
    return (
      <View style={styles.mainContainerStyle}>
        <View style={styles.codeImageViewStyle}>
          <Image source={generalImage.code} style={styles.codeImageStyle}/>
        </View>

        <View style={styles.codeViewStyle}>
          <QanelasSemiBold style={styles.codeTextStyle}>2d7j89</QanelasSemiBold>
        </View>

        <TouchableOpacity style={styles.showInterestButtonStyle}>
            <QanelasMedium style={styles.textButtonStyle}>
              Copy
            </QanelasMedium>

            <Image style={styles.heartIconStyle} source={icons.copy} />
          </TouchableOpacity>

          <View style={styles.descriptionViewStyle}>
            <QanelasMedium style={styles.descriptionTextStyle}>Copy the above code and share with your friends to invite them to the platform</QanelasMedium>
          </View>
      </View>
    )
  }
  return (
    <MainContainer>
      <HalfHeader />
      {renderCodeContainer()}
    </MainContainer>
  );
};

export default ReferalCode;
