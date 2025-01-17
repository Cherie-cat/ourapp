import * as React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/home/head/Header.js";
import Stories, { CONTAINER_HEIGHT } from "../components/home/head/Stories.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/Styles.js";
import Body from "../components/home/body/Body.js";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import HeaderSvg from "../components/home/head/HeaderSVG.js";

import { StatusBar } from "expo-status-bar";


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
      <Body />
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
