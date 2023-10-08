import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import CompanyItem from '../../../component/Items/CompanyItem';
import CustomButton from '../../../component/Buttons/CustomButton';
import {setType} from '../../../redux/general';
import {getCompanies} from '../../../redux/Employer/CompanySlice';

const CompanyListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const getData = async () => {
    // try {

    await dispatch(getCompanies())
      .then(response => {
        console.log('Response  ================>', response);
        // setData(response?.payload?.jobApplications);
      })
      .catch(err => {
        console.log('Error from getJobs ==>', err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const renderItem = ({item}) => {
    return (
      <CompanyItem
        // onPress={() => navigation.navigate('VacancyJobDetails')}
        onPress={() => dispatch(setType('company'))}
        item={item}
      />
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Vacancies Available
        </QanelasMedium>
      </View>
    );
  };

  return (
    <MainContainer>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 11]}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />

      <CustomButton
        onPress={() => navigation.navigate('CreateCompanyScreen')}
        style={styles.button}
        text="create company"
      />
    </MainContainer>
  );
};

export default CompanyListScreen;
