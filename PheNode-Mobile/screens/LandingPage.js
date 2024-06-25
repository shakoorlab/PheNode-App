// screens/landing/LandingPage.js
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import RadialGradientBackground from "../components/RadialGradientBackground";
import Header from "../components/Header";
import Card from "../components/Card";
import Navbar from "../components/NavBar";

const LandingPage = () => {
  return (
    <RadialGradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <View style={styles.cardsContainer}>
          <Card content="Shakoor Lab 012" />
          <Card content="Shakoor Lab 013" />
          <Card content="Shakoor Lab 014" />
          <Card content="Shakoor Lab 015" />
        </View>
      </ScrollView>
      <Navbar />
    </RadialGradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardsContainer: {
    alignItems: "center",
    marginTop: 30,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 4,

    // Shadow properties for Android
    elevation: 5,
  },
});

export default LandingPage;
