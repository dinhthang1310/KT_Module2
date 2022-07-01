"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, sectors, price, amount, dateCreated, describe) {
        this._id = 0;
        this._name = name;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._dateCreated = dateCreated;
        this._describe = describe;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get sectors() {
        return this._sectors;
    }
    set sectors(value) {
        this._sectors = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get dateCreated() {
        return this._dateCreated;
    }
    set dateCreated(value) {
        this._dateCreated = value;
    }
    get describe() {
        return this._describe;
    }
    set describe(value) {
        this._describe = value;
    }
}
exports.Product = Product;
