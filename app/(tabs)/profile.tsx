import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";

const ProfileScreen = () => {

  const handleLogout = async() => {
    try{
      await signOut(auth);
      Alert.alert("Success!", "Logged Out.");
      
    }
    catch(error){
      Alert.alert("Error", "Please Try Again.");
    }

  }
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
    </View>
    <TouchableOpacity onPress = {handleLogout} style = {styles.logOutButton}>
      <Text style = {styles.logOutText}></Text>
    </TouchableOpacity>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  logOutButton: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    alignItems: "center",
  },
  logOutText: {
    fontSize: 20,
  }

});
