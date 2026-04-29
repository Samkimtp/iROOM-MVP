import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * iROOM Main Entry Point
 * 이곳에서 카메라와 튜너 UI가 시작됩니다.
 */
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎺 iROOM MVP</Text>
      <Text style={styles.status}>카메라 및 튜너 인터페이스 준비 중...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
});

export default App;