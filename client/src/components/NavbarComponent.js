import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavbarComponent = () => {
    const {userStore} = useContext(Context)
    const navigate = useNavigate();

    const logout = () => {
        userStore.user = {}
        userStore.isAuth = false
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className='text-decoration-none fs-3 fw-bold'>Главная</NavLink>

                {userStore.isAuth ?
                    <Nav className="ml-auto text-white">

                        {
                            userStore.isAdmin && <Button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        }
                        <Button
                            className='mx-2'
                            onClick={() => {
                                logout()
                            }}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto text-white">
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
};

export default observer(NavbarComponent);
