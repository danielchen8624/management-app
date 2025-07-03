import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
      }}
      >My Home Page</Text>
    </View>
  );
}
