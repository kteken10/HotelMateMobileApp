import React from 'react';

import { ViewStyle } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity ,Text} from '.';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  className?: string; 
  titleClassName?: string; 
  style?: ViewStyle; 
}

export const SButton: React.FC<ButtonProps> = ({ title, onPress, className, titleClassName, style, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style} 
      className={`flex justify-center items-center laptop:w-2/3 rounded-3xl laptop:h-12 ${className}`} 
      {...props}
      
    >
      <Text
        className={`${titleClassName} font-semibold`} 
        tx={title}
        font={'LTSaeada-SemiBold'}
        />
    </TouchableOpacity>
  );
};
