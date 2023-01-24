import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./components/Header";
import Investments from "./components/Investments";

export default function App() {
  return (
    <View className="flex-1">
      <Header />
      <Investments />
      <StatusBar style="auto" />
    </View>
  );
}
