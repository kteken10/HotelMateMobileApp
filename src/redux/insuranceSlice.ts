import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../redux/store";

export type InsuranceState = Record<string, any>;

const initialState: InsuranceState | null = null;

export const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    addInsurance: (state, action) => {
      const payload = action.payload;
      if (state !== null) {
        return { ...(state as any), [payload.id]: action.payload };
      }
      return { [payload.id]: action.payload };
    },
  },
});

export const { addInsurance } = insuranceSlice.actions;

export default insuranceSlice.reducer;

// create firestore user if not already exists
export const addInsuranceAsync = (
  insuranceData: Record<string, any> | null
): any => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(addInsurance(insuranceData));
  } catch (err) {}
};