import { createSlice } from "@reduxjs/toolkit"
import { type AppDispatch, type RootState } from "../redux/store"

export type PersonalInfoState = Record<string, any>

const initialState: PersonalInfoState = {}

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    addPersonalInfo: (state, action) => {
      const payload = action.payload
      state[payload.id] = payload
      return state
    },
    updatePersonalInfo: (state, action) => {
      const payload = action.payload
      state[payload.id] = { ...state[payload.id], ...payload }
      return state
    }
  }
})

export const { addPersonalInfo, updatePersonalInfo } = personalInfoSlice.actions

export default personalInfoSlice.reducer

export const addPersonalInfoAsync =
  (personalInfo: any) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(addPersonalInfo(personalInfo))
    } catch (err) {}
  }
export const updatePersonalInfoAsync =
  (personalInfo: any) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updatePersonalInfo(personalInfo))
    } catch (err) {}
  }
