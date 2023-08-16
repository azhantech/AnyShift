import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import {jobApplications, jobOptions, jobs} from '../../../../utils/tempData';
import {icons} from '../../../../assets/images';
import InputField from '../../../../component/Inputs/InputField';
import {vh} from '../../../../utils/dimensions';
import OptionsModal from '../../../../component/ModalMessages/OptionsModal';
import FilterModal from '../../../../component/FilterModal';
import JobApplicationCard from '../../../../component/Items/JobApplicationCard';

const JobApplicationListScreen = ({navigation}) => {
  const [optionModal, setOptionModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const onPressModal = () => {
    setOptionModal(!optionModal);
  };

  const onFilterModal = () => {
    setFilterModal(!filterModal);
  };

  const renderItem = ({item}) => {
    return <JobApplicationCard item={item} optionPress={onPressModal} />;
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
        data={jobApplications}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
      />
    );
  };

  const onPressEditHandler = () => {
    setOptionModal(!optionModal);
    navigation.navigate('VacancyDetailScreen', {edit: true});
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
          style={[styles.textButton, {marginTop: vh * 1}]}>
          <Image source={icons.filter} style={styles.notificationsIconStyle} />
        </TouchableOpacity>
      </View>
      {renderList()}

      <OptionsModal
        visible={optionModal}
        onPress={onPressModal}
        onHide={onPressModal}
        options={jobOptions}
        onPressEdit={onPressEditHandler}
      />

      <FilterModal
        visible={filterModal}
        onPress={onFilterModal}
        onHide={onFilterModal}
        style={{height: vh * 46}}
        headerText="Filter"
        status
      />
    </MainContainer>
  );
};

export default JobApplicationListScreen;
