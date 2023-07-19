import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import {Style} from './Styles';
import {icons} from '../../../assets/images';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import styles from '../../../component/ModalMessages/GeneralModal/styles';
import { notification } from '../../../utils/tempData';

const Notifications = () => {
  const [read, setRead] = useState(false);

  const handleMarkRead = () => {
    setRead(!read);
  };
  const renderItem = ({item}) => {
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
              {item?.title}
            </QanelasBold>
          </View>
        </View>
        <View style={Style.secondContainer}>
          <View style={Style.secondContainer.leftContainer}>
            <QanelasRegular
              numberOfLines={2}
              style={Style.secondContainer.leftContainer.text}>
             {item?.description}
            </QanelasRegular>
          </View>
          <View Style={Style.secondContainer.rightContainer}>
            <TouchableOpacity Style={Style.secondContainer.rightContainer}>
              <Image
                source={item?.read ? icons.unreadMessageIcon : icons.readMessageIcon}
                style={Style.secondContainer.rightContainer.image}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.thirdContainer}>
          <QanelasRegular style={Style.thirdContainer.text}>
            {item?.title}
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
        <TouchableOpacity  style={Style.ListHeaderComponent.rightContainer}>
          <QanelasRegular style={styles.markAllReadStyle}>
            Mark all as Read
          </QanelasRegular>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={Style.mainContainer}>
      <FlatList
        data={notification}
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
