import React, { useImperativeHandle, useRef, useState } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';

import { icons } from '../../../assets/images';
import { vh, vw } from '../../../utils/dimensions';
import QanelasRegular from '../../../component/Texts/QanelasRegular';
import styles from './styles';
// import TextInputMask from 'react-native-text-input-mask';

const InputField = props => {
  const [isPassword, setIsPassword] = useState(props.secureTextEntry);

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
    <View style={[styles.container, props.inputContainerStyle]}>
      {props.label && (
        <View style={styles.labelContainer}>
          <QanelasRegular style={[styles.labelText, props?.labelText]}>
            {props?.label}
          </QanelasRegular>
          {props?.required && (
            <QanelasRegular style={[styles.require, props?.requireStyle]}>
              *
            </QanelasRegular>
          )}
          {props?.optional && (
            <QanelasRegular
              style={[
                styles.optionalStyle,
                props?.optionalStyle,
              ]}>{`(Optional)`}</QanelasRegular>
          )}
        </View>
      )}

      {props?.onPress ? <TouchableOpacity onPress={props?.onPress} style={[styles.inputWithIcon, props.inputContainerIcon]}>
        {props.leftIcon && (
          <View style={styles.leftIconContainer}>
            <Image source={props.leftIcon} style={styles.leftIcon} />
          </View>
        )}
        {props?.type == 'phone' ? (
          <View></View>
        ) : (
          // <TextInputMask
          //   ref={inputRef}
          //   value={props.value}
          //   style={[styles.input, props.inputContainer]}
          //   placeholder={props.placeholder}
          //   onSubmitEditing={props.onSubmitEditing}
          //   keyboardType={props.keyboardType}
          //   placeholderTextColor={'#999999'}
          //   onChangeText={(formatted, extracted) => {
          //     console.log(formatted); // +1 (123) 456-78-90
          //     console.log(extracted); // 1234567890
          //     props.onChangeText(extracted);
          //   }}
          //   mask={'+1 ([000]) [000] [00] [00]'}
          // />
          <TextInput
            {...props}
            ref={inputRef}

            value={props.value}
            onChangeText={props.onChangeText}
            style={[styles.input, props.inputContainer]}
            placeholder={props.placeholder}
            placeholderTextColor={'#999999'}
            secureTextEntry={isPassword}
            editable={false}
          // {...props}
          />
        )}

        {props.rightIcon2 && (
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={props.rightIcon2} style={styles.icon2} />
          </TouchableOpacity>
        )}
        {props.secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsPassword(!isPassword)}
            style={{ width: vw * 8 }}>
            <Image
              source={isPassword ? icons.passwordHide : icons.passwordShow}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity> : <View style={[styles.inputWithIcon, props.inputContainerIcon]}>
        {props.leftIcon && (
          <View style={styles.leftIconContainer}>
            <Image source={props.leftIcon} style={styles.leftIcon} />
          </View>
        )}
        {props?.type == 'phone' ? (
          <View></View>
        ) : (
          // <TextInputMask
          //   ref={inputRef}
          //   value={props.value}
          //   style={[styles.input, props.inputContainer]}
          //   placeholder={props.placeholder}
          //   onSubmitEditing={props.onSubmitEditing}
          //   keyboardType={props.keyboardType}
          //   placeholderTextColor={'#999999'}
          //   onChangeText={(formatted, extracted) => {
          //     console.log(formatted); // +1 (123) 456-78-90
          //     console.log(extracted); // 1234567890
          //     props.onChangeText(extracted);
          //   }}
          //   mask={'+1 ([000]) [000] [00] [00]'}
          // />
          <TextInput
            {...props}
            ref={inputRef}

            value={props.value}
            onChangeText={props.onChangeText}
            style={[styles.input, props.inputContainer]}
            placeholder={props.placeholder}
            placeholderTextColor={'#999999'}
            secureTextEntry={isPassword}
          // {...props}
          />
        )}

        {props.rightIcon2 && (
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={props.rightIcon2} style={styles.icon2} />
          </TouchableOpacity>
        )}
        {props.secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsPassword(!isPassword)}
            style={{ width: vw * 8 }}>
            <Image
              source={isPassword ? icons.passwordHide : icons.passwordShow}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>}

      {/* <View style={[styles.inputWithIcon, props.inputContainerIcon]}>
        {props.leftIcon && (
          <View style={styles.leftIconContainer}>
            <Image source={props.leftIcon} style={styles.leftIcon} />
          </View>
        )}
        {props?.type == 'phone' ? (
          <View></View>
        ) : (
          // <TextInputMask
          //   ref={inputRef}
          //   value={props.value}
          //   style={[styles.input, props.inputContainer]}
          //   placeholder={props.placeholder}
          //   onSubmitEditing={props.onSubmitEditing}
          //   keyboardType={props.keyboardType}
          //   placeholderTextColor={'#999999'}
          //   onChangeText={(formatted, extracted) => {
          //     console.log(formatted); // +1 (123) 456-78-90
          //     console.log(extracted); // 1234567890
          //     props.onChangeText(extracted);
          //   }}
          //   mask={'+1 ([000]) [000] [00] [00]'}
          // />
          <TextInput
            {...props}
            ref={inputRef}
            
            value={props.value}
            onChangeText={props.onChangeText}
            style={[styles.input, props.inputContainer]}
            placeholder={props.placeholder}
            placeholderTextColor={'#999999'}
            secureTextEntry={isPassword}
            // {...props}
          />
        )}

        {props.rightIcon2 && (
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={props.rightIcon2} style={styles.icon2} />
          </TouchableOpacity>
        )}
        {props.secureTextEntry && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsPassword(!isPassword)}
            style={{width: vw * 8}}>
            <Image
              source={isPassword ? icons.passwordHide : icons.passwordShow}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View> */}
    </View>
  );
};

export default InputField;
