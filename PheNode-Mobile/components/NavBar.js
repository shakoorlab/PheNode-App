// components/Navbar.js
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Navbar = () => {
  return (
    <BlurView intensity={50} style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home" size={20} color="white" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="search" size={20} color="white" />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="person" size={20} color="white" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: hp("1%"),
    backgroundColor: "rgba(120, 120, 255, 0.1)",
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    overflow: "hidden",
    borderColor: "#1A75E8",
    borderTopWidth: 0.8,
  },
  navItem: {
    alignItems: "center",
    marginBottom: 12,
  },
  navText: {
    color: "white",
    fontSize: wp("3%"),
    marginTop: 4,
  },
});

export default Navbar;
