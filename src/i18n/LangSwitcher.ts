// LanguageSwitcher.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLanguage } from '../redux/languageSlice';
import i18next from 'i18next';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';

export const changeLanguage = async (
  newLanguage: string,
  dispatch: Dispatch<AnyAction>,
) => {
  try {
    // Stockez la nouvelle langue dans AsyncStorage
    await AsyncStorage.setItem('appLanguage', newLanguage);

    // Mettez à jour la langue dans le store Redux
    dispatch(setLanguage(newLanguage));

    // Changez la langue dans i18next
    i18next.changeLanguage(newLanguage);
  } catch (error) {
    console.error('Error changing language:', error);
  }
};
