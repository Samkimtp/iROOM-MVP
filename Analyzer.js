/**
 * iROOM Music Analysis Engine (Advanced)
 */

// 1. 트럼펫(Bb) 이조 로직
// 실제 들리는 소리(Concert Pitch)를 트럼펫 악보 음(Written Pitch)으로 변환
export const transposeToTrumpet = (concertNote) => {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  let index = notes.indexOf(concertNote);
  
  // Bb 악기는 장2도(2칸) 위로 변환해야 함
  let transposedIndex = (index + 2) % 12;
  return notes[transposedIndex];
};

// 2. 음정 정확도 계산 (센트 단위 오차 반영)
export const calculatePitchScore = (errorCents) => {
  const score = 100 - Math.abs(errorCents);
  return score < 0 ? 0 : score.toFixed(1);
};

// 3. 박자 안정감 계산 (메트로놈 대비 오차)
export const calculateRhythmScore = (gapMs) => {
  const score = 100 - (gapMs / 2);
  return score < 0 ? 0 : score.toFixed(1);
};

console.log("iROOM 트럼펫 전용 분석 엔진 업데이트 완료!");