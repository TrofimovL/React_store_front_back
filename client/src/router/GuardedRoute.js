import React from 'react';
import {Navigate, Route} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const GuardedRoute = ({condition, element}) => {

    if (!condition) {
        return <Navigate to={SHOP_ROUTE}></Navigate>
    }

    return element
};

export default GuardedRoute;
