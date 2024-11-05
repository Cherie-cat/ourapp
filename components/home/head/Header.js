import {useState} from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../../constants/Styles";
import PressEffect from "../../UI/PressEffect";
import NewPostIcon from "./AddPostIcon";



export default function Header ({ navigation }) {
  const [actionBtnPressed, setActionBtnPressed] = useState(false);
  
  return(
  <View style={[styles.container]}>
    <Pressable
      onPress={() => navigation.navigate("UserProfileScreen")}
      style={{ position: "absolute", left: 0 }}
    >
      <PressEffect>
        <Image
          style={{ width: 30, height: 30, borderRadius: 50 }}
          source={
           require('../../../assets/imgae1.jpg')
          }
        />
      </PressEffect>
    </Pressable>
          {/* 发布视频或者帖子的加号 一开始不显示内部，点击后显示*/}
          <Pressable
          style={{ 
            position:"absolute",
            left:85,
          }}
          >
                <NewPostIcon
                      pressed={actionBtnPressed}
                      setPressed={setActionBtnPressed}
                    />
      </Pressable>

    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        Social
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
        Welcome To Social
      </Text>
    </View>

    <View style={styles.iconsContainer}>
      <PressEffect>
        <Pressable
          style={styles.icon}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
        >
          <Ionicons name="search" size={25} color={"white"} />
        </Pressable>
      </PressEffect>
      <PressEffect>
        <Pressable
          style={styles.icon}
          onPress={() => {
            navigation.navigate("NotificationsScreen");
          }}
        >
          <Ionicons name="notifications" size={25} color={"white"} />
          <View style={styles.unreadBadge} />
          {/* <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>6</Text>
          </View> */}
        </Pressable>
      </PressEffect>
    </View>
  </View>);
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
    marginHorizontal: 20,
  },
  iconsContainer: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    tintColor: "white",
  },
  icon: {
    marginLeft: 10,
  },
  unreadBadge: {
    backgroundColor: GlobalStyles.colors.red,
    position: "absolute",
    right: 2,
    top: 2,
    width: 8,
    height: 8,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  unreadBadgeText: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
});
