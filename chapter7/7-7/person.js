class Person {
    constructor(data) {
        this._name = data.name;
        this._department = new Department(data);
    }

    get name() {
        return this._name;
    }
    set department(arg) {
        this._department = new Department(arg);
    }
    get manager() {
        return this._department.manager;
    }
    get chargeCode() {
        return this._department.chargeCode;
    }
}

class Department {
    constructor(data) {
        this._chargeCode = data.chargeCode;
        this._manager = data.manager;
    }

    get chargeCode() {
        return this._chargeCode;
    }
    set chargeCode(arg) {
        this._chargeCode = arg;
    }
    get manager() {
        return this._manager;
    }
    set manager(arg) {
        this._manager = arg;
    }
}
