import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import Feed from "../../home/body/Feed";
// import Video from "../../home/body/Video";
import { GlobalStyles } from "../../../constants/Styles";
import TopTabBar from "../../home/body/TopTabBar";
// import Other from "../../home/body/Other"
import Aerobics from "./aerobics"
import Muscle from "./muscle"
import Run from "./run"
import Reduction from "./reduction"
const TopTab = createMaterialTopTabNavigator();


const Body = () => {
  return (
    <TopTab.Navigator
      //   tabBar={(props) => <TopTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 18,
          padding: 0,
          margin: 0,
        },
        tabBarInactiveTintColor: "rgba(255,255,255,0.3)",
        tabBarIndicatorStyle: {
          height: 3,
          width: "18%",
          left: "4%",
          borderRadius: 30,
          backgroundColor: GlobalStyles.colors.purple,
        },
        tabBarStyle: {
          padding: 0,
          marginTop: 20,
          justifyContent: "center",
          width: "100%",
          elevation: 0,
          backgroundColor: "transparent",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(255,255,255,0.1)",
        },
        tabBarPressColor: "white",
      }}
    >
      <TopTab.Screen name="有氧训练">
        {() => <Aerobics  />}
      </TopTab.Screen>
      <TopTab.Screen name="增肌训练">
        {() => <Muscle />}
      </TopTab.Screen>
      <TopTab.Screen name="跑步训练">
        {() => <Run />}
      </TopTab.Screen>
      <TopTab.Screen name="减脂训练">
        {() => <Reduction  />}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
};

export default Body;

const styles = StyleSheet.create({});
