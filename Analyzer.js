/**
 * iROOM Music Analysis Engine (Logic)
 */

// 1. 음정 정확도 계산 함수
export const calculatePitchScore = (errorCents) => {
  // 에러가 0에 가까울수록 100점에 가깝게 계산
  const score = 100 - Math.abs(errorCents);
  return score < 0 ? 0 : score.toFixed(1);
};

// 2. 박자 안정감 계산 함수
export const calculateRhythmScore = (gapMs) => {
  // 메트로놈과 연주 시작점의 차이(ms)를 점수로 환산
  // 50ms 이내면 아주 정확한 편
  const score = 100 - (gapMs / 2);
  return score < 0 ? 0 : score.toFixed(1);
};

console.log("iROOM 분석 엔진 로드 완료!");