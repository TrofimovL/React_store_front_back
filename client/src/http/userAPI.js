import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";
import {useContext} from "react";
import {Context} from "../index";


export const registration = async (email, password, role = 'CUSTOMER') => {
    const {data} = await $host.post('api/user/registration', {email, password, role: role})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}


export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}


export const check = async () => {
    if (localStorage.getItem('token')) {

        const {data} = await $authHost.get('api/user/auth')

        if (!data) {
            return null
        }

        localStorage.setItem('check success. Token:', data.token)
        return jwtDecode(data.token)

    } else {
        return null
    }


}
