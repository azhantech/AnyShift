import React, {useEffect, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {getJobs} from '../../../redux/JobSlice';
import moment from 'moment';
const Vacancies = ({navigation}) => {
  const dispatch = useDispatch();
  const [grid, setGrid] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
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
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchText, setSearchText] = useState('');
  const getData = async () => {
    // try {
    const data = {
      pageNo: pageNo,
      pageSize: pageSize,
      searchText: searchText,
    };
    await dispatch(getJobs(data))
      .then(response => {
        console.log('Response from GetJobs ========>', response);

        setData(response?.payload?.jobs);
      })
      .catch(err => {
        console.log('Error from getJobs ==>', err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
    // console.log('item ==============>', item?.id);
    return (
      <VacancyItem
        onPress={() => navigation.navigate('VacancyJobDetails', {id: item?.id})}
        item={item}
      />
    );
  };

  const renderCarouselItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('VacancyJobDetails', {id: item?.id})}
        style={styles.renderCarouselItem}>
        <View style={styles.imageContainer}>
          {/* <Image source={icons.amazon} style={styles.imageContainer.image} /> */}
          <Image
            source={
              item?.company?.imagePath
                ? {uri: item?.company?.imagePath}
                : icons.planning
            }
            style={styles.imageContainer.image}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <View style={styles.nameViewStyle}>
              <QanelasBold style={[styles.userName, {fontSize: vh * 2.5}]}>
                {item?.title}
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
                {moment(item?.createdAt).utc().local().fromNow()}
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
                    {
                      marginLeft: vw * 1.5,
                      color: colors.textColor,
                      width: 70 * vw,
                    },
                  ]}>
                  {item?.address}
                </QanelasBold>
              </View>
              <QanelasMedium
                style={{color: colors.highlightedText, fontSize: vh * 1.7}}>
                {item?.number}
              </QanelasMedium>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
            data={data}
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
          data={data}
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
