import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const options = ["light", "door", "jelq"];
  const [selected, setSelected] = useState("");
  const [showTextBox,setShowTextBox] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    //send to database
    Alert.alert("Success", "submitted!")
    console.log(selected,":", inputValue);
    setSelected("");
    setDropDownVisible(false);
    setShowTextBox(false);
    setInputValue("");
  }
  const handleSelection = (option: string) => {
    setSelected(option);
    setShowTextBox(true);
    setDropDownVisible(false);
  };
  const handleCardPress = () => {
    setDropDownVisible(!dropDownVisible);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleCardPress} style={styles.card}>
        {dropDownVisible ? (
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
          })
        ) : (
          <Text>Select an Option</Text>
        )}

        {showTextBox && (
          <>
          <TextInput
            style = {styles.card}
            placeholder = {"description"}
            value = {inputValue}
            onChangeText = {setInputValue}
          />
          <TouchableOpacity style = {styles.card} onPress = {handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
         </> 
) //right now nothing sets showtextbox to false, so the hi is there forever. the hi will be replaced with a textInput and submitting the form will close it.
      }
      </TouchableOpacity>
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
