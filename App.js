import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";
import { setNavigator } from "./src/navigationRef";

const Navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultScreen,
  },
  {
    headerMode: "none",
  }
);

const App = createAppContainer(Navigator);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <IconRegistry icons={EvaIconsPack} />
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
      forceInset={{ top: "always" }}
    >
      <StatusBar barStyle="dark-content" />
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </SafeAreaView>
  </ApplicationProvider>
);
