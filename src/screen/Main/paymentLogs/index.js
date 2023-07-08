import React, {useLayoutEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {Styles} from './styles';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import {icons} from '../../../assets/images';
const PaymentLogs = props => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <View style={Styles.headerRight}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('NotificationScreen');
              }}
              style={Styles.textButton}>
              <Image
                source={icons.filter}
                style={Styles.notificationsIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('NotificationScreen');
              }}
              style={Styles.textButton}>
              <Image
                source={icons.notification}
                style={Styles.notificationsIconStyle}
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  });
  const renderItem = () => {
    return (
      <View style={Styles.renderItem}>
        <View style={Styles.topContainer}>
          <QanelasSemiBold style={Styles.title}>
            Payment Recieved On
          </QanelasSemiBold>
          <QanelasSemiBold style={Styles.text}>May 08 2023</QanelasSemiBold>
        </View>
        <View style={Styles.middleContainer}>
          <View style={Styles.middleContainer.leftContainer}>
            <QanelasSemiBold style={Styles.title}>
              Payment Recieved On
            </QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>May 08 2023</QanelasSemiBold>
          </View>
          <View style={Styles.middleContainer.leftContainer}>
            <QanelasSemiBold style={Styles.title}>
              Payment Recieved On
            </QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>May 08 2023</QanelasSemiBold>
          </View>
        </View>
        <View style={Styles.middleContainer}>
          <View style={Styles.middleContainer.leftContainer}>
            <QanelasSemiBold style={Styles.title}>
              Payment Recieved On
            </QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>May 08 2023</QanelasSemiBold>
          </View>
          <View style={Styles.middleContainer.leftContainer}>
            <QanelasSemiBold style={Styles.title}>
              Payment Recieved On
            </QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>May 08 2023</QanelasSemiBold>
          </View>
        </View>
        <View style={Styles.topContainer}>
          <QanelasSemiBold style={Styles.title}>
            Payment Recieved On
          </QanelasSemiBold>
          <QanelasSemiBold style={Styles.text}>May 08 2023</QanelasSemiBold>
        </View>
      </View>
    );
  };
  const renderItemSeparator = () => (
    <View style={Styles.renderItemSeparator}></View>
  );
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      renderItem={renderItem}
      style={Styles.mainContainer}
      contentContainerStyle={Styles.contentContainerStyle}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};

export default PaymentLogs;
