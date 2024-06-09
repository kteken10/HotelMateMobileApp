import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import AsyncStorage from '@react-native-async-storage/async-storage';
import uiReducer from "./uiSlice"
import languageReducer from "./languageSlice"
import userReducer from "./userSlice"
import insuranceReducer from "./insuranceSlice"
import personalInfoReducer from "./personalInfoSlice"
import emergencyReducer from "./emergencySlice"
import medicalRecordReducer from "./medicalRecordSlice"
import providerReducer from "./providerSlice"
import biometricInfoReducer from "./biometricInfoSlice"
import staffReducer from "./staffSlice"
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 100000 
  
}

const rootReducer = combineReducers({
  ui: uiReducer,
  staff: staffReducer,
  language: languageReducer,
  user: userReducer,
  insurance: insuranceReducer,
  personalInfo: personalInfoReducer,
  emergency: emergencyReducer,
  medical_record: medicalRecordReducer,
  provider: providerReducer,
  biometricInfo:biometricInfoReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "development",
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch