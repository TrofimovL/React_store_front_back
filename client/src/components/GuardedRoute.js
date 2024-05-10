import React from 'react';
import {Navigate, Route} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const GuardedRoute = ({isAuth, ...props}) => {
    if (!isAuth) {
        return <Navigate to={SHOP_ROUTE}></Navigate>
    }

    return <Route {...props}></Route>
};

export default GuardedRoute;
