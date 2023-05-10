// import { createStore } from 'redux';
// const initialState = {
//     theme: '',
//     value: false,
//     lang: '',
//     name: '',
//     avatarLink: '',
//     token: sessionStorage.getItem('token'),
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'BLACK':
//             return {
//                 ...state,
//                 theme: 'dark',
//                 value: true
//             };
//         case 'WHITE':
//             return {
//                 ...state,
//                 theme: '',
//                 value: false
//             };
//         case 'LANG':
//             return {
//                 ...state,
//                 lang: action.payload
//             };
//         case 'TOKEN':
//             return {
//                 ...state,
//                 token: action.payload
//             };  
//         case 'NAME':
//             return {
//                 ...state,
//                 name: action.payload
//             };   
//         case 'AVATARLINK':
//             return {
//                 ...state,
//                 avatarLink: action.payload
//             };                               
//         default:
//             return state;
//     }
// }

// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import langSlice from "./slices/langSlice";
import taskSlice from "./slices/taskSlice";

export const store = configureStore({
    reducer: {
        themeSlice,
        langSlice,
        taskSlice
    },
    devTools: true
});