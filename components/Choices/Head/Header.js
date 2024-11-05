import {useState} from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../../constants/Styles";
import PressEffect from "../../UI/PressEffect";


export default function Header ({ navigation }) {
  const [actionBtnPressed, setActionBtnPressed] = useState(false);
  
  return(
  <View style={[styles.container]}>
    <Pressable
      onPress={() => navigation.navigate("UserProfileScreen")}
      style={{ position: "absolute", left: 0 }}
    >
      <PressEffect>
        {/* 第一个图标-日历 */}
        <Ionicons name="calendar-sharp" size={30} color="gray" />
      </PressEffect>
    </Pressable>
      

          <Pressable
          style={{ 
            position:"absolute",
            left:45,
            
          }}
          onPress={() => navigation.navigate("UserProfileScreen")}
          >
          <PressEffect>
            {/* 第二个图标-记录感想 */}
          <Ionicons name="create" size={35} color="gray" />
        </PressEffect>

      </Pressable>

     
      {/* 标题 */}
    <View style={{ alignItems: "center", 
      // backgroundColor:"pink",
    }}>
      {/* <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        Social
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
        Welcome To Social
      </Text> */}
      
      <Image 
      source={require("../../../assets/images-course/logo.png")}
      //图片等比例缩小
      resizeMode="contain" 
      style = {{
        width:100,
        height:60,
        //改变图片颜色
        tintColor:"white",
      }}/>
    </View>

    <View style={styles.iconsContainer}>
    <Pressable
          onPress={() => navigation.navigate("UserProfileScreen")}
          >
          <PressEffect>
            {/* 第三个图标-提醒 */}
            <Ionicons name="alarm" size={35} color="gray" />
            {/* 小圆点 */}
            {/* <View style={styles.unreadBadge} /> */}
        </PressEffect>

      </Pressable>
 
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
    right: 10,
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
