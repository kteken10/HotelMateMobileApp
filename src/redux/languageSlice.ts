// LanguageSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'en', 
  },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state: { language: { value: any; }; }) => state.language.value;

export default languageSlice.reducer;


