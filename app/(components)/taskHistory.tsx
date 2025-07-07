import { collection, where, query, onSnapshot } from "firebase/firestore";
import { View, Text, StyleSheet } from "react-native";
import { db } from "../../firebaseConfig"; 
import {useState, useEffect} from "react";

function TaskHistory() {
  useEffect(() => {
    const q = query(
      collection(db, "requests"),
      where("status", "==", "in progress")
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      const taskData: any[] = [];
      querySnapshot.forEach((doc) => {
        taskData.push({ id: doc.id, ...doc.data() });
      });
    });
  }, []);
}

export default TaskHistory;
