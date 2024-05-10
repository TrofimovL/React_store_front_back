import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._user = {}
        makeAutoObservable(this)
    }

    set isAuth(bool) {
        this._isAuth = bool
        if (!bool) {
            localStorage.removeItem('auth')
        }
        console.log('isAuth =', bool)
    }


    set user(user) {
        console.log('set user', user)
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

}
