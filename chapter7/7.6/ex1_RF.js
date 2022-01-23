class TrackingInformation {}
class Shipment {
  get shippingCompany() {
    return this._shippingCompany; // 배송 회사
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber; // 배송 회사
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

module.exports = { TrackingInformation, Shipment };
