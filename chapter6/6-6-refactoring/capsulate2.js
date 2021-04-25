class Person {
    constructor(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }

    get lastName() {
        return this._lastName;
    }
    get firstName() {
        return this._firstName;
    }

    set name(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }
}

let defaultOwnerData = {
    firstName: 'millo',
    lastName: 'Lee',
};

function defaultOwner() {
    return new Person(defaultOwnerData);
}

module.exports = {
    Person,
    defaultOwner,
};
