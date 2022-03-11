const aRoom = {
  daysTempRange: {
    low: 15,
    high: 20,
  },
};

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;

class HeatingPlan {
  constructor(low, high) {
    this._temperatureRange = {
      low: low,
      high: high,
    };
  }

  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}

const aPlan = new HeatingPlan(16, 19);
let alerts;
if (!aPlan.withinRange(low, high))
  alerts = '방 온도가 지정 범위를 벗어났습니다.';
else alerts = '방 온도가 정상입니다.';

module.exports = alerts;
