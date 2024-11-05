//每一个选项
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Pressable,
    ImageBackground,
  } from "react-native";
  import { DEFAULT_DP, GlobalStyles } from "../../../constants/Styles";
  import PressEffect from "../../UI/PressEffect";
  import { useNavigation } from "@react-navigation/native";

  const Othersmall = ({other})=> {
    const navigation = useNavigation();

    //用来使用本地图片的
    const images = {
      'picture.png': require('../../../assets/images-course/picture.png'),
      'picture.png': require('../../../assets/images-course/picture.png'),
      'picture.png': require('../../../assets/images-course/picture.png'),
      'picture.png': require('../../../assets/images-course/picture.png'),
      'picture.png': require('../../../assets/images-course/picture.png'),
      'picture.png': require('../../../assets/images-course/picture.png'),
      'picture.png': require('../../../assets/images-course/picture.png'),
      'picture.png': require('../../../assets/images-course/picture.png'),
    };
  // 解析文件名 获取course01.png
    const imageName = other.url.split('/').pop();
    const imageSource = images[imageName]
    return(        
        <Pressable
        style = {{
          width:100,
          height:100, 
          //图片在容器的居中部位
        justifyContent:"center",
        alignItems:"center",
        //设置存放的位置
        position:"absolute",
        // left:{left},
        backgroundColor: "gray",
        opacity:0.5,
        //角度
        borderRadius: 20,
        //表示组件左右外边距的大小（单位为像素）
        // marginHorizontal: 10,
        }}
        onPress={() => {
          navigation.navigate("UserProfileScreen", {
            //?
            backWhite: true,
            ViewUser: true,
          });
        }}
        >
          <PressEffect>
            <Image 
            source={imageSource}
            style={{ 
              width: 50, 
              height: 50,
              // backgroundColor:"pink",
             
              tintColor: "black", 
      
              }}
            
            />
             
             <Text style = {{
           marginTop: 5, // 添加这个属性以调整间距
           color: "white",
           fontWeight: "600",
             }}>{other.title}</Text>
          </PressEffect>
        </Pressable>

    );
  }
  export default Othersmall;