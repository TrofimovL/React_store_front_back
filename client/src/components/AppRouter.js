import React, {useContext, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import GuardedRoute from "./GuardedRoute";

const AppRouter = () => {
    const {userStore} = useContext(Context)

    const isAuth = userStore.isAuth


    return (
        <Routes>
            {authRoutes.map(({path, Component}) =>
                <Route
                    key={path}
                    element={
                        <GuardedRoute // Как-то это слишком костыльно... так не должно быть
                            isAuth={isAuth}
                            path={path}
                            element={<Component/>}
                        >
                        </GuardedRoute>
                    }
                >
                </Route>

                // <Route key={path} path={path} element={<Component/>}></Route>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}></Route>
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace/>}/>
        </Routes>
    );
};

export default AppRouter;
