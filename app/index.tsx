import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { router } from "expo-router";

export default function Home() {

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => { //what is the unsub here for
      if (!user) {
        router.replace("/login");
      }
    });
    return unsub;
  }, []);

  return (
    <View>
      <Text>Welcome Home</Text>
    </View>
  );
}
