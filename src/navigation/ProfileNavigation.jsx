import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreenStack from "./stack/ProfileScreenStack";

export default function ProfileNavigation() {
  return (
    <NavigationContainer>
      <ProfileScreenStack/>
    </NavigationContainer>
  );
}
