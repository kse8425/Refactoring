function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance() {
    //총 거리 계산
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {
    // 두 지점의 거리 계산
    return p2 > p1 ? (p2 - p1) * radians(0.5) : (p1 - p2) * radians(0.5);
  }

  function radians(degrees) {
    return degrees * 2;
  } // 라디안 값으로 변환

  function calculateTime() {
    return 1200;
  } // 총 시간 계산
}
