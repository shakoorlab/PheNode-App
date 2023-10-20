import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />

      {/* background */}
      <Image
        className="h-full w-full absolute"
        source={require("../../assets/images/BG-Dark-p-2000.png")}
      />

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.View entering={FadeInUp.duration(1000).springify()}>
            <Image
              source={require("../../assets/images/phenode.png")}
              style={{
                width: wp("80%"), // 50% of screen width
                height: wp("50%"), // 50% of screen width, for a square logo
                resizeMode: "contain",
              }}
            />
          </Animated.View>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            className="border border-grey-custom bg-black/5 p-5 rounded-2xl w-full"
            entering={FadeInDown.duration(1000).springify()}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            className="border border-grey-custom bg-black/5 p-5 rounded-2xl w-full mb-3"
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          {/* Login button */}
          <Animated.View className="w-full">
            <TouchableOpacity
              className="border border-orange-custom w-full bg-transparent p-3 rounded-2xl mb-3"
              entering={FadeInDown.delay(400).duration(1000).springify()}
            >
              <Text className="text-xl font-bold text-cyan-custom text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          {/* directing to signing up */}
          <Animated.View
            className="flex-row justify-center"
            entering={FadeInDown.delay(600).duration(1000).springify()}
          >
            <Text className="text-gray-500"> Don't have an account? </Text>
            {/* link to sign up page */}
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text className="text-sky-600">Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
