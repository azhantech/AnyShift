import React, {useEffect} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from './CustomMarker';

import {vh, vw} from '../../utils/dimensions';
import {colors} from '../../utils/appTheme';
import TextWrapper from '../../component/Texts/QanelasRegular';

export default function CustomSlider(props) {
  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([5]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([10, 28]);
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
    React.useState([0, 100]);
  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

  const sliderOneValuesChange = values => setSliderOneValue(values);

  nonCollidingMultiSliderValuesChange = values => {
    setNonCollidingMultiSliderValue(values);
  };
  multiSliderValuesChange = values => {
    console.log(values, 'values');
    setMultiSliderValue(values);
    //childComponent sends data to parent
    // props.getRangefromSlider(values);
  };

  useEffect(() => {
    if (props.values != null) {
      setMultiSliderValue(props.values);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.sliders}>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={vw * 85}
          containerStyle={{alignSelf: 'center'}}
          selectedStyle={{
            backgroundColor: colors.highlightedText,
          }}
          unselectedStyle={{
            backgroundColor: '#DEDEDE',
          }}
          onValuesChange={multiSliderValuesChange}
          trackStyle={{
            height: 4,
          }}
          touchDimensions={{
            height: 10,
            width: 10,
            borderRadius: 20,
            slipDisplacement: 40,
          }}
          customMarker={CustomMarker}
          min={0}
          max={100}
          step={1}
          allowOverlap
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sliders: {
    width: 280,
  },
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },

  valuesView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    left: 5 * vw,
  },

  textStyle: {
    fontSize: 1.8 * vh,
    color: colors.activeTextInputColor,
  },
});
