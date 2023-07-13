import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Store";
import HomeScreen from "./components/screens/HomeScreen";
import tw from "tailwind-react-native-classnames";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./components/screens/MapScreen";

// 1) set up redux

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} 
            options={{headerShown: false,}}/>
            <Stack.Screen name="MapScreen" component={MapScreen} 
            options={{headerShown: false,}}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
