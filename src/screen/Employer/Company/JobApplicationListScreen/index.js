import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';

import MainContainer from '../../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../../component/Texts/QanelasMedium';
import {jobApplications} from '../../../../utils/tempData';
import {icons} from '../../../../assets/images';
import InputField from '../../../../component/Inputs/InputField';
import {vh} from '../../../../utils/dimensions';
import FilterModal from '../../../../component/FilterModal';
import JobApplicationCard from '../../../../component/Items/JobApplicationCard';

const JobApplicationListScreen = ({navigation}) => {
  const [filterModal, setFilterModal] = useState(false);

  const onFilterModal = () => {
    setFilterModal(!filterModal);
  };

  const renderItem = ({item}) => {
    return (
      <JobApplicationCard
        item={item}
        onPress={() => navigation.navigate('EmployeeDetailJobApplication')}
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
        data={jobApplications}
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
          style={[styles.textButton, {marginTop: vh * 1}]}>
          <Image source={icons.filter} style={styles.notificationsIconStyle} />
        </TouchableOpacity>
      </View>
      {renderList()}

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
