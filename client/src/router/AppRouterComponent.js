import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {adminRoutes, authRoutes, publicRoutes} from "./routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import GuardedRoute from "./GuardedRoute";

const AppRouterComponent = () => {
    const {userStore} = useContext(Context)

    return (
        <Routes>
            {adminRoutes.map(({path, Component}) =>
                    <Route
                        key={path}
                        path={path}
                        element={
                            <GuardedRoute
                                condition={userStore.isAdmin}
                                path={path}
                                element={<Component/>}
                            >
                            </GuardedRoute>
                        }
                    >
                    </Route>
            )}

            {authRoutes.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    element={
                        <GuardedRoute
                            condition={userStore.isAuth}
                            path={path}
                            element={<Component/>}
                        >
                        </GuardedRoute>
                    }
                >
                </Route>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}></Route>
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace/>}/>
        </Routes>
    );
};

export default AppRouterComponent;
