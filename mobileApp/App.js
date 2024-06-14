import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './components/LoginPage.js';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
