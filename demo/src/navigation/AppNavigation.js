import { createStackNavigator } from '@react-navigation/stack';

import Home from "../components/Home";
import About from "../components/About";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
      <Stack.Screen name="About" component={About} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}

export default AppNavigation;