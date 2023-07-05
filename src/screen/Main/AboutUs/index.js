import React, {useLayoutEffect} from 'react';
import {View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Styles} from './styles';
import {generalImage, icons} from '../../../assets/images';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import {vw} from '../../../utils/dimensions';
const AboutUS = props => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackground: () => {
        return (
          <View style={Styles.headerMainContainer}>
            <View style={Styles.headerTopContainer}></View>
            <View style={Styles.profileDetailsContainer}>
              <Image
                source={generalImage.headerBackgroundImage}
                style={Styles.profileDetailsContainer.image}
              />
            </View>
          </View>
        );
      },
    });
  });
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headingContainer}>
        <QanelasBold style={Styles.headingContainer.text} numberOfLines={2}>
          All You Need to know about AnyShift
        </QanelasBold>

        {/* <QanelasBold
          style={Styles.headingContainer.highlightedText}></QanelasBold> */}
      </View>
      <View style={Styles.textContainer}>
        <QanelasRegular style={Styles.textContainer.text}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur,There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
        </QanelasRegular>
      </View>
    </View>
  );
};

export default AboutUS;
