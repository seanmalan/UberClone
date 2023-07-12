import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Store";
import HomeScreen from "./HomeScreen";
import tw from "tailwind-react-native-classnames";
import { SafeAreaProvider } from "react-native-safe-area-context";

// 1) set up redux

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}
