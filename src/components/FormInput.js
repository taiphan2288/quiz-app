import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {FONTS, SIZES, COLORS} from '../constants';

export default function FormInput({
  containerStyle,
  label,
  labelStyle,
  errorMsg,
  errorMsgStyle,
  inputStyle,
  placeholder,
  inputContainerStyle,
  prependComponent,
  appendComponent,
  onChangeText,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  onLayout,
  onFocus,
  disabled,
  editable,
  placeholderTextColor,
  value,
  boxStyle,
}) {
  return (
    <View style={{...containerStyle}} onLayout={onLayout}>
      {/* label & error messages */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
          {label}
        </Text>
        <Text style={{color: COLORS.red, ...FONTS.h3, ...errorMsgStyle}}>
          {errorMsg}
        </Text>
      </View>

      {/* Text input */}
      <View
        style={{
          flexDirection: 'row',
          borderRadius: SIZES.base,
          backgroundColor: COLORS.white,
          marginTop: 5,
          ...boxStyle,
        }}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          onFocus={onFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          disabled={disabled}
          editable={editable}
          value={value}
        />

        {appendComponent}
      </View>
    </View>
  );
}
