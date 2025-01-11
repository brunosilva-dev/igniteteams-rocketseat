import {
  Recursive_400Regular,
  Recursive_700Bold,
  useFonts,
} from "@expo-google-fonts/recursive";
import { NewGroup } from "@components/NewGroup";
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { StatusBar } from "react-native";
import React from "react";

export default function App() {
  const [fontsLoaded] = useFonts({ Recursive_400Regular, Recursive_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
