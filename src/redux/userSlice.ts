/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { type Reducer, createSlice } from "@reduxjs/toolkit"
import { type AppDispatch, type RootState } from "../redux/store"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { EXPIRE_TOKEN } from "../utils/Constants";
import moment from "moment"



export interface User {
  [index: string]: string | number | boolean | Record<string, any> | undefined
  firstname: string
  lastname: string
  maritalStatus: string
  dateOfBirth: number
  gender: string
  phoneNumber: string
  email?: string
  address?: Record<string, any>
  emailVerified?: boolean
  primaryCarePhysician?: string
  preferedLanguage?: string
  id: string
  adresse:[]
}

const initialState: User | null = null

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    create_user: (state, action) => {
      return action.payload
    },
    update_user: (state, action) => {
      return action.payload
    }
  }
})



                                                                                                                                                                                                                                                              
export const { update_user } = userSlice.actions

export const updateUserAsync =
  (userData: Record<string, any> | null) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const user = getState().user
      if (user) {
        const updatedUser = { ...user, ...userData }
        await AsyncStorage.setItem("@USER", JSON.stringify(updatedUser))
        dispatch(update_user(updatedUser))
      }
    } catch (err) {}
  }

export const { create_user } = userSlice.actions



export const createUserAsync =
  (userData: Record<string, any> | null) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
   
      await AsyncStorage.setItem("@USER", JSON.stringify(userData));
      const token_expiration = moment()
        .add(EXPIRE_TOKEN, "second")
        .toDate()
        .valueOf()
        .toString();
      await AsyncStorage.setItem("@TOKEN_EXPIRATION", token_expiration);
      dispatch(create_user(userData));
   
  };

export default userSlice.reducer as Reducer<User | null>



export const checkUserValidityAsync = async () => {
  try {
    const user = await AsyncStorage.getItem("@USER")
    console.log("user", user)

    if (user) {
      const token_expiration = await AsyncStorage.getItem("@TOKEN_EXPIRATION")
      console.log("user", token_expiration)

      if (
        token_expiration &&
        Number(token_expiration) >= new Date().valueOf()
      ) {
        return JSON.parse(user)
      } else {
        await AsyncStorage.removeItem("@USER")
      }
    }
  } catch (err) {}
}
