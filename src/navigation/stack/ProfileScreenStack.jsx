import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../modules/auth/screens/ProfileScreen";

const Stack = createStackNavigator();

export default function ProfileScreenStack() {
    return (
        <Stack.Navigator initialRouteName="ProfileScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    );
}
