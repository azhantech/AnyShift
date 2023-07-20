import React, {useLayoutEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {Styles} from './styles';
import QanelasSemiBold from '../../../component/Texts/QanelasSemiBold';
import {icons} from '../../../assets/images';
import FilterModal from '../../../component/FilterModal';
import {vh} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const PaymentLogs = props => {
  const [cancelReasonModal, setCancelReasonModal] = useState(false);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <View style={Styles.headerRight}>
            <TouchableOpacity
              onPress={onHandleCancelReasonModal}
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
  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };
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
            <QanelasSemiBold style={Styles.title}>Job ID</QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>#12345</QanelasSemiBold>
          </View>
          <View style={Styles.middleContainer.leftContainer}>
            <QanelasSemiBold style={Styles.title}>Job Title</QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>Cashier</QanelasSemiBold>
          </View>
        </View>
        <View style={Styles.middleContainer}>
          <View style={Styles.middleContainer.leftContainer}>
            <QanelasSemiBold style={Styles.title}>
              Employer Name
            </QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>JHA.CO</QanelasSemiBold>
          </View>
          <View style={Styles.middleContainer.leftContainer}>
            <QanelasSemiBold style={Styles.title}>Total Amount</QanelasSemiBold>
            <QanelasSemiBold style={Styles.text}>$100</QanelasSemiBold>
          </View>
        </View>
        <View style={Styles.topContainer}>
          <QanelasSemiBold
            style={[Styles.title, {color: colors.highlightedText}]}>
            Amount Received
          </QanelasSemiBold>
          <QanelasSemiBold
            style={[Styles.text, {color: colors.highlightedText}]}>
            $80
          </QanelasSemiBold>
        </View>
      </View>
    );
  };
  const renderItemSeparator = () => (
    <View style={Styles.renderItemSeparator}></View>
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        style={Styles.mainContainer}
        contentContainerStyle={Styles.contentContainerStyle}
        ItemSeparatorComponent={renderItemSeparator}
      />
      <FilterModal
        visible={cancelReasonModal}
        onPress={onHandleCancelReasonModal}
        onHide={onHandleCancelReasonModal}
        style={{height: vh * 46}}
        headerText="Filter Date"
      />
    </View>
  );
};

export default PaymentLogs;
