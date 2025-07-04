import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert, StyleSheet, KeyboardAvoidingView } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebaseConfig"

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success!", "User registered.");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success!", "Logged in.");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };
 //KeyboardAvoidingView moves components up away from keyboard if it is overlapped
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Firebase Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Login" onPress={handleLogin} />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    marginBottom: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 16,
    borderRadius: 4,
  },
});
