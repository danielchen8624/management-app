import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router} from "expo-router";
import React from "react";

export default function HomeScreen() {

  const handleCardPress = () => {
    router.push("../(components)/todo");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress = {handleCardPress} style = {styles.card}>
        <Text style = {styles.cardTitle}>To-Do</Text>
        <Text style = {styles.cardTitle}>Tap to open your tasks</Text>
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
