import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

import Swiper from "react-native-swiper";
import { Brand, Screen1, Screen2, Screen3 } from "../assets";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem("@onboarding_complete");
      if (value !== null && value === "true") {
        navigation.replace("Home");
      }
    };

    checkOnboardingStatus();
  }, []);

  const handleOnBoardingComplete = async (e) => {
    if (e === 2) {
      try {
        await AsyncStorage.setItem("onBoarding_complete", "true");
        navigation.navigate("Home");
      } catch (error) {
        console.log("Error on storing boarding status :", error);
      }
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Swiper onIndexChanged={handleOnBoardingComplete}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  );
};

export const ScreenOne = () => {
  return (
    <View className="flex-1 items-center justify-center relative">
      <Image source={Screen1} className="w-full h-full" resizeMode="cover" />
      <View className="w-50 h-auto flex items-center justify-center p-2 absolute left-1 top-36">
        <Image source={Brand} className="w-32 h-32" resizeMode="contain" />
        <Text className="text-xl font-semibold text-[#555]">
          Enchant Beauty
        </Text>
      </View>
    </View>
  );
};

export const ScreenTwo = () => {
  return (
    <View className="flex-1 space-y-6 items-center justify-start ">
      <Image source={Screen2} className="w-full h-[65%]" resizeMode="cover" />
      <View className="flex items-center justify-center px-6 space-y-6">
        <Text className="text-2xl tracking-wider text-[#555] ">
          Find your Beauty Products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins the moment you decide to be yourself
        </Text>
      </View>
    </View>
  );
};

export const ScreenThree = () => {
  return (
    <View className="flex-1 space-y-6 items-center justify-start ">
      <Image source={Screen3} className="w-full h-[65%]" resizeMode="cover" />
      <View className="flex items-center justify-center px-6 space-y-6">
        <Text className="text-2xl tracking-wider text-[#555] ">
          Find your Beauty Products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins the moment you decide to be yourself
        </Text>
      </View>
    </View>
  );
};
export default OnBoardingScreen;
