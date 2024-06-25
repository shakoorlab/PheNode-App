// components/RadialGradientBackground.js
import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

const RadialGradientBackground = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="15%"
            rx="50%"
            ry="50%"
            fx="50%"
            fy="15%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#00438f" stopOpacity="1" />
            <Stop offset="1" stopColor="#00102f" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RadialGradientBackground;
