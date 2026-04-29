import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [showResult, setShowResult] = useState(false);

  // FFmpeg 영상 합성 가상 함수
  const handleSaveVideo = () => {
    console.log("FFmpeg 엔진 가동: 비디오 + 데이터 합성 시작...");
    
    // 실제 명령어 예시: ffmpeg -i video.mp4 -vf "drawtext=..." output.mp4
    Alert.alert(
      "영상 저장 완료",
      "iROOM 데이터가 합성된 영상이 갤러리에 저장되었습니다!",
      [{ text: "확인", onPress: () => setShowResult(false) }]
    );
  };

  return (
    <View style={styles.container}>
      {!showResult ? (
        <View style={styles.center}>
          <Text style={styles.title}>🎺 iROOM Record Mode</Text>
          <TouchableOpacity style={styles.btnRed} onPress={() => setShowResult(true)}>
            <Text style={styles.btnText}>녹화 종료</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.resultContainer}>
          <View style={styles.overlayBox}>
            <Text style={styles.prText}>NEW PR</Text>
            <Text style={styles.statText}>음정 정확도: 92%</Text>
            <Text style={styles.statText}>박자 안정감: 88%</Text>
          </View>
          
          <TouchableOpacity style={styles.btnBlue} onPress={handleSaveVideo}>
            <Text style={styles.btnText}>FFmpeg 영상 합성 및 저장</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { color: '#fff', fontSize: 24, marginBottom: 30 },
  resultContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  overlayBox: { backgroundColor: 'rgba(255,255,255,0.1)', padding: 30, borderRadius: 20, width: '100%', marginBottom: 30 },
  prText: { fontSize: 60, fontWeight: '900', color: '#fff', textAlign: 'right' },
  statText: { color: '#fff', fontSize: 20, textAlign: 'right', marginTop: 10 },
  btnRed: { backgroundColor: '#ff4444', padding: 20, borderRadius: 15 },
  btnBlue: { backgroundColor: '#007AFF', padding: 20, borderRadius: 15, width: '80%', alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});

export default App;