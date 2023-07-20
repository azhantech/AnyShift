import React, {useLayoutEffect} from 'react';
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import {planning} from '../../../utils/tempData';
import PlanningItem from '../../../component/PlanningItem';
import {icons} from '../../../assets/images';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import CalendarStrip from 'react-native-calendar-strip';
import {vh, vw} from '../../../utils/dimensions';
import { colors } from '../../../utils/appTheme';
const Planning = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => {
        return (
          <View style={styles.headerMainContainer}>
            <View
              style={{
                height: vh * 10,
                width: vw * 90,
                justifyContent: 'center',
              }}>
              <CalendarStrip
                scrollable
                style={{
                  height: '100%', width: '100%'
                }}
                calendarColor={'red'}
                calendarHeaderStyle={{
                  color: 'white',
                }}
                dateNumberStyle={{color: 'white'}}
                dateNameStyle={{color: 'white'}}
                iconContainer={{flex: 0.1}}
                iconLeftStyle={{tintColor: 'white'}}
                iconRightStyle={{tintColor: 'white'}}
                highlightDateNumberContainerStyle={{
                  backgroundColor: colors.white,
                  borderRadius: 4 * vw,
                  height: 7 * vw,
                  width: 7 * vw,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
            
              />
            </View>
          </View>
        );
      },
    });
  });

  const renderItem = ({item}) => {
    return <PlanningItem 
    item={item} 
    onPress={() => navigation.navigate('ReferalCode')}
    />;
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyComponentViewStyle}>
        <QanelasMedium style={styles.noChatsTextStyle}>
          No Planning Available
        </QanelasMedium>
      </View>
    );
  };
  const ListHeaderComponent = () => {
    return (
      <View style={styles.ListHeaderComponent}>
        <View style={styles.ListHeaderComponent.leftContainer}>
          <QanelasRegular style={styles.text}>Job Status</QanelasRegular>
          <View
            style={styles.ListHeaderComponent.leftContainer.dropDownContainer}>
            <QanelasRegular>Pending</QanelasRegular>
            <TouchableOpacity
              style={
                styles.ListHeaderComponent.leftContainer.dropDownContainer.btn
              }>
              <Image
                source={icons.dropDown}
                style={
                  styles.ListHeaderComponent.leftContainer.dropDownContainer.btn
                    .image
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <MainContainer>
      <FlatList
        data={planning}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderEmptyComponent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
      />
    </MainContainer>
  );
};

export default Planning;
