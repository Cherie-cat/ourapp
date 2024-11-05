import { Pressable, StyleSheet, Image, View, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { GlobalStyles } from "../../../constants/Styles";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../store/app-context";
import Loader from "../../UI/Loader";
import PressEffect from "../../UI/PressEffect";
import { Ionicons } from "@expo/vector-icons";

const NewPostIcon = ({ exploreActive, pressed, setPressed }) => {
  const appCtx = useContext(AppContext);
  const exiting = (values) => {
    "worklet";
    const animations = {
      transform: [{ scale: withTiming(0) }],
    };
    const initialValues = {
      transform: [{ scale: 1 }],
    };
    return {
      initialValues,
      animations,
    };
  };

  const navigation = useNavigation();

  const scale = useSharedValue(0);
  const scaleAnimation = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value) }],
  }));

  useEffect(() => {
    scale.value = withSpring(pressed ? 1 : 0, { duration: 100 });
    rotation.value = withSpring(pressed ? 135 : 0);
  }),
    [pressed];

  const rotation = useSharedValue(0);
  const rotationAnimation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));
  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pressed && (
        <Animated.View
          exiting={exiting}
          style={[
            {
              position: "absolute",

              height: 145,
              width: 150,
              flexDirection: "column",
              justifyContent: "flex-end",
  
              // backgroundColor:'pink',
            },
            scaleAnimation,
          ]}
        >
          <View
            onTouchEnd={() => {
              setPressed(false);
              navigation.navigate("NewPostScreen");
            }}
            style={{
              padding: 10,
              borderRadius: 50,
              overflow: "hidden",
              alignSelf: "baseline",
              borderWidth: 1,
              borderColor: GlobalStyles.colors.gray100,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Image
              source={require("../../../assets/photo.png")}
              style={{
                width: 30,
                height: 30,
                tintColor: "white",
              }}
            />
          </View>
          <View
            onTouchEnd={() => {
              setPressed(false);
              navigation.navigate("NewPostScreen", { type: "video" });
            }}
            style={{
              padding: 10,
              borderRadius: 50,
              overflow: "hidden",
              alignSelf: "baseline",
              borderWidth: 1,
              borderColor: GlobalStyles.colors.gray100,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Image
              source={require("../../../assets/reels-focused.png")}
              style={{
                width: 30,
                height: 30,
                tintColor: "white",
              }}
            />
          </View>
        </Animated.View>
      )}
      <Pressable
        onPress={() => {    
            setPressed(!pressed);
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 增加post的图标 */}
        {
          <Animated.Image
            resizeMode="contain"
            style={[
              {
                width: 40,
                height: 40,
                tintColor: "white",       

            },
              rotationAnimation,
            ]}
            source={require("../../../assets/addpost.png")} 
          >
        </Animated.Image>}    
      </Pressable>
    </Pressable>
  );
};

export default NewPostIcon;

const styles = StyleSheet.create({});
