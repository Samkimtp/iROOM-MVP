import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [bpm, setBpm] = useState('120');
  const [flash, setFlash] = useState(false);

  // 시각적 메트로놈 효과 (BPM에 맞춰 화면 깜빡임)
  useEffect(() => {
    let interval;
    if (isRecording) {
      const msPerBeat = 60000 / parseInt(bpm);
      interval = setInterval(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 100); // 0.1초 동안 노란색 테두리
      }, msPerBeat);
    }
    return () => clearInterval(interval);
  }, [isRecording, bpm]);

  return (
    <View style={[styles.container, flash && styles.flashBorder]}>
      {/* 상단: 튜너 및 상태 표시 */}
      <View style={styles.header}>
        <Text style={styles.noteText}>F9</Text>
        <Text style={styles.subText}>{bpm} BPM</Text>
      </View>

      {/* 중앙: 메트로놈 설정 영역 */}
      <View style={styles.configArea}>
        <Text style={styles.label}>TEMPO (BPM)</Text>
        <TextInput 
          style={styles.input}
          value={bpm}
          onChangeText={setBpm}
          keyboardType="numeric"
        />
      </View>

      {/* 하단: 컨트롤 버튼 */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.recButton, isRecording && styles.recording]} 
          onPress={() => setIsRecording(!isRecording)}
        >
          <Text style={styles.buttonText}>{isRecording ? "STOP" : "START"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', borderWeight: 10, borderColor: 'transparent' },
  flashBorder: { borderColor: '#FFD700', borderWidth: 10 }, // 박자에 맞춰 노란색 테두리
  header: { marginTop: 60, alignItems: 'center' },
  noteText: { fontSize: 80, color: '#fff', fontWeight: 'bold' },
  subText: { color: '#888', fontSize: 20 },
  configArea: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { color: '#fff', marginBottom: 10 },
  input: { backgroundColor: '#333', color: '#fff', width: 100, textAlign: 'center', fontSize: 24, borderRadius: 10, padding: 10 },
  footer: { marginBottom: 50, alignItems: 'center' },
  recButton: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  recording: { backgroundColor: '#ff4444' },
  buttonText: { fontWeight: 'bold' }
});

export default App;