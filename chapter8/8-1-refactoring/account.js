class Account {
    constructor(data) {
        this._daysOverdrawn = data.daysOverdrawn;
        this._type = new AccountType(data.type);
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) {
            result += this.overdraftCharge;
        }
        return result;
    }

    get overdraftCharge() {
        return this._type.overdraftCharge(this._daysOverdrawn);
    }
}

class AccountType {
    constructor(data) {
        this._isPremium = data.isPremium;
    }

    get isPremium() {
        return this._isPremium;
    }

    overdraftCharge(daysOverdrawn) {
        if (this._isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7) {
                return baseCharge;
            }
            return baseCharge * (daysOverdrawn - 7) * 0.85;
        }
        return daysOverdrawn * 1.75;
    }
}
