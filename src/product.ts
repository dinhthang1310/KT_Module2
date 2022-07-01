export class Product {
    private _id : number = 0;
    private _name : string;
    private _sectors : string;
    private _price : number;
    private _amount : number;
    private _dateCreated : string;
    private _describe : string;

    constructor( name: string, sectors: string, price: number, amount: number, dateCreated: string, describe: string) {
        this._name = name;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._dateCreated = dateCreated;
        this._describe = describe;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get sectors(): string {
        return this._sectors;
    }

    set sectors(value: string) {
        this._sectors = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get dateCreated(): string {
        return this._dateCreated;
    }

    set dateCreated(value: string) {
        this._dateCreated = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }
}