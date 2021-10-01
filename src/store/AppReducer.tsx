import { localStorageSet } from '../utils/localStorage';
import {IAppState} from "./AppStore";
import React from "react";

const AppReducer: React.Reducer<IAppState, any> = (state,action) => {
    switch (action.type || action.action){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action?.currentUser || action?.payload,
            };
        case 'SIGN_UP':
        case 'LOG_IN':
            return {
                ...state,
                isAuthenticated: true,
            };
        case 'LOG_OUT':
            return {
                ...state,
                isAuthenticated: false,
                currentUser: undefined, // Also reset previous user data
            };
        case 'SET_DARK_MODE': {
            const darkMode = action?.darkMode ?? action?.payload;
            localStorageSet('darkMode', darkMode);
            return {
                ...state,
                darkMode,
            };
        }
        default:
            return state;
    }
};

export default AppReducer;
