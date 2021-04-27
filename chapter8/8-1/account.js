class Account {
    constructor(data) {
        this._daysOverdrawn = data.daysOverdrawn;
        this._type = data.type;
    }

    get type() {
        return this._type;
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) {
            result += this.overdraftCharge;
        }
        return result;
    }

    get overdraftCharge() {
        if (this._type.isPremium) {
            const baseCharge = 10;
            if (this._daysOverdrawn <= 7) {
                return baseCharge;
            }
            return baseCharge * (this._daysOverdrawn - 7) * 0.85;
        }
        return this._daysOverdrawn * 1.75;
    }
}
