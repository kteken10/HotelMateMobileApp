import React, { useState } from 'react';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import { isValidPhoneNumber as isValid } from 'libphonenumber-js';
import { View ,Text} from '.';
import { capitalizeFirstLetter } from '../utils/string';
import { currentPlatform } from '../hooks/use-platform-info';
import { Dimensions } from 'react-native';
import { colors } from '../theme';


interface PhoneInputProps {
  customStyles?: {
    container?: object;
    flagContainer?: object;
    callingCode?: object;
    countryButton?: object;
  };
  label?: string;
  labelClassName?:string
  onPhoneNumberChange: (number: string) => void;
  onChangeSelectedCountry?: (country: ICountry) => void;
  defaultValue?: string;
  onPhoneValidityChange?: (valid: boolean) => void;
  onChangeValue?: (value: string) => void;
  className?:string
}

export const PhoneNumberInput: React.FC<PhoneInputProps> = ({
  customStyles,
  onPhoneNumberChange,
  defaultValue,
  onPhoneValidityChange,
  labelClassName,
  label,
  className
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const [borderColor, setBorderColor] = useState(
    colors.charcoal[100]
  );
  const [isPhoneFocus, setIsPhoneFocus] = useState(false);

  const ScreenWidth = Dimensions.get('screen').width;

  const onChangeSelectedCountry = (country: ICountry) => {
    setSelectedCountry(country);
  };

  const onChangePhoneNumber = (number: string) => {
    const formattedNumber = selectedCountry?.callingCode +' '+ number;
    setPhoneNumber(number);
    onPhoneNumberChange(formattedNumber);

    const isValidNumber = isValid(formattedNumber);
    
    if (onPhoneValidityChange) {
      onPhoneValidityChange(isValidNumber);
    }
  };

  return (
    <View
    className='flex'>
      <Text
      font='LTSaeada-Medium' className= {`mobile:text-sm tablet:text-lg laptop:text-lg text-gray-500   font-medium ${labelClassName}`}>
      {capitalizeFirstLetter(label ?? '')}
            </Text>
    <PhoneInput
      defaultCountry="CM"
      onBlur={() => {
        setBorderColor( colors.charcoal[100]);
        setIsPhoneFocus(false);
      }}
      onFocus={() => {
        setBorderColor( colors.purple[200]);
        setIsPhoneFocus(true);
      }}
     
      TextInputClassName={`flex-1   tablet:h-12  ${className}`}

      phoneInputStyles={{
        container: {
          borderColor: borderColor,
          // borderWidth:  1,
          borderRadius:24,
          
          ...customStyles?.container,
          
          // width:200
        },
        flagContainer: {
          backgroundColor:'white',
          left:12,
          borderColor:  colors.charcoal[200],
          ...customStyles?.flagContainer,
        },
        callingCode: {
          ...customStyles?.callingCode,
        },
      }}
      modalStyles={{
        modal: {
          backgroundColor: 'white',
          width: currentPlatform === 'web' ? 320 : ScreenWidth,
          height: '100%',
          top: 200,
          paddingHorizontal: 32,
        },
        backdrop: {
          backgroundColor: 'transparent',
        },
        countriesList: {},
        searchInput: {},
        countryButton: {
          borderWidth: 1,
          backgroundColor: 'white',
          marginVertical: 4,
          paddingVertical: 0,
        },
        noCountryText: {},
        noCountryContainer: {},
        flag: {
          color: '#FFFFFF',
          fontSize: 20,
        },
        callingCode: {},
        countryName: {},
      }}
      defaultValue={defaultValue}
      value={phoneNumber}
      onChangePhoneNumber={onChangePhoneNumber}
      selectedCountry={selectedCountry}
      onChangeSelectedCountry={onChangeSelectedCountry}
    />
    </View>
  );
};
