import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from "./src/SplashScreen";
import HomeScreen from "./src/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ header: () => null }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
