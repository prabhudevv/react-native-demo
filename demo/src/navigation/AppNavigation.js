import { createStackNavigator } from '@react-navigation/stack';

import Index from "../components/Index";
import SelectMode from "../components/SelectMode";
import UserSelection from '../components/UserSelection';
import Game from '../components/Game';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
      <Stack.Screen name="SelectMode" component={SelectMode} options={{ headerShown: false }} />
      <Stack.Screen name="UserSelection" component={UserSelection} options={{ headerShown: false }} />
      <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppNavigation;