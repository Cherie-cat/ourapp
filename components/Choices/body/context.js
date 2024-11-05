//设置组件

import React from 'react';
import { View, Text, Image, StyleSheet,Pressable,} from 'react-native';
import PressEffect from "../../UI/PressEffect";
import { useNavigation } from "@react-navigation/native";
import { DEFAULT_DP, GlobalStyles } from "../../../constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const context = ({width,height,url,navigation,id}) =>{
 //用来使用本地图片的
 const images = {
    'icon.png': require("../../../assets/images-course/icon.png"),
    'icon.png': require("../../../assets/images-course/icon.png"),
    'icon.png': require("../../../assets/images-course/icon.png"),
    'course01.png': require("../../../assets/images-course/course01.png"),
    'course02.png': require("../../../assets/images-course/course02.png"),
    'course03.png': require("../../../assets/images-course/course03.png"),
    'course04.png': require("../../../assets/images-course/course04.png"),
  };
// 解析文件名 获取course01.png
  const imageName = url.url.split('/').pop();
  const imageSource = images[imageName]
  //初始化一个要跳转的页面
  let updateUrl
  switch (id){
    case 1:
        updateUrl = "UserProfileScreen"
        break
    case 2:
        updateUrl = "UserProfileScreen"
        break
    case 3:
            updateUrl = "UserProfileScreen"
            break
    case 4:
            updateUrl = "UserProfileScreen"
            break
    case 5:
            updateUrl = "RegisterScreen"
            break
    case 6:
            updateUrl = "UserProfileScreen"
            break
    case 7:
            updateUrl = "UserProfileScreen"
            break
  }
    
  

    return(
        <View
            style = {{
                backgroundColor: "gray",
                width:width,
                height:height,
                opacity:0.5,
                borderRadius:15,
                elevation: 5, // 设置阴影的高度
                // marginTop:50,
                // marginLeft:20,
                marginTop:30,
                resizeMode:"cover",
                overflow: 'hidden', // 确保子组件不超出边界
            }}>
            <Pressable
            onPress={() => navigation.navigate(updateUrl)}>
                <PressEffect>
                    <Image 
                    source={imageSource}
                    //设置图片的大小并要放入组件中
                    style = {{
                        width:width,
                        height:height,
                    }}                  
                    />
                </PressEffect>
            </Pressable>
        </View>
    );
}


export default context