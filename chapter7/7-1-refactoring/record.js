class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    set name(aString) {
        this._name = aString;
    }
    get name() {
        return this._name;
    }

    set country(aCountryCode) {
        this._country = aCountryCode;
    }
    get country() {
        return this._country;
    }
}

const organization = new Organization({ name: 'millo Lee', country: 'KR' });

function getOrganization() {
    return organization;
}

getOrganization().name = 'new name';
result += `<h1>${getOrganization().name}</h1>`;
