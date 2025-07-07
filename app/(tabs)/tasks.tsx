import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { db, auth } from "../../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";

function TaskPage() {
  const [currentTasks, setCurrentTasks] = useState<any[]>([]);

  type Task = {
    id: string;
    type: string;
    description: string;
    createdBy: string;
    createdAt?: {
      toDate: () => Date;
    };
  };

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

  const openScreen = (task: Task) => {
    router.push({
      pathname: "/todo",
      params: {
        taskId: task.id,
      },
    });
  };

  const openHistory = () => {
    router.push({
      pathname: "/taskHistory",
    });
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => openHistory()}
        style={styles.historyButton}
      >
        <Text>Task History</Text>
      </TouchableOpacity>
      <ScrollView>
        {currentTasks.map((task) => (
          <TouchableOpacity
            onPress={() => openScreen(task)}
            key={task.id}
            style={styles.taskCard}
          >
            <Text>{task.type}</Text>
            <Text>{task.description}</Text>
            <Text>User: {task.createdBy}</Text>
            <Text>Date: {task.createdAt?.toDate().toLocaleString()}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  historyButton: {
    backgroundColor: "#007AFF", // nice blue
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: "center",
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  historyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
