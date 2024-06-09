

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BiometricInfoState {
    isSwitchOn: boolean;
    isSwitchOnE: boolean;
}

const initialState: BiometricInfoState = {
    isSwitchOn: false,
    isSwitchOnE: false,
};

const biometricInfoSlice = createSlice({
    name: 'biometricInfo',
    initialState,
    reducers: {
        setIsSwitchOn: (state, action: PayloadAction<boolean>) => {
            state.isSwitchOn = action.payload;
        },
        setIsSwitchOnE: (state, action: PayloadAction<boolean>) => {
            state.isSwitchOnE = action.payload;
        },
    },
});

export const { setIsSwitchOn, setIsSwitchOnE } = biometricInfoSlice.actions;

export default biometricInfoSlice.reducer;