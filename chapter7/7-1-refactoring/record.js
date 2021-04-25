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

const customerData = {
    1920: {
        name: 'millo Lee',
        id: '1920',
        usages: {
            2016: {
                1: 50,
                2: 55,
                // 나머지 달(month)은 생략
            },
            2015: {
                1: 70,
                2: 63,
                // 나머지 달(month)은 생략
            },
        },
    },
    38673: {
        name: 'seungmin Lee',
        id: '38673',
        usages: {
            2016: {
                1: 50,
                2: 55,
                // 나머지 달(month)은 생략
            },
            2015: {
                1: 70,
                2: 63,
                // 나머지 달(month)은 생략
            },
        },
    },
    // 다른 고객 정보도 같은 형식으로 저장된다.
};

customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return { laterAmount: later, change: later - earlier };
}
