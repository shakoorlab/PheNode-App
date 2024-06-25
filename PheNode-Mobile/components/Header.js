// components/Header.js
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PheNodes</Text>
      <View style={styles.bubbles}>
        <TouchableOpacity style={styles.searchBubble}>
          <Ionicons name="search" size={20} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBubble}>
          <Ionicons name="person-outline" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 80,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    // fontFamily: "Helvetica",
  },
  bubbles: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBubble: {
    backgroundColor: "#054085",
    borderColor: "#1A75E8",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  profileBubble: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default Header;
