import React, { useState } from 'react';
import { View } from '.';
import { TextInput as NTextInput } from 'react-native';
import { styled } from 'nativewind';
import { colors } from '../theme';

interface InputProps {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  className?:string
  onChangeText?: (text: string) => void;
}
const STextInput = styled(NTextInput);
export const Input: React.FC<InputProps> = ({ placeholder, onChangeText,defaultValue, value,className }) => {
  const wrapperStyles = `flex-row   justify-between items-center mobile:h-12 laptop:h-14 rounded-3xl ${className} `;
  const focusedStyles = `${wrapperStyles} border-purple-200 border`;
  const defaultStyles = `${wrapperStyles} border-charcoal-100 border`;
  
  const [isInputFocused, setIsInputFocused] = useState(false);
 
  const [text, setText] = useState(defaultValue || '');

  const handleChangeText = (newText: string) => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  return (
    <View className={isInputFocused ? focusedStyles : defaultStyles}>
      <STextInput
      
       onFocus={() => {
        setIsInputFocused(true);
       
      }}
      className='w-full'
      placeholderTextColor={
        colors.neutral[300]
      }
      
      onBlur={() => setIsInputFocused(false)}
       
        placeholder={placeholder}
        value={value || text} 
        onChangeText={handleChangeText}
      />
    </View>
  );
};



