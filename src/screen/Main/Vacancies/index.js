import React from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import QanelasBold from '../../../component/Texts/QanelasBold';
import {vacancies} from '../../../utils/tempData';
import VacancyItem from '../../../component/VacancyItem';
import { icons } from '../../../assets/images';

const Vacancies = ({navigation}) => {
  
  const renderHeader = () => {
    return (
      <View style={styles.mainHeaderViewStyle}>
        <View style={styles.headingViewStyle}>
          <QanelasBold style={styles.headingTextStyle}>Companies</QanelasBold>
        </View>

        <View style={styles.allOptionsViewStyle}>
          <TouchableOpacity style={styles.optionButtonStyle}>
            <Image style={styles.optionIconStyle} source={icons.filter}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButtonStyle}>
            <Image style={styles.optionIconStyle} source={icons.list}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButtonStyle}>
            <Image  style={styles.optionIconStyle} source={icons.slider}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const renderItem = ({item}) => {
    return <VacancyItem 
    onPress={() => navigation.navigate('VacancyJobDetails')}
    item={item} 
    />;
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
      {renderHeader()}
      <FlatList
        data={vacancies}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};

export default Vacancies;
