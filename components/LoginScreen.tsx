import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Elkin_s8" && password === "elkin200508!") {
      onLogin();
    } else {
      alert("Ingrese su contrasena por favor ");
    }
  };

  return (
    <View style={styles.container}>

      <Image
      source={require("../assets/logo.png")} 
        style={styles.logo}
        resizeMode="contain"
      />


      <Text style={styles.title}>Welcome To MusicFy</Text>
      
  
      <View style={styles.formContainer}>
   
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        
       
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
      
        <TouchableOpacity
          style={styles.loginButton} 
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        
  
        <Text style={styles.forgotPassword}>
          Forgot your password?{" "}
          <Text style={styles.resetLink}>Reset here</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C8BF5', 
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6, 
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  loginButton: { 
    width: '100%',
    padding: 16,
    backgroundColor: '#0066FF',
    borderRadius: 6,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#999',
  },
  resetLink: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
