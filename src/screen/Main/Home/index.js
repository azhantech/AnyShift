import React, {useLayoutEffect} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import Scrollable from '../../../component/ScrollWrapper';
import {Styles} from './Styles';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
import {icons} from '../../../assets/images';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import CustomButton from '../../../component/Buttons/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
const Home = props => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackground: () => {
        return (
          <View style={Styles.headerMainContainer}>
            <View style={Styles.headerTopContainer}></View>
            <View style={Styles.profileDetailsContainer}>
              <View style={Styles.profileImageContainer}>
                <Image
                  source={icons.profileImage}
                  style={Styles.profileImage}
                />
              </View>
              <View style={Styles.profileBottomContainer}>
                <QanelasBold style={Styles.userName}>James Milner</QanelasBold>
              </View>
            </View>
          </View>
        );
      },
    });
  });

  const renderItem = () => {
    return (
      <View style={Styles.renderItemMainContainer}>
        <View style={Styles.renderItemMainContainer.leftContainer}>
          <QanelasBold
            style={Styles.renderItemMainContainer.leftContainer.headingText}>
            No reviews Yet
          </QanelasBold>
          <QanelasMedium
            style={Styles.renderItemMainContainer.leftContainer.reviewText}>
            Invite someone to write a review about you!
          </QanelasMedium>
        </View>
        <TouchableOpacity style={Styles.renderItemMainContainer.rightContainer}>
          <Image
            source={icons.arrowIcon}
            style={Styles.renderItemMainContainer.rightContainer.image}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView
      style={Styles.mainContainer}
      contentContainerStyle={Styles.contentContainerStyle}>
      <View style={Styles.middleContainer}>
        <View style={Styles.middleContainer.topContainer}>
          <QanelasSemiBold
            style={Styles.middleContainer.topContainer.textStyle}>
            Please Complete Your Profile
          </QanelasSemiBold>
        </View>
        <View style={Styles.middleContainer.bottomContainer}>
          <CustomButton
            text="Edit Profile"
            style={Styles.middleContainer.bottomContainer.buttonStyle}
            textStyle={Styles.middleContainer.bottomContainer.buttonText}
          />
        </View>
      </View>
      <View style={Styles.headingContainer}>
        <QanelasBold style={Styles.todoHeading}>To-do list</QanelasBold>
      </View>
      <View style={{marginTop: vh}}>
        <FlatList data={[1]} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

export default Home;
