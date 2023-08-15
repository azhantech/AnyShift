import React, { useLayoutEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import { invoice, jobOptions } from '../../../../utils/tempData';
import { icons } from '../../../../assets/images';
import InputField from '../../../../component/Inputs/InputField';
import { vh } from '../../../../utils/dimensions';
import OptionsModal from '../../../../component/ModalMessages/OptionsModal';
import InvoiceItem from '../../../../component/Items/InvoiceItem';
import FilterModal from '../../../../component/FilterModal';

const InvoiceListScreen = ({ navigation }) => {
  const [optionModal, setOptionModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const onPressModal = () => {
    setOptionModal(!optionModal);
  };

  const onFilterModal = () => {
    setFilterModal(!filterModal);
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

  const renderItem = ({ item }) => {
    return (
      <InvoiceItem
        item={item}
        optionPress={onPressModal}
        onPress={() =>
          navigation.navigate('InvoiceDetailScreen', {
            status: item?.status,
          })
        }
      />
    );
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
  return (
    <MainContainer>
      <View style={styles.header}>
        <InputField
          placeholder="Search"
          leftIcon={icons.search}
          inputContainerIcon={styles.inputContainerIcon}
        />
        <TouchableOpacity
          onPress={onFilterModal}
          style={[styles.textButton, { marginTop: vh * 1 }]}>
          <Image source={icons.filter} style={styles.notificationsIconStyle} />
        </TouchableOpacity>
      </View>
      {renderList()}

      <OptionsModal
        visible={optionModal}
        onPress={onPressModal}
        onHide={onPressModal}
        options={jobOptions}
      />
      <FilterModal
        visible={filterModal}
        onPress={onFilterModal}
        onHide={onFilterModal}
        style={{ height: vh * 46 }}
        headerText="Filter"
        status
      />
    </MainContainer>
  );
};

export default InvoiceListScreen;
