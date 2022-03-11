class HeatingPlan {
  constructor(low, high) {
    this._temperatureRange = {
      low: low,
      high: high,
    };
  }

  withinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    return (
      low >= this._temperatureRange.low && high <= this._temperatureRange.high
    );
  }
}
const aPlan = new HeatingPlan(16, 19);
const aRoom = {
  daysTempRange: {
    low: 15,
    high: 20,
  },
};
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.withinRange(tempRange);
let alerts;

if (!isWithinRange) alerts = '방 온도가 지정 범위를 벗어났습니다.';
else alerts = '방 온도가 정상입니다.';

module.exports = alerts;
