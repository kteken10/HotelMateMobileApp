import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FlagFrenchIcon, FlagEnglishIcon, FlagPortugueseIcon, FlagSpanishIcon } from '../assets/icons';

const languageMap = {
  en: {
    icon: <FlagEnglishIcon style={{ width: 25, height: 15, top: 4 }} />,
    name: 'english'
  },
  fr: {
    icon: <FlagFrenchIcon style={{ width: 25, height: 15, top: 4 }} />,
    name: 'french'
  },
  pt: {
    icon: <FlagPortugueseIcon style={{ width: 25, height: 15, top: 4 }} />,
    name: 'portuguese'
  },
  es: {
    icon: <FlagSpanishIcon style={{ width: 25, height: 15, top: 4 }} />,
    name: 'spanish'
  }
};

export const getNameCountryOfFlag = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return languageMap[language]?.name || null;
};

export const FlagIcon = () => {
  const language = useSelector((state: RootState) => state.language.value);
  return languageMap[language]?.icon || null;
};