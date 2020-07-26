import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Alert,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../constant/Colors";
import Signup from "./Signup";
export default function Reset(navigation) {
  //   const [isAddMode, setIsAddMode] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Reset</Text>
    </View>
  );
}

Reset.navigationOptions = ({ navigation }) => ({
  title: "Reset",
  headerShown: false,
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    backgroundColor: Colors.pink,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
