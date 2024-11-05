
//报名课程的界面
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { DEFAULT_DP, GlobalStyles } from "../../../constants/Styles";
import CommentSheet from "../../Comments/CommentSheet";
import { timeDifference } from "../../../utils/helperFunctions";
import { AuthContext } from "../../../store/auth-context";
import { Path, Svg } from "react-native-svg";
import PressEffect from "../../UI/PressEffect";

const { height, width } = Dimensions.get("window");

function Post({ post }) {
  
  const authCtx = useContext(AuthContext);
  function PostHeader() {
    const navigation = useNavigation();
    const [profilePic, setProfilePic] = React.useState(
      !!post.userPicturePath ? post.userPicturePath : DEFAULT_DP
    );
    return (
      <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <Svg width={20} height={20} viewBox={`0 0 20 20`}>
          <Path
            d={`M0,0
              L20,0
              L20,20
              A20,20 0 0,0 0,0
              Z
        `}
            fill={GlobalStyles.colors.primary500}
          />
        </Svg>

        <View
          style={{
            backgroundColor: GlobalStyles.colors.primary500,
            padding: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PressEffect>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => {
                  navigation.navigate("UserProfileScreen", {
                    backWhite: true,
                    ViewUser: true,
                  });
                }}
              >
                <Image
                  source={
                    profilePic
                      ? { uri: profilePic }
                      : {
                          uri: "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
                        }
                  }
                  style={styles.story}
                />
                <View
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                   {post.host}
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {timeDifference(post.createdAt)}
                  </Text>
                </View>
              </Pressable>
            </PressEffect>
          </View>
        </View>
        <Svg width={20} height={20} viewBox={`0 0 20 20`}>
          <Path
            d={`M20,0
              L0,0
              L00,20
              A0,0 0 0,1 20,0
              Z
        `}
            fill={GlobalStyles.colors.primary500}
          />
        </Svg>
      </View>
    );
  }

  function PostImage() {
  
    //用来使用本地图片的
    const images = {
      'course01.png': require('../../../assets/images-course/course01.png'),
      'course02.png': require('../../../assets/images-course/course02.png'),
      'course03.png': require('../../../assets/images-course/course03.png'),
      'course04.png': require('../../../assets/images-course/course04.png'),
      'course05.png': require('../../../assets/images-course/course05.png'),
      'course06.png': require('../../../assets/images-course/course06.png'),
      'course07.png': require('../../../assets/images-course/course07.png'),
      'course08.png': require('../../../assets/images-course/course08.png'),
    };
  // 解析文件名 获取course01.png
    const imageName = post.picturePath.split('/').pop();
    const imageSource = images[imageName]
    return (
      <Pressable>
        <Image
          source={imageSource}
          style={{
            width:"100%",
            height:200,
            borderRadius: 15,
            backgroundColor: GlobalStyles.colors.primary500,
            borderWidth: 1,
            borderColor: GlobalStyles.colors.primary500,
          }}
        />
      </Pressable>
    );
  }
  function PostStats() {
    const [liked, setLiked] = useState(false);

    const [totalLikes, setTotalLikes] = useState(post.likes.length);
    const [showCaptions, setShowCaptions] = useState(false);
    const [showComments, setShowComments] = useState(false);
    async function handleLike() {
      setTotalLikes((prevData) => (liked ? prevData - 1 : prevData + 1));

      setLiked(!liked);
    }

    function FooterButton({ icon, number, onPress, color = "white" }) {
      return (
        <View>
          <Pressable style={[styles.footerIcon]} onPress={onPress}>
            <PressEffect>
              <Ionicons name={icon} size={25} color={color} /> 
              

            </PressEffect>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
              }}
            >
              {number}
            </Text>
          </Pressable>
        </View>
      );
    }

    return (
      <>
        <CommentSheet visible={showComments} setVisible={setShowComments} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ position: "absolute", right: 15, flexDirection: "row" }}>
            <FooterButton
              icon={liked ? "person-add" : "person-add-outline"}
              number={totalLikes}
              onPress={handleLike}
              color={GlobalStyles.colors.greenLight}
            />
            {/* <FooterButton
              icon={"chatbubble-ellipses-outline"}
              number={post.comments.length}
              onPress={() => {
                setShowComments(true);
              }}
            /> */}
          </View>
          <PostHeader />
          <View
            style={{ position: "absolute", right: 0, flexDirection: "row" }}
          >
            {/* <FooterButton icon={"arrow-redo"} onPress={() => {}} left={20} />
            <FooterButton icon={"bookmark"} onPress={() => {}} /> */}
          </View>
        </View>
        {post.description && (
          <Text
            onPress={() => setShowCaptions(!showCaptions)}
            numberOfLines={showCaptions ? undefined : 1}
            style={{
              color: "white",
              paddingHorizontal: 5,
              paddingTop: 15,
              textAlign: "center",
              width: showCaptions ? undefined : "90%",
              alignSelf: "center",
            }}
          >
            {post.description}
           
          </Text>
        )}
      </>
    );
  }

  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.primary300,
        borderRadius: 25,
        padding: 15,
        margin: 10,
        marginHorizontal: 20,
      }}
    >
      <PostImage />

      <PostStats />
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  footerIcon: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
