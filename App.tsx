import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
import { I18nextProvider } from 'react-i18next';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {  NativeWindStyleSheet } from 'nativewind';
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MenuProvider } from 'react-native-popup-menu';
import i18next from './src/i18n/i18n';
import { store } from './src/redux/store';
import { MainNavigator } from './src/Navigation'
import FontLoader from './src/utils/FontLoader'; 
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';



function MainApp() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Provider store={store}>
            <I18nextProvider i18n={i18next}>
              <FontLoader>
              <PaperProvider>
                <MenuProvider>
                  <NavigationContainer>
                    <MainNavigator />
                  </NavigationContainer>
                </MenuProvider>
                </PaperProvider>
              </FontLoader>
            </I18nextProvider>
          </Provider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ApplicationProvider>
  );
}
NativeWindStyleSheet.setOutput({ web: 'native' })

export default function App() {
  return (
    <>
      <MainApp />
      <FlashMessage 
      position="top" 
      animationDuration={800}
      type='success'
     floating={true} 
  
     titleStyle={{color: 'white'}}
    // duration={3000}
    
/>
    </>
  );
}