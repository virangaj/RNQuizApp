import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Alert,
} from "react-native";
import Colors from "../constant/Colors";
import Header from "../components/Header";
import Tiles from "../components/Tiles";
export default function QuizMenu() {
  return (
    <View>
      <Header />
      <View style={styles.tileView}>
        <Tiles
          title="CSS"
          onPress={() => console.log("CSS touched")}
          color={Colors.pink}
        />
        <Tiles
          title="Java"
          onPress={() => console.log("Java touched")}
          color={Colors.bottomBar}
        />
      </View>
      <View style={styles.tileView}>
        <Tiles
          title="JavaScript"
          onPress={() => console.log("JavaScript touched")}
          color={Colors.maroon}
        />
        <Tiles
          title="PHP"
          onPress={() => console.log("PHP touched")}
          color={Colors.gold}
        />
      </View>
      <View style={styles.tileView}>
        <Tiles
          title="React"
          onPress={() => console.log("React touched")}
          color={Colors.green}
        />
        <Tiles
          title="React Native"
          onPress={() => console.log("React Native touched")}
          color={Colors.bluMix}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tileView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
