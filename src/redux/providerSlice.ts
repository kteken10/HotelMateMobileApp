import { createSlice } from "@reduxjs/toolkit"
import { type AppDispatch, type RootState } from "../redux/store"

export type ProviderState = Record<string, any>

const initialState: ProviderState = {}

export const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {
    listProvider: (state, action) => {
      const payload = action.payload
      for (const el of payload) {
        state[el.id] = el
      }
      return state
    }
  }
})

export const { listProvider } = providerSlice.actions

export default providerSlice.reducer

export const listProviderAsync =
  (providers: any) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(listProvider(providers))
    } catch (err) {}
  }
