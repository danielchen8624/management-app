import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const options = ["light", "door", "jelq"];
  const [selected, setSelected] = useState("");
  const [showTextBox,setShowTextBox] = useState(false);

  const handleSumbit = () => {
    //send to database
    Alert.alert("Success", "submitted!")
    setSelected("");
    setDropDownVisible(false);
  }
  const handleSelection = (option: string) => {
    setSelected(option);
    setShowTextBox(true);
    console.log(option); //remove later
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
