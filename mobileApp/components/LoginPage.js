import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.welcome}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      </View>
      <Text style={styles.or}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
        <Image source={require('../assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
      </View>
      <TouchableOpacity onPress={() => {  }}>
        <Text style={styles.register}>Haven't created an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#356899',
  },
  welcome: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 17,
    color: '#666',
    marginVertical: 10,
  },
  form: {
    marginTop: 20,
  },
  input: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    marginVertical: 10,
    height: 80,
  },
  or: {
    marginVertical: 20,
    textAlign: 'center',
    color: '#666',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 60,
  },
  socialIcon: {
    width: 40,
    height: 40
  },
  register: {
    textAlign: 'center',
    color: '#0066cc',
    marginBottom: 30,
  },

  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#356899',
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

});

export default LoginPage;
