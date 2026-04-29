# iROOM-MVP
AI-based music education and analysis platform
# 🎺 iROOM: AI-Based Music Education & Analysis Platform

> **"음악을 감각이 아닌 데이터로 평가하는 시대를 엽니다."**

iROOM은 아마추어 연주자들이 자신의 연주를 객관적으로 분석하고, 러닝 앱의 'Personal Record'처럼 시각적인 성과를 공유할 수 있도록 돕는 에듀테크 솔루션입니다.

## ✨ Key Features

1. **Smart Tuner & Visual Metronome**
   - 실시간 주파수($Hz$) 및 센트($Cents$) 분석 오버레이.
   - 녹음 방해 없는 시각적 메트로놈(Visual Pulse).

2. **Data-Driven Performance Metrics**
   - **Play Time**: 실제 연주가 이루어진 유효 시간 측정.
   - **Pitch Accuracy**: 목표 음정 대비 정교함(%) 산출.
   - **Rhythm Stability**: 메트로놈 비트와 텅잉 시작점의 일치도(%) 분석.

3. **Auto-Generated PR Video**
   - 연주 종료 후 분석 데이터가 합성된 MP4 영상 자동 생성 및 저장.

## 🛠 Tech Stack

- **Frontend**: React Native
- **Analysis**: YIN & MPM Pitch Detection Algorithm
- **Processing**: FFmpeg for Video Overlay
- **Storage**: Local Gallery Integration

## 📸 Screenshots
*(이곳에 사진 1과 사진 2를 'Before/After' 느낌으로 배치하면 좋습니다!)*