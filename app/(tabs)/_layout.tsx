import React from "react";
import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs screenOptions = {{headerShown: false}}>
      <Tabs.Screen //for each screen inside (tabs) create a tab for it on the bottom
        name="home"
        options={{
          title: "home",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false, // the focused in tabbaricon is the state of the icon. the states are whether it has been clicked or not.
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "task",
          headerShown: false, // the focused in tabbaricon is the state of the icon. the states are whether it has been clicked or not.
        }}
      />
    </Tabs>

    
  );
};

export default _Layout;
