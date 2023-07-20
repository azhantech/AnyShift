import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import MainContainer from '../../../component/MainContainer';
import styles from './styles';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import QanelasBold from '../../../component/Texts/QanelasBold';
import {vacancies} from '../../../utils/tempData';
import VacancyItem from '../../../component/VacancyItem';
import {icons} from '../../../assets/images';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
import FilterModal from '../../../component/FilterModal';
const Vacancies = ({navigation}) => {
  const [grid, setGrid] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const renderFavIcon = () => {
    if (isFavourite) {
      return icons.heartFilled;
    } else {
      return icons.heartNotFilled;
    }
  };
  const handleFav = () => {
    setIsFavourite(!isFavourite);
  };
  const onHandleCancelReasonModal = () => {
    setCancelReasonModal(!cancelReasonModal);
  };
  const renderHeader = () => {
    return (
      <View style={styles.mainHeaderViewStyle}>
        <View style={styles.headingViewStyle}>
          <QanelasBold style={styles.headingTextStyle}>Companies</QanelasBold>
        </View>

        <View style={styles.allOptionsViewStyle}>
          <TouchableOpacity
            style={styles.optionButtonStyle}
            onPress={onHandleCancelReasonModal}>
            <Image style={styles.optionIconStyle} source={icons.filter} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButtonStyle}
            onPress={() => setGrid(false)}>
            <Image
              style={[
                styles.optionIconStyle,
                {
                  tintColor: !grid
                    ? colors.primaryColor
                    : colors.borderTopColor,
                },
              ]}
              source={icons.list}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButtonStyle}
            onPress={() => setGrid(true)}>
            <Image
              style={[
                styles.optionIconStyle,
                {
                  tintColor: grid ? colors.primaryColor : colors.borderTopColor,
                },
              ]}
              source={icons.slider}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <VacancyItem
        onPress={() => navigation.navigate('VacancyJobDetails')}
        item={item}
      />
    );
  };

  const renderCarouselItem = () => {
    return (
      <View style={styles.renderCarouselItem}>
        <View style={styles.imageContainer}>
          <Image source={icons.amazon} style={styles.imageContainer.image} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <View style={styles.nameViewStyle}>
              <QanelasBold style={[styles.userName, {fontSize: vh * 2.5}]}>
                Counter Cashier
              </QanelasBold>
              <TouchableOpacity
                onPress={handleFav}
                style={styles.heartFilledViewStyle}>
                <Image
                  style={styles.heartIconStyle(isFavourite)}
                  source={renderFavIcon()}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.nameViewStyle}>
              <QanelasBold
                style={[styles.userName, {color: colors.successColor}]}>
                2 days ago
              </QanelasBold>
              <QanelasMedium
                style={{color: colors.highlightedText, fontSize: vh * 1.7}}>
                $100
              </QanelasMedium>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.nameViewStyle}>
              <View
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  width: '40%',
                }}>
                <Image
                  source={icons.location}
                  style={{
                    height: vh * 3,
                    width: vw * 3,
                    tintColor: colors.primaryColor,
                    resizeMode: 'contain',
                  }}
                />
                <QanelasBold
                  style={[
                    styles.userName,
                    {marginLeft: vw * 1.5, color: colors.textColor},
                  ]}>
                  Texas
                </QanelasBold>
              </View>
              <QanelasMedium
                style={{color: colors.highlightedText, fontSize: vh * 1.7}}>
                6 days
              </QanelasMedium>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={vacancies.length}
        activeDotIndex={currentIndex}
        containerStyle={{
          width: 50 * vw,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        dotContainerStyle={{
          width: 2 * vw,
        }}
        dotStyle={{
          width: 5 * vw,
          height: 1 * vh,
          borderRadius: 2 * vw,
          backgroundColor: colors.filled,
        }}
        inactiveDotStyle={{
          backgroundColor: colors.unfilled,
          width: 5 * vw,
          height: 1 * vh,
          borderRadius: 2 * vw,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
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
  const renderMainView = () => {
    if (grid) {
      return (
        <View>
          <Carousel
            data={vacancies}
            renderItem={renderCarouselItem}
            sliderWidth={vw * 100}
            itemWidth={vw * 80}
            onSnapToItem={index => setCurrentIndex(index)}
          />
          {pagination()}
        </View>
      );
    } else {
      return (
        <FlatList
          data={vacancies}
          renderItem={renderItem}
          style={styles.flatListStyle}
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={renderEmptyComponent}
          showsVerticalScrollIndicator={false}
        />
      );
    }
  };
  return (
    <MainContainer>
      {renderHeader()}
      {renderMainView()}
      <FilterModal
        visible={cancelReasonModal}
        onPress={onHandleCancelReasonModal}
        onHide={onHandleCancelReasonModal}
        vacancies
        headerText="Filter Vacancies"
      />
    </MainContainer>
  );
};

export default Vacancies;
