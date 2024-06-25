// components/Card.js
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Card = ({ content }) => {
  return (
    <TouchableOpacity style={[styles.cardContainer]}>
      <BlurView intensity={10} style={StyleSheet.absoluteFillObject}>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{content}</Text>
            <Text style={styles.subText}>Climate Smart </Text>
          </View>
          <Image
            source={require("../assets/images/PheNode.webp")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <View style={styles.bottomTextColumn}>
            <Text style={styles.bottomTextTitle}>Battery</Text>
            <Text style={styles.bottomTextValue}>99.4%</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.bottomTextColumn}>
            <Text style={styles.bottomTextTitle}>Health</Text>
            <Text style={styles.bottomTextValue}>Optimum</Text>
          </View>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp("85%"),
    height: hp("20%"), // Adjust the height as needed
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: hp("1.5%"), // 1.5% of the screen height as margin
    borderColor: "#1A75E8",
    borderWidth: 0.8,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color to show the border radius
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Shadow properties for Android
    elevation: 5,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: hp("2%"), // Add padding if necessary
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  image: {
    width: wp("39%"),
    height: hp("35%"),
    marginRight: -15,
    // Shadow properties for iOS
    shadowColor: "#1A75E8", //#1A75E8 #48f7f5
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  text: {
    color: "#48f7f5",
    fontWeight: "bold",
    fontSize: wp("4.6%"), // 4.6% of the screen width as font size
    // Shadow properties for iOS
    shadowColor: "#48f7f5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    // Shadow properties for Android
    elevation: 5,
  },
  subText: {
    color: "#FFF",
    fontSize: wp("2.7%"), // 2.3% of the screen width as font size
    marginLeft: 2,
    marginTop: 2,
  },

  bottomTextContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1.5%"),
  },
  bottomTextColumn: {
    alignItems: "center",
  },
  bottomTextTitle: {
    color: "#FFF",
    fontSize: wp("3.4%"),
  },
  bottomTextValue: {
    color: "#48f7f5",
    fontWeight: "bold",
    marginTop: 2,
    fontSize: wp("3%"),
    // Shadow properties for iOS
    shadowColor: "#48f7f5",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    // Shadow properties for Android
    elevation: 5,
  },
  divider: {
    width: 1,
    height: "80%",
    backgroundColor: "#48f7f5",
  },
});

export default Card;
