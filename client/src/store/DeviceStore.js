import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    set types(types) {
        this._types = types
    }

    set brands(brands) {
        this._brands = brands
    }

    set devices(devices) {
        this._devices = devices
    }

    set selectedType(type) {
        this.page = 1
        this._selectedType = type
    }

    set selectedBrand(brand) {
        this.page = 1
        this._selectedBrand = brand
    }

    set page(page) {
        this._page = page
    }

    set totalCount(totalCount) {
        this._totalCount = totalCount
    }

    set limit(limit) {
        this._limit = limit
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}















