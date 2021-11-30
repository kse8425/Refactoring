class Account {
  _daysOverdrawn = 1;
  daysOverdrawn = 1;
  type = {
    isPremium: true,
    overdraftCharge: new AccountType().overdraftCharge,
  };
  get bankCharge() {
    //은행 이자 계산
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this);
  }
}

class AccountType {
  //   isPremium = true;
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (account.daysOverdrawn - 7) * 0.85;
    } else return account.daysOverdrawn * 1.75;
  }
}
module.exports = Account;
