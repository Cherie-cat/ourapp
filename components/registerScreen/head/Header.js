import {useState} from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../../constants/Styles";
import PressEffect from "../../UI/PressEffect";

export default function Header ({ navigation }) {
  const [actionBtnPressed, setActionBtnPressed] = useState(false);
  
  return(
  <View style={[styles.container]}>
    {/* 要返回选项的页面 */}
    <Pressable
      onPress={() => navigation.navigate("ChoiceScreen")}
      style={{ position: "absolute", left: 0 }}
    >
      <PressEffect>
        {/* 返回的图标 */}
      <Ionicons name="arrow-back-sharp" size={30} color="white" />
      </PressEffect>
    </Pressable>
        
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        Register
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
        You could choose courses only if you want
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
