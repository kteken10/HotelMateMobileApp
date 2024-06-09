import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');
const aspectRatio = height / width;

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const isTablet = aspectRatio < 1.6; 
export const isSmallDevice = width < 375;

export const getCurrentPlatform = () => {
  if (process.env.WEB) {
    return 'web';
  } else {
    return Platform.OS;
  }
};


export const currentPlatform = getCurrentPlatform();
