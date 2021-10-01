import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { PublicLayout } from './Layout';
import {NotFound} from "../views";
import PrivateRoutes from "./PrivateRoutes";

const PublicRoutes = () => {
    return (
        <PublicLayout>
            <Switch>
                <Route path={"/"} exact component={PrivateRoutes} />
                <Route component={NotFound} />
            </Switch>
        </PublicLayout>
    );
};

export default PublicRoutes;
