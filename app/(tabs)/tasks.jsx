import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {router} from "expo-router";
function TaskPage() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.taskButton} onPress = {() => {
        router.push("/todo");
      }}>
        <Text>Hai Task Page</Text>
      </TouchableOpacity>
    </View>
  );
}
export default TaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskButton: {
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
});
