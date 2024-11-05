import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Feed from "./Feed";
import Video from "./Video";
import { GlobalStyles } from "../../../constants/Styles";
import TopTabBar from "./TopTabBar";
// import Other from "./Other"
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
          width: "20%",
          left: "40%",
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
      <TopTab.Screen name="Feed">
        {() => <Feed />}
      </TopTab.Screen>
      {/* <TopTab.Screen name="Video">
        {() => <Video/>}
      </TopTab.Screen>
      <TopTab.Screen name="Other">
        {() => <Other />}
      </TopTab.Screen> */}
    </TopTab.Navigator>
  );
};

export default Body;

const styles = StyleSheet.create({});
