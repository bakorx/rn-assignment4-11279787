import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orContinueWith}>Or continue with</Text>

      <View style={styles.socialContainer}>
        <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
      </View>

      <Text style={styles.registerText}>Haven't an account? <Text style={styles.registerLink}>Register</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContinueWith: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerText: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 20,
  },
  registerLink: {
    color: '#3B82F6',
    fontWeight: 'bold',
  },
});

export default LoginPage;
