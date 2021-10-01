import { useAppStore } from "../store";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";


/*
* 根据经过身份验证或匿名的用户呈现路由
* */
const Routes = () => {
     const [state /*, dispatch*/] = useAppStore();

    console.log('Routes() - isAuthenticated:', state.isAuthenticated);
    // return state.isAuthenticated ? PrivateRoutes:PublicRoutes;
    return state.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};
export default Routes;
