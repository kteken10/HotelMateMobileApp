import type { RouteProp as NRouteProp } from '@react-navigation/native';

export type RootStackParamList =
  {
    LoginScreen:undefined
    Verification:undefined
    RegisteredScreen:undefined
    Dependant:undefined
    Menu:undefined

  }
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<RootStackParamList, T>;