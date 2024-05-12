import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {

    const {userStore} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLoginPage = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
            if (isLoginPage) {
                data = await login(email, password)
                console.log('login', data)

            } else {
                data = await registration(email, password)
                console.log('registration', data)
            }

            userStore.user = data
            userStore.isAuth = true
            navigate(SHOP_ROUTE)
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <Container className='d-flex justify-content-center align-items-center mt-5'>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLoginPage ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        placeholder='Введите ваш email'
                        className='mt-5'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    ></Form.Control>
                    <Form.Control
                        placeholder='Введите пароль'
                        className='mt-3'
                        type='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    ></Form.Control>
                    <Button
                        className='mt-3'
                        variant={'outline-primary'}
                        onClick={click}
                    >
                        {isLoginPage ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    {isLoginPage
                        ?
                        <div className='mt-3'>
                            Нет аккаунта? <NavLink className='text-decoration-none'
                                                   to={REGISTRATION_ROUTE}>Зарегистрироваться.</NavLink>
                        </div>
                        :
                        <div className='mt-3'>
                            Есть аккаунт? <NavLink className='text-decoration-none' to={LOGIN_ROUTE}>Войти.</NavLink>
                        </div>
                    }

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
