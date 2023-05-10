import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: '', value: false };

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeValue(state, action) {
            state.theme = action.payload;
        },
        setValue(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setThemeValue, setValue } = themeSlice.actions;
export default themeSlice.reducer;