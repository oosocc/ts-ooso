import React, {createContext, useContext, useReducer} from "react";
import {useMediaQuery} from "@material-ui/core";
import AppReducer from "./AppReducer";
import {localStorageGet} from "../utils/localStorage";


/*
* AppState结构和初始值
* */
export interface IAppState {
    darkMode: boolean;
    isAuthenticated: boolean;
    currentUser?: object | undefined;
}
const initialAppState: IAppState = {
    darkMode:false, //被AppStore中的useMediaQuery（“（首选颜色方案：深色）”覆盖
    isAuthenticated: false, //通过检查身份验证令牌在AppStore中重写
};
/*
* 全局AppStore的React上下文实例
* */
type IAppContext = [IAppState, React.Dispatch<any>];
const AppContext = createContext<IAppContext>([initialAppState,() => null]);

const AppStore: React.FC = ({children}) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const previousDarkMode = Boolean(localStorageGet('darkMode'));

    const initialState: IAppState = {
        ...initialAppState,
        darkMode: previousDarkMode || prefersDarkMode,
        // isAuthenticated:令牌已存在，
    };
    const value: IAppContext = useReducer(AppReducer, initialState);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

};
/*
* Hook 在功能组件中使用AppStore
* */
const useAppStore = (): IAppContext => useContext(AppContext);


/*
* HOC将ApStore注入类组件，也适用于功能组件
* */
interface WithAppStoreProps {
    store: object;
}
const withAppStore =
    (Component: React.ComponentType<WithAppStoreProps>): React.FC =>
        (props) => {
            return <Component {...props} store={useAppStore()} />;
        };

export { AppStore, AppContext, useAppStore, withAppStore };
