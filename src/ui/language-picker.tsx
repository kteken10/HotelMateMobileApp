import React, { useState, useEffect } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import CountryFlag from 'react-native-country-flag';

import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, selectLanguage } from '../redux/languageSlice';
import { Menu, TouchableRipple } from 'react-native-paper';
import { ArrowDown3 } from 'iconsax-react-native';
import { changeLanguage } from '../i18n/LangSwitcher';


interface Styles {
  container?: ViewStyle;
  pickerButton?: ViewStyle;
  dropdown?: ViewStyle;
  flatList?: ViewStyle;
  countryList?: ViewStyle;
  countryItem?: ViewStyle;
  selectedCountryItem?: ViewStyle;
  countryInfo?: ViewStyle;
  countryText?: ViewStyle;
  LanguagePickerStyle?: ViewStyle;
  countryInfoContainer?: ViewStyle;
  dropcolor?:string
}

interface Country {
  isoCode: string;
  language: string;
}

const countries: Country[] = [
  { isoCode: 'us', language: 'English' },
  { isoCode: 'fr', language: 'Français' },
  { isoCode: 'es', language: 'Español' },
  { isoCode: 'pt', language: 'Português' },
];

export const LanguagePicker: React.FC<Styles> = ({ LanguagePickerStyle, dropcolor }) => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguage);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!selectedLanguage) {
      console.log('Language stored in Redux:', selectedLanguage);
      dispatch(setLanguage('en'));
    }
  }, [dispatch, selectedLanguage]);

  const handleCountrySelect = (country: Country) => {
    let language = country.isoCode;
  
    changeLanguage(language === 'us' ? 'en' : language, dispatch);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <View style={[styles.container, LanguagePickerStyle]}>
      <Menu
        visible={isDropdownOpen}
        onDismiss={toggleDropdown}
        contentStyle={{backgroundColor:'white'}}
        anchor={
          <TouchableRipple style={styles.pickerButton} onPress={toggleDropdown}>
          <View style={styles.countryInfoContainer}>
            <View style={styles.countryInfo}>
              {countries.some((country) => country.isoCode === selectedLanguage) ? (
                <CountryFlag isoCode={selectedLanguage} size={22} />
              ) : (
                <CountryFlag isoCode="us" size={22} />
              )}
            </View>
           <ArrowDown3 size={18} color={dropcolor? dropcolor:"white"} variant='Bold'/>
          </View>
        </TouchableRipple>
        }
      >
        {countries
          .filter(country => country.isoCode !== selectedLanguage) 
          .map((country) => (
          <Menu.Item
            key={country.isoCode}
            onPress={() => handleCountrySelect(country)}
            title={
              <View style={styles.countryInfo}>
                <CountryFlag isoCode={country.isoCode} size={25} />
                <Text>{country.language}</Text>
              </View>
            }
            style={[
              styles.countryItem,
              (selectedLanguage === country.isoCode || 
              (selectedLanguage === 'en' && country.isoCode === 'us')) 
                ? styles.selectedCountryItem
                : null,
            ]}
          />
        ))}
      </Menu>
    </View>
  );
};

const styles: Styles = {
  container: {
    alignItems: 'center',
    zIndex: 9999,
    position: 'absolute',
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    marginLeft: 10,
  },
  flatList: {
    position: 'relative',
    zIndex: 1,
  },
  countryList: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  countryItem: {
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  countryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryText: {
    marginLeft: 7,
  },
};

