import React, {useRef, useImperativeHandle} from 'react';
import {Platform, TextInput, View} from 'react-native';
import QanelasRegular from '../../Texts/QanelasRegular';
import styles from './styles';

const InputContainer = props => {
  const inputRef = useRef(null);
  useImperativeHandle(props?.reference, () => ({
    focus: focus,
    blur: blur,
  }));
  const focus = () => {
    inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current.blur();
  };
  return (
    <View style={[styles.textinputContainer, props.style]}>
      <View style={styles.titleContainer}>
        <QanelasRegular style={styles.labelText}>{props.label}</QanelasRegular>
        {props.required && (
          <QanelasRegular style={styles.stericText}>*</QanelasRegular>
        )}
      </View>
      <TextInput
        {...props}
        ref={inputRef}
        placeholder={props.placeholder}
        multiline={true}
        allowFontScaling={false}
        numberOfLines={3}
        minHeight={Platform.OS === 'ios' && 3 ? 20 * 3 : null}
        style={styles.inputContainer}
      />
    </View>
  );
};
export default InputContainer;
