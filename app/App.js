import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  HomeScreen,
  OnBoardingScreen,
  ProductScreen,
  CartScreen,
} from "./screens";
import { Provider } from "react-redux";

import "react-native-url-polyfill/auto";
import store from "./context/store";
import { BottomTab } from "./components";

const Stack = createNativeStackNavigator();

const MyComponent = ({ setActiveScreen }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentScreen = navigation.getCurrentRoute().name;
      setActiveScreen(currentScreen);
      console.log("Active Screen : ", currentScreen);
    });

    return unsubscribe;
  }, [navigation]);
};

const App = () => {
  const [activeScreen, setActiveScreen] = useState("");
  return (
    <NavigationContainer>
      <MyComponent setActiveScreen={setActiveScreen} />
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </Provider>

      {activeScreen !== "OnBoarding" && (
        <BottomTab activeScreen={activeScreen} />
      )}
    </NavigationContainer>
  );
};

export default App;
