import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(components)"
        
        options={{ headerShown: false }}
      />
      <Stack.Screen name="todo" />
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="taskHistory" />
    </Stack>
  );
}
