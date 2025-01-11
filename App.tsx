import { Loading } from "@components/Loading";
import {
  Recursive_400Regular,
  Recursive_700Bold,
  useFonts,
} from "@expo-google-fonts/recursive";
import { Players } from "@screens/Players";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Recursive_400Regular, Recursive_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
