import { createSlice } from "@reduxjs/toolkit"
import { type AppDispatch, type RootState } from "./store"

export type StaffState = Record<string, any>

const initialState: StaffState = {}

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    liststaff: (state, action) => {
      const payload = action.payload
      for (const el of payload) {
        state[el.id] = el
      }
      return state
    }
  }
})

export const { liststaff } = staffSlice.actions

export default staffSlice.reducer

// create firestore user if not already exists
export const liststaffAsync =
  (staffs: any) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(liststaff(staffs))
    } catch (err) {}
  }
