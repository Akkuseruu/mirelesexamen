import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../modules/auth/screens/SplashScreen";
import FeedScreen from "../../modules/auth/screens/FeedScreen";
import ProfileScreenStack from "./ProfileScreenStack"; // Importar el stack del perfil

const Stack = createStackNavigator();

export default function SplashScreenStack() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="FeedScreen" component={FeedScreen} />
            <Stack.Screen name="ProfileScreenStack" component={ProfileScreenStack} />
        </Stack.Navigator>
    );
}
