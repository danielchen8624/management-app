import React from "react";
import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen //for each screen inside (tabs) create a tab for it on the bottom
        name="index"
        options={{
          title: "index",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false, // the focused in tabbaricon is the state of the icon. the states are whether it has been clicked or not.
        }}
      />

       <Tabs.Screen
        name="home"
        options={{
          title: "Saved",
          headerShown: false,
        }}
      />

    </Tabs>
  );
};

export default _Layout;
