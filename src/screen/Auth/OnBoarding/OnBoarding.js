import React from 'react';
import {View, ImageBackground, Animated} from 'react-native';
import {useDispatch} from 'react-redux';

import constants from '../../../utils/constants';
import {colors} from '../../../utils/appTheme';
import CustomButton from '../../../component/Buttons/CustomButton';
import {styles} from './styles';
import QanelasBold from '../../../component/Texts/QanelasBold';
import QanelasMedium from '../../../component/Texts/QanelasMedium';
import {setType} from '../../../redux/general';

const OnBoarding = ({navigation}) => {
  const dispatch = useDispatch();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, constants.SIZES.width);
    return (
      <View style={styles.dotsViewStyle}>
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [colors.unfilled, colors.filled, colors.unfilled],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={styles.animatedDotsViewStyle(dotColor, dotWidth)}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View style={styles.mainDotsContainer}>
        <View style={styles.dotsContainerStyle}>
          <Dots />
        </View>
      </View>
    );
  }

  const loginHandler = type => {
    dispatch(setType(type));
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.mainFlatListContainer}>
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        // initialScrollIndex={0}
        onScrollToIndexFailed={info => {
          console.log('onboarding', info);
        }}
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View style={styles.mainImageContainer}>
              <View style={styles.imageBackgroundMiniContainer}>
                <ImageBackground
                  source={item.backgroundImage}
                  resizeMode="cover"
                  style={styles.imageBackgroundStyle}>
                  <View style={styles.detailsViewStyle}>
                    <QanelasBold style={styles.headingTextStyle}>
                      {item?.title}
                      <QanelasBold
                        style={[
                          styles.headingTextStyle,
                          {
                            color: colors.primaryColor,
                          },
                        ]}>
                        {item?.redTitle}
                      </QanelasBold>
                    </QanelasBold>
                    <QanelasMedium style={styles.descriptionStyle}>
                      {item.description}
                    </QanelasMedium>

                    <View style={styles.customButtonStyle}>
                      <CustomButton
                        style={styles.getStartedButtonStyle}
                        text="Sign in as Employee"
                        onPress={() => loginHandler('employee')}
                      />

                      <CustomButton
                        style={styles.loginButtonOther}
                        textStyle={styles.buttonText}
                        text="Sign in as Employer"
                        onPress={() => loginHandler('employer')}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
