import 'intl';
import 'intl-pluralrules';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en';
import fr from './locale/fr';
import pt from './locale/pt';
import es from './locale/es';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Déterminez la langue par défaut en fonction de la langue stockée dans AsyncStorage (ou 'en' par défaut)
const getDefaultLanguage = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem('appLanguage');
    return storedLanguage || 'en';
  } catch (error) {
    console.error('Error getting default language:', error);
    return 'en';
  }
};

// Les ressources de traduction pour différentes langues
export const defaultNS = 'common';

export const resources = {
  en: {
    common: en,
  },
  fr: {
    common: fr,
  },
  pt: {
    common: pt,
  },
  es: {
    common: es,
  },
};

// Configurez i18next avec la langue par défaut obtenue de AsyncStorage
getDefaultLanguage().then((defaultLanguage) => {
  i18next
    .use(initReactI18next)
    .init({
      lng: defaultLanguage,
      // debug: true,
      resources,
      defaultNS,
    });
});

export default i18next;
