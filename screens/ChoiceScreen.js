import * as React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Choices/Head/Header.js";
import Stories, { CONTAINER_HEIGHT } from "../components/home/head/Stories.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/Styles.js";
import Body from "../components/home/body/Body.js";
import Slideshow from "../components/Choices/body/slideshow.js";
import Context from "../components/Choices/body/context.js"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import HeaderSvg from "../components/Choices/Head/HeaderSVG.js";

import { StatusBar } from "expo-status-bar";
//获取各个板块的图片
import {IMAGES} from "../data/choice/context.js"

const HomeScreen = ({ navigation }) => {
  const [followings, setFollowings] = React.useState({ data: [], list: [] });
  const [headerHeight, setHeaderHeight] = React.useState(50);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={GlobalStyles.colors.primary300} />
      <View>

        <View>
          <HeaderSvg
            headerHeight={headerHeight}
            storyHeight={CONTAINER_HEIGHT}
            size={80}
            paddingTop={20}
            visible_items={5}
          />
          <View
            onLayout={(event) => {
              setHeaderHeight(event.nativeEvent.layout.height);
            }}
          >
            <Header navigation={navigation} />
          </View>
        </View>

        {/* <Animated.View style={storyAnimatedStyles}>
          <Stories followingsData={followings.data} />
        </Animated.View> */}
      </View>

      <Slideshow></Slideshow>

<View style={{ marginLeft: 30, flexDirection: "column", justifyContent: "space-between" }}>
  {/* 第一部分：左边的组件和右边的垂直组件 */}
  <View style={{ flexDirection: "row", height: 250 }}>
    <Context width={180} height={220} url={IMAGES[0]} navigation={navigation} id = {1}  />

    <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
      <Context width={180} height={90} url={IMAGES[1]} navigation={navigation} id = {2}/>
      <Context width={180} height={90} url={IMAGES[2]} navigation={navigation} id = {3}/>
    </View>
  </View>

  {/* 第二部分：右下方的两个列 */}
  {/* 两列上下的方式横向排列，用space-between排列 */}
  <View style={{ width: "50%", flexDirection: "row", justifyContent: "space-between",}}>
    {/* 通过map函数创造两列上下的方块 */}
    {Array.from({ length: 2 }).map((_, index) => {
      let img1,img2,id1,id2
      if(index === 0)
      {
        img1 = IMAGES[3]
        img2 = IMAGES[5]
        id1 = 4
        id2 = 6
      }
      else{
        img1 = IMAGES[4]
        img2 = IMAGES[6]
        id1 = 5
        id2 = 7
      }

      return(
      //产生两个上下的方块
      <View key={index} style={{ flexDirection: "column", justifyContent: "flex-start", width: "100%", height: 250 }}>
        <Context width={180} height={90} url={img1} navigation={navigation} id = {id1}/>
        <Context width={180} height={90} url={img2} navigation={navigation}
        id = {id2}/>
      </View>
      );
    })}
  </View>
</View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
  },
});
