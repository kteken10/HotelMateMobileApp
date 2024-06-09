import { createSlice } from "@reduxjs/toolkit"
import { type AppDispatch, type RootState } from "../redux/store"

export type EmergencyContactState = Record<string, any>

const initialState: EmergencyContactState = {}

export const emergencySlice = createSlice({
  name: "emergency",
  initialState,
  reducers: {
    emergencyContact: (state, action) => {
      const payload = action.payload
      state[payload.id] = payload
      return state
    }
  }
})

export const { emergencyContact } = emergencySlice.actions

export default emergencySlice.reducer


export const addEmergencyContactAsync =
  (emergencyData: any) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(emergencyContact(emergencyData))
    } catch (err) {}
  }
