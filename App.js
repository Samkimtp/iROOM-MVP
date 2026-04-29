import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <View style={styles.container}>
      {/* 1. 카메라 영역 (지금은 검은 배경) */}
      <View style={styles.cameraPlaceholder}>
        <Text style={styles.infoText}>[카메라 미리보기 영역]</Text>
      </View>

      {/* 2. 실시간 튜너 정보 영역 (사진 1 상단 참고) */}
      <View style={styles.tunerOverlay}>
        <View style={styles.pitchInfo}>
          <Text style={styles.noteText}>F9</Text>
          <Text style={styles.centsText}>-10.5 cents</Text>
          <Text style={styles.hzText}>9867.2 Hz</Text>
        </View>
        
        {/* 3. 튜너 그래프 (자리만 만들기) */}
        <View style={styles.graphPlaceholder}>
          <View style={styles.targetLine} />
          <Text style={styles.infoText}>[음정 그래프 시각화 영역]</Text>
        </View>
      </View>

      {/* 4. 하단 컨트롤 버튼 */}
      <View style={styles.controls}>
        <TouchableOpacity 
          style={[styles.recordButton, isRecording && styles.recording]} 
          onPress={() => setIsRecording(!isRecording)}
        >
          <Text style={styles.buttonText}>{isRecording ? "STOP" : "REC"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  cameraPlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tunerOverlay: { position: 'absolute', top: 50, width: '100%', alignItems: 'center' },
  pitchInfo: { alignItems: 'center', marginBottom: 20 },
  noteText: { fontSize: 60, color: '#fff', fontWeight: 'bold' },
  centsText: { fontSize: 24, color: '#ff4444' },
  hzText: { fontSize: 18, color: '#aaa' },
  graphPlaceholder: { width: '90%', height: 150, borderWidth: 1, borderColor: '#333', justifyContent: 'center', alignItems: 'center' },
  targetLine: { position: 'absolute', width: 2, height: '100%', backgroundColor: '#00ff00' },
  controls: { position: 'absolute', bottom: 50, width: '100%', alignItems: 'center' },
  recordButton: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  recording: { backgroundColor: '#ff4444' },
  buttonText: { fontWeight: 'bold' },
  infoText: { color: '#555' }
});

export default App;