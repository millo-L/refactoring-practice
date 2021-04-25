class Person {
    constructor(data) {
        this._name = data.name;
        this._telephoneNumber = new TelephoneNumber(data);
    }

    get name() {
        return this._name;
    }
    set name(arg) {
        this._name = arg;
    }
    get telephoneNumber() {
        return this._telephoneNumber.telephoneNumber;
    }
    get officeNumber() {
        return this._telephoneNumber.number;
    }
    set officeNumber(arg) {
        this._telephoneNumber.number = arg;
    }
    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }
    set officeAreaCode(arg) {
        this._telephoneNumber.areaCode = arg;
    }
}

class TelephoneNumber {
    constructor(data) {
        this._areaCode = data.officeAreaCode;
        this._number = data.officeNumber;
    }
    get areaCode() {
        return this._areaCode;
    }
    set areaCode(arg) {
        this._areaCode = arg;
    }
    get number() {
        return this._number;
    }
    set number(arg) {
        this._number = arg;
    }
    get telephoneNumber() {
        return `(${this.areaCode}) ${this.number}`;
    }
}
