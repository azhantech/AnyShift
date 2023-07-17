import React from 'react';
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import {Style} from './Styles';
import {icons} from '../../../assets/images';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import styles from '../../../component/ModalMessages/GeneralModal/styles';

const Notifications = () => {
  const renderItem = () => {
    return (
      <View style={Style.renderItemMainContainer}>
        <View style={Style.firstContainer}>
          <View style={Style.firstContainer.notificationIconContainer}>
            <Image
              source={icons.notification}
              style={Style.firstContainer.notificationIconContainer.image}
            />
          </View>
          <View style={Style.firstContainer.headingContainer}>
            <QanelasBold style={Style.firstContainer.headingContainer.text}>
              New Shift Opening
            </QanelasBold>
          </View>
        </View>
        <View style={Style.secondContainer}>
          <View style={Style.secondContainer.leftContainer}>
            <QanelasRegular
              numberOfLines={2}
              style={Style.secondContainer.leftContainer.text}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt. ut labore et dolore magna aliquyam.
              erat, sed diam
            </QanelasRegular>
          </View>
          <View Style={Style.secondContainer.rightContainer}>
            <TouchableOpacity Style={Style.secondContainer.rightContainer}>
              <Image
                source={icons.readMessageIcon}
                style={Style.secondContainer.rightContainer.image}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.thirdContainer}>
          <QanelasRegular style={Style.thirdContainer.text}>
            2 min
          </QanelasRegular>
        </View>
      </View>
    );
  };
  const renderItemSeparatorComponent = () => (
    <View style={Style.ItemSeprator}></View>
  );
  const ListHeaderComponent = () => {
    return (
      <View style={Style.ListHeaderComponent}>
        <View style={Style.ListHeaderComponent.leftContainer}>
          <QanelasRegular>showing</QanelasRegular>
          <View
            style={Style.ListHeaderComponent.leftContainer.dropDownContainer}>
            <QanelasRegular>All</QanelasRegular>
            <TouchableOpacity
              style={
                Style.ListHeaderComponent.leftContainer.dropDownContainer.btn
              }>
              <Image
                source={icons.dropDown}
                style={
                  Style.ListHeaderComponent.leftContainer.dropDownContainer.btn
                    .image
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={Style.ListHeaderComponent.rightContainer}>
          <QanelasRegular>Mark all as Read</QanelasRegular>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={Style.mainContainer}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        style={Style.listStyle}
        contentContainerStyle={Style.contentContainerStyle}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparatorComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Notifications;
