// FontLoader.ts
import React, { useEffect, ReactNode } from 'react'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


interface FontLoaderProps {
  children: ReactNode; 
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'LTSaeada-Black': require('../assets/fonts/LTSaeada-Black.otf'),
    'LTSaeada-Bold': require('../assets/fonts/LTSaeada-Bold.otf'),
    'LTSaeada-ExtraBlack': require('../assets/fonts/LTSaeada-ExtraBlack.otf'),
    'LTSaeada-ExtraBold': require('../assets/fonts/LTSaeada-ExtraBold.otf'),
    'LTSaeada-ExtraLight': require('../assets/fonts/LTSaeada-ExtraLight.otf'),
    'LTSaeada-Hairline': require('../assets/fonts/LTSaeada-Hairline.otf'),
    'LTSaeada-Light': require('../assets/fonts/LTSaeada-Light.otf'),
    'LTSaeada-Medium': require('../assets/fonts/LTSaeada-Medium.otf'),
    'LTSaeada-Regular': require('../assets/fonts/LTSaeada-Regular.otf'),
    'LTSaeada-SemiBold': require('../assets/fonts/LTSaeada-SemiBold.otf'), 
    'LTSaeada-Thin': require('../assets/fonts/LTSaeada-Thin.otf'),
    'Sonama': require('../assets/fonts/sonama.otf'),
    'TwemojiMozilla':require('../assets/fonts/TwemojiMozilla.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return children;
};

export default FontLoader;
