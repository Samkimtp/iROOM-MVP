import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const App = () => {
  const [showResult, setShowResult] = useState(false);

  // 연주 종료 후 보여줄 가짜 데이터 (나중에 실제 데이터로 연결될 부분)
  const resultData = {
    playTime: "05:01",
    pitchAccuracy: "92%",
    rhythmStability: "88%",
    date: "2026. 4. 29. 오전 9:10"
  };

  return (
    <View style={styles.container}>
      {!showResult ? (
        /* --- 녹화 화면 --- */
        <View style={styles.fullScreen}>
          <Text style={styles.guideText}>녹화 중인 화면...</Text>
          <TouchableOpacity 
            style={styles.stopButton} 
            onPress={() => setShowResult(true)}
          >
            <Text style={styles.buttonText}>녹화 종료 및 분석</Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* --- 결과 요약 화면 (사진 2 스타일) --- */
        <View style={styles.fullScreen}>
          <View style={styles.resultOverlay}>
            <Text style={styles.prTitle}>NEW PR</Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statLine}>
                <Text style={styles.statValue}>{resultData.playTime}</Text>
                <Text style={styles.statLabel}>거리(실제 연주 시간)</Text>
              </View>
              <View style={styles.statLine}>
                <Text style={styles.statValue}>{resultData.pitchAccuracy}</Text>
                <Text style={styles.statLabel}>음정 정확도</Text>
              </View>
              <View style={styles.statLine}>
                <Text style={styles.statValue}>{resultData.rhythmStability}</Text>
                <Text style={styles.statLabel}>박자 안정감</Text>
              </View>
              <Text style={styles.dateText}>{resultData.date}</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.saveButton} 
            onPress={() => setShowResult(false)}
          >
            <Text style={styles.buttonText}>영상 저장 및 공유</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  fullScreen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  resultOverlay: { width: '90%', padding: 20, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 15 },
  prTitle: { fontSize: 80, fontWeight: '900', color: '#fff', fontStyle: 'italic', marginBottom: 20 },
  statsContainer: { alignSelf: 'flex-end' },
  statLine: { alignItems: 'flex-end', marginBottom: 15 },
  statValue: { fontSize: 32, color: '#fff', fontWeight: 'bold' },
  statLabel: { fontSize: 14, color: '#ccc' },
  dateText: { color: '#888', marginTop: 10 },
  stopButton: { padding: 20, backgroundColor: '#ff4444', borderRadius: 10 },
  saveButton: { marginTop: 30, padding: 20, backgroundColor: '#007AFF', borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  guideText: { color: '#555', marginBottom: 20 }
});

export default App;