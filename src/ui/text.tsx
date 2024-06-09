import { styled } from 'nativewind';
import React from 'react';
import type { TextProps } from 'react-native';
import { StyleSheet, Text as NNText } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TxKeyPath, isRTL } from '../i18n/utils';
import { capitalizeFirstLetter } from '../utils/string';
const SText = styled(NNText);
interface Props extends TextProps {
  variant?: keyof typeof textVariants;
  className?: string;
  tx?: TxKeyPath | string;
  font?:'LTSaeada-Black'|'LTSaeada-Bold'|'LTSaeada-ExtraBlack'|'LTSaeada-ExtraBold'|'LTSaeada-ExtraLight'|'LTSaeada-Hairline'|'LTSaeada-Light'|'LTSaeada-Medium'|'LTSaeada-Regular'|'LTSaeada-SemiBold'|'LTSaeada-Thin'|'Sonama'
}
export const textVariants = {
  defaults: 'text-base text-black dark:text-white ',
  h1: 'text-[32px] leading-[48px] font-medium',
  h2: 'text-[28px] leading-[42px] font-medium',
  h3: 'text-[24px] leading-[36px] font-medium',
  xl: 'text-[20px] leading-[30px]',
  lg: 'text-[18px] leading-[30px]',
  md: '',
  sm: 'text-[14px] leading-[21px]',
  xs: 'text-[12px] leading-[18px]',
  error: ' text-[12px] leading-[30px] text-danger-500',
};

export const Text = ({
  variant = 'md',
  className = '',
  style,
  tx,
  children,
  font='LTSaeada-Regular',
  ...props
}: Props) => {
  const { t } = useTranslation();
  const content = tx ? capitalizeFirstLetter(t(tx)) : children;
  return (
    <SText
      className={`
      ${textVariants.defaults}
      ${textVariants[variant]}
      ${className}
    `}
      style={
        StyleSheet.flatten([
        { writingDirection: isRTL ? 'rtl' : 'ltr' },
        style,
        {
        fontFamily:font
        }
        
      ])
    }
      {...props}
    >
     {content}
    </SText>
  );
};
