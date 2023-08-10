import React, {useLayoutEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import {invoice, jobOptions, jobs} from '../../../../utils/tempData';
import {icons} from '../../../../assets/images';
import JobItem from '../../../../component/Items/JobItem';
import CustomButton from '../../../../component/Buttons/CustomButton';
import InputField from '../../../../component/Inputs/InputField';
import {vh, vw} from '../../../../utils/dimensions';
import OptionsModal from '../../../../component/ModalMessages/OptionsModal';
import InvoiceItem from '../../../../component/Items/InvoiceItem';
import InvoiceDetailItem from '../../../../component/Items/InvoiceDetailItem';
import QanelasBold from '../../../../component/Texts/QanelasBold';
import {colors} from '../../../../utils/appTheme';

const InvoiceDetailScreen = ({navigation, route}) => {
  const [optionModal, setOptionModal] = useState(false);

  const onPressModal = () => {
    setOptionModal(!optionModal);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NotificationScreen');
              }}
              style={styles.textButton}>
              <Image
                source={icons.tab4}
                style={styles.notificationsIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NotificationScreen');
              }}
              style={styles.textButton}>
              <Image
                source={icons.notification}
                style={styles.notificationsIconStyle}
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  });

  const renderItem = ({item}) => {
    return <InvoiceDetailItem item={item} optionPress={onPressModal} />;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Applications Found
        </QanelasMedium>
      </View>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={invoice}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
      />
    );
  };

  const getTextColor = status => {
    if (status == 'paid') {
      return colors.successColor;
    } else {
      return colors.primaryColor;
    }
  };

  const getBackgroundColor = status => {
    if (status == 'paid') {
      return '#D8F0EC';
    } else {
      return colors.lighterRed;
    }
  };

  return (
    <MainContainer>
      <View style={styles.header}>
        <InputField
          placeholder="Search"
          leftIcon={icons.search}
          inputContainerIcon={styles.inputContainerIcon}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NotificationScreen');
          }}
          style={[styles.textButton, {marginTop: vh * 1}]}>
          <Image source={icons.filter} style={styles.notificationsIconStyle} />
        </TouchableOpacity>
      </View>

      <View style={{alignSelf: 'center', width: vw * 90}}>
        <View style={styles.grayContainerFirst}>
          <QanelasBold style={styles.grayContainerText}>
            Invoice ID: #12345
          </QanelasBold>
          <QanelasBold style={styles.grayContainerText}>
            Payment Date: May 01, 2023
          </QanelasBold>
        </View>

        <View style={styles.grayContainerSecond}>
          <QanelasBold style={styles.grayContainerText}>
            Total Payable Amount : 100
          </QanelasBold>
          <QanelasBold style={styles.grayContainerText}>
            Total Commission Payable Amount: $100
          </QanelasBold>
        </View>

        <View
          style={[
            styles.statusContainer,
            {backgroundColor: getBackgroundColor(route.params.status)},
          ]}>
          <QanelasBold
            style={[
              styles.statusText,
              {color: getTextColor(route.params.status)},
            ]}>
            {route.params.status}
          </QanelasBold>
        </View>
      </View>

      {renderList()}

      <OptionsModal
        visible={optionModal}
        onPress={onPressModal}
        onHide={onPressModal}
        options={jobOptions}
      />
    </MainContainer>
  );
};

export default InvoiceDetailScreen;
