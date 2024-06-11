import Constants from 'expo-constants';

export const serverAddress = Constants.linkingUri.split('exp://')[1].split(':')[0];
