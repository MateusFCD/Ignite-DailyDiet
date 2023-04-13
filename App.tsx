import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
