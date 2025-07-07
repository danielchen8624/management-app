import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { db, auth } from "../../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
function TaskPage() {
  const [currentTasks, setCurrentTasks] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "requests"),
      where("status", "==", "pending")
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      const taskData: any[] = [];
      querySnapshot.forEach((doc) => {
        taskData.push({ id: doc.id, ...doc.data() });
      });
      setCurrentTasks(taskData);
    });
    return unsub;
  }, []);


  return (
  <>
    {currentTasks.map((task) => (
      <TouchableOpacity key={task.id} style={styles.taskCard}>
        <Text>{task.type}</Text>
        <Text>{task.description}</Text>
        <Text>User: {task.createdBy}</Text>
        <Text>Date: {task.createdAt?.toDate().toLocaleString()}</Text>
      </TouchableOpacity>
    ))}
  </>
);

}
export default TaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskCard: {
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
