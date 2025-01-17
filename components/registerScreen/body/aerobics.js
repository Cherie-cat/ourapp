import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../constants/Styles";
import { FlatList } from "react-native";
import { RefreshControl } from "react-native";
import Post from "./Post";
import { POSTS } from "../../../data/posts";
import {AEROBICS} from "../../../data/course/aerobics"
import { CONTAINER_HEIGHT } from "../head/Stories";
import { useSharedValue } from "react-native-reanimated";


const Video = () => {
  const lastScrollY = useSharedValue(0);
  return (
    <View style={{ flex: 1, backgroundColor: GlobalStyles.colors.primary }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: GlobalStyles.styles.tabBarPadding,
        }}
        // onMomentumScrollBegin={(event) => {
        //   const scrollY = event.nativeEvent.contentOffset.y;
        //   if (scrollY > lastScrollY.value)
        //     StoryTranslate.value = -CONTAINER_HEIGHT;
        //   else {
        //     StoryTranslate.value = 0;
        //   }
        // }}
        onMomentumScrollEnd={(event) => {
          scrollY = event.nativeEvent.contentOffset.y;
          // if (scrollY < lastScrollY.value) StoryTranslate.value = 0;
          lastScrollY.value = scrollY;
        }}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => {}} />
        }
        keyExtractor={(data, index) => index.toString()}
        data={[1, 2, 3, 4, 5, 6, 7 , 8]}
        renderItem={({ data, index }) => {
          // console.log(index)
          // console.log(AEROBICS[index].picturePath)
          return (
            <View>       
              <Post post={AEROBICS[index]} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({});
