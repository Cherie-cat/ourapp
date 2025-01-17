import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ExerciseList from "../components/exercise/ExerciseList";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function SelectExercisesScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#161a22" }}>
      <StatusBar backgroundColor="#161a22" color="white" style="light" />
      <View
        style={{
          paddingTop: 40,
          paddingHorizontal: 20,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBlockColor: "gray",
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 20 }}>Select Exercises</Text>
        <View style={{ width: 24 }}></View>
      </View>
      <ExerciseList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  itemContainer: {
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: "white",
  },
});
