import { Stack } from "expo-router";
import {useState, useEffect} from "react";
import "./globals.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { router } from "expo-router";
import { User } from "firebase/auth";

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      //what is the unsub here for
      console.log("user: ", user);
      setUser(user);

      if (user) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/login");
      }
    });
    return unsub;
  }, []);

  return <Stack >
    <Stack.Screen 
    name = "(tabs)"
    options = {{headerShown: false}}
    />
    <Stack.Screen 
    name = "movie/[id]"
    options = {{headerShown: false}} />
    </Stack>;
}
