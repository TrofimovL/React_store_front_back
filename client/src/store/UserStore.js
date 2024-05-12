import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._role = 'CUSTOMER'
        makeAutoObservable(this)
    }

    set isAuth(bool) {
        this._isAuth = bool
        if (!bool) {
            localStorage.removeItem('auth')
        }
    }


    set user(user) {
        this._user = user
    }

    set role(role){
        this._role = role
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get isAdmin(){
        return this._user.role === 'ADMIN'
    }

    get role(){
        return this._role
    }

}
