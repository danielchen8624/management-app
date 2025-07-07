import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {db, auth} from "../../firebaseConfig"; 
import {collection, addDoc, Timestamp} from "firebase/firestore";

export default function HomeScreen() {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const options = ["light", "door", "jelq"];
  const [selected, setSelected] = useState("");
  const [showTextBox, setShowTextBox] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showSelectOption, setShowSelectOption] = useState(true);

  const handleSubmit = async() => {
    try {
      await (addDoc(collection(db, "requests"), {
        "type": selected,
        "description": inputValue,
        "createdBy": auth.currentUser?.uid,
        "createdAt": Timestamp.now(),
        "status": "pending"
      }));
      
      Alert.alert("Success", "submitted!");

    }
    catch (error){
      console.error(error);
      Alert.alert("Error", "please try again.")
    }

    
    console.log(selected, ":", inputValue, ":", Timestamp.now());
    console.log(auth.currentUser?.uid);
    
    //reset to defaults
    setSelected("");
    setDropDownVisible(false);
    setShowTextBox(false);
    setInputValue("");
    setShowSelectOption(true);
  };
  const handleSelection = (option: string) => {
    setSelected(option);
    setShowTextBox(true);
    setDropDownVisible(false);
  };
  const handleCardPress = () => {
    setDropDownVisible(!dropDownVisible);
    setShowSelectOption(false);
  };

  return (
    <View style={styles.container}>
      {showSelectOption && (
        <TouchableOpacity onPress={handleCardPress} style={styles.card}>
          <Text>Select an Option</Text>
        </TouchableOpacity>
      )}

      {dropDownVisible &&
        options.map((option) => {
          return (
            <TouchableOpacity
              onPress={() => handleSelection(option)}
              key={option}
              style={styles.card}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          );
        })}

      {showTextBox && (
        <>
          <TextInput
            style={styles.card}
            placeholder={"description"}
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.card} onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
});
