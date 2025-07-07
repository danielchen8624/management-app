import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {db} from "../../firebaseConfig"
import {router, useLocalSearchParams} from "expo-router";
import {doc, updateDoc} from "firebase/firestore";

function ToDoScreen() {
  const {taskId} = useLocalSearchParams();

  const handleAccept = async() => {
    if (!taskId){
      console.error("no user found!")
      return null;
    }
    
    try {
      const taskRef = doc(db, "requests", taskId);
      await updateDoc(taskRef, {
        status: "in progress",
      });
      console.log("updated task to in progress!");
      router.back();
    }
    catch(error){
      console.error(error);
    }
  };

  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress = {()=> handleAccept(taskId)} style = {styles.acceptButton}>
        <Text>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => {router.back();}} style = {styles.declineButton}>
        <Text>No</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ToDoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // push children to bottom
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // left & right
  },
  declineButton: {
    backgroundColor: "#f44336", // red
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  acceptButton: {
    backgroundColor: "#4CAF50", // green
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});