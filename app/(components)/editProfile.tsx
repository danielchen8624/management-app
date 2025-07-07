import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { db, auth } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";

function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(""); // change this to a scroll later
  const [employeeId, setEmployeeId] = useState("");
  // phone
  const userId = auth.currentUser?.uid;

  const updateUser = async () => {
    if (userId) {
      const userRef = doc(db, "users", userId);
      try {
        await setDoc(userRef, {
          firstName, // means "firstName": firstName
          lastName,
          birthday,
          employeeId,
        });
        Alert.alert("Changes Saved!");
        router.back();
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "please try again.");
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.container}>
            <Text>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => {
                setFirstName(text);
              }}
              autoCapitalize="sentences"
            />
            <Text>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => {
                setLastName(text);
              }}
              autoCapitalize="sentences"
            />
            <Text>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Birthday"
              value={birthday}
              onChangeText={(text) => {
                setBirthday(text);
              }}
              autoCapitalize="none"
            />
            <Text>Employee ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Employee ID"
              value={employeeId}
              onChangeText={(text) => {
                setEmployeeId(text);
              }}
              autoCapitalize="sentences"
            />
            <TouchableOpacity onPress = {updateUser} style = {styles.button}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f9f9f9",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
