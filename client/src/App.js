import {BrowserRouter} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import AppRouterComponent from "./router/AppRouterComponent";
import NavbarComponent from "./components/NavbarComponent";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import NotificationPopup from "./components/NotificationPopup";

const App = observer(() => {
    const {userStore} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [isPopupShown, setIsPopupShown] = useState(false)
    const [textPopup, setTextPopup] = useState('')

    useEffect(() => {
        check().then(data => {
            if (data) {
                userStore.isAuth = true
                userStore.user = data
            }
        })
            .catch((e) => {
                console.log(e.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    const showPopup = (text) => {
        setTextPopup(text)
        setIsPopupShown(true)

        setTimeout(() => {
            setIsPopupShown(false)
        }, 3000)
    }

    return (
        <BrowserRouter>
            <NavbarComponent></NavbarComponent>
            <AppRouterComponent></AppRouterComponent>
            <NotificationPopup
                show={isPopupShown}
                text={textPopup}
            >
            </NotificationPopup>
        </BrowserRouter>
    );
})

export default App;

