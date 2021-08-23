import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Gesture from "../pages/Gesture";
import Transitions from "../pages/Transitions";
import Animations from "../pages/Animations";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gesture" component={Gesture} />
        <Stack.Screen name="Transitions" component={Transitions} />
        <Stack.Screen name="Animations" component={Animations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;