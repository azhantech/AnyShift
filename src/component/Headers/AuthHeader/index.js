import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {generalImage} from '../../../assets/images';
import {vh, vw} from '../../../utils/dimensions';

const AuthHeader = (props) => {
  return (
    <View style={[styles.headingContainer, props.HeaderStyle]}>
      <Image
        source={generalImage.authHeaderLogo}
        style={styles.imagestyle}
      />
    </View>
  );
};
export default AuthHeader;
