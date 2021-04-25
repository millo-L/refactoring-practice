class Shipment {
    constructor(data) {
        this._shippingCompany = data.shippingCompany;
        this._trackingNumber = data.trackingNumber;
    }

    get shippingCompany() {
        return this._shippingCompany;
    }
    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }
    get trackingNumber() {
        return this._shippingCompany;
    }
    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}
