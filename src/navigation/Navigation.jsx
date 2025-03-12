import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreenStack from "./stack/SplashScreenStack";

export default function Navigation() {
  return (
    <NavigationContainer>
      <SplashScreenStack/>
    </NavigationContainer>
  );
}
