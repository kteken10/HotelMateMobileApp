import { createSlice } from "@reduxjs/toolkit"

export type UIState = Record<string, string | boolean | number | null>

const initialState: UIState = {
  firstOpen: false,
  profile_loader: false,
  biometric_set :false,
  authentificated: false,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    firstOpen: (state, action) => {
      state.firstOpen = action.payload 
      return state
    },
    profile_loader: (state, action) => {
      state.profile_loader = action.payload
      return state
    },
    biometric_set: (state, action) => {
      state.biometric_set = action.payload
      return state
    },
    authentificated: (state, action) => {
      state.authentificated = action.payload // Correction ici
      return state
    },
   
  }
})

export const { firstOpen, profile_loader, authentificated, biometric_set } = uiSlice.actions;

export default uiSlice.reducer;