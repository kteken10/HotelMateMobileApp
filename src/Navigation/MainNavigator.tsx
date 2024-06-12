import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { LoginForm} from '../Screens/auth/login-screen';
import { View,Image, SafeAreaView } from '../ui';
import { LanguagePicker } from '../ui/language-picker';

import RegisteredForm from '../Screens/auth/registered-screen';
import { VerificationForm } from '../Screens/auth/Verification';
import OnboardingScreen from '../Screens/others/onboarding';
import { BottomTabs } from './BottomTabNavigator';
import { ReservationDetail } from '../Screens/reservation/reservation-detail';


const Stack = createStackNavigator();

const PatientPortalHeader = () => (
  <View className="mx-2 h-1/2    mt-5  ">
    {/* <View className=" py-4 w-64 h-24  rounded-xl mr-4"> */}
      <Image source={require('../assets/hotel.jpg')} className="h-5/6 w-full rounded-3xl absolute" />
    {/* </View> */}
    {/* <Text className="text-center font-semibold leading-9 text-white text-3xl">Patient Portal</Text> */}
    {/* <LanguagePicker LanguagePickerStyle={{ right: 0 }} /> */}
  </View>
);

export const AuthScreen = ({ children }: { children: React.ReactNode }) => {

  return (
    <SafeAreaView className="flex-1 ">
      {/* <View className="flex flex-1"> */}

        <PatientPortalHeader />
        {children}
      {/* </View> */}
    </SafeAreaView>
  );
};

export const LoginScreen = () => (
  <AuthScreen>
    <LoginForm />
  </AuthScreen>
);


const RegisteredScreen = () => (
  <AuthScreen>
    <RegisteredForm />
  </AuthScreen>
);

const VerificationScreen = () => (
  <AuthScreen>
    <VerificationForm />
  </AuthScreen>
);
function MainNavigator() {
  const firstOpen = useSelector((state: RootState) => state.ui.firstOpen);
  const authentificated = useSelector((state: RootState) => state.ui.authentificated);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!authentificated ? (
        <>
          {!firstOpen && (
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          )}
           <Stack.Screen name="Menu" component={BottomTabs}/>
           <Stack.Screen name='ReservationDetail' component={ReservationDetail}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="RegisteredScreen" component={RegisteredScreen} /> 
        </>
      ) : (
        <>
        {/* <Stack.Screen name="Menu" component={BottomTabs}/> */}
        {/* <Stack.Screen name="DrawerMenu" component={DrawerNavigator}/> */}
        </>
      )}

     
     
   
      
      
    </Stack.Navigator>
  );
}

export default React.memo(MainNavigator);