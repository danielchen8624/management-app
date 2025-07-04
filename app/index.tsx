import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { router } from "expo-router";
import HomeScreen from "./(tabs)/home";
import LoginScreen from "./(auth)/login";
import { User } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      //what is the unsub here for
      console.log("user: ", user);
      setUser(user);

      if (user) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/(auth)/login");
      }
    });
    return unsub;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>loading...</Text>
    </View>
  );
}
