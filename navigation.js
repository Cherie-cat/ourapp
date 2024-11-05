import { Provider } from "react-redux";
import  store  from './redux/store/store'; 
import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBar from "./components/tabBar/TabBar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

import HomeScreen from "./screens/Homescreen";
import NewPostScreen from "./screens/NewPostScreen";
import SearchScreen from "./screens/SearchScreen";
import UserProfileScreen from "./screens/UsersProfileScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import AppContextProvider from "./store/app-context";
import AddStoryScreen from "./screens/AddStoryScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ChatScreen from "./screens/ChatScreen";
import ReelsScreen from "./screens/ReelsScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import PressEffect from "./components/UI/PressEffect";
import { GlobalStyles } from "./constants/Styles";
import ExploreScreen from "./screens/ExploreScreen";
import ViewStoryScreen from "./screens/ViewStoryScreen";
import CameraScreen from "./screens/CameraScreen";
import RegisterScreen from "./screens/RegisterScreen"
import ChoiceScreen from "./screens/ChoiceScreen"
import SelectExercisesScreen from "./screens/SelectExercisesScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({ navigation, route }) => ({
  headerShown: false,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "left",
  headerTitleStyle: { fontSize: 30, fontWeight: "bold" },
  headerTintColor: "white",
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: GlobalStyles.colors.primary,
    elevation: 0,
    borderWidth: 0,
  },

  headerLeft: () => (
    <PressEffect>
      <Pressable
        style={{ marginLeft: 20 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={25} color={"white"} />
      </Pressable>
    </PressEffect>
  ),
});

//堆叠导航 用户可以通过“返回”按钮轻松回到之前的屏幕
//通过 Stack.Navigator，用户可以在 HomeScreen 和 UserProfileScreen 之间进行导航
//用户可以从主页切换到个人资料页面，通常通过按钮或手势触发
function HomeStack() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      </Stack.Navigator>
    </View>
  );
}
// function HomeTabStack() {
//   return (
//     <TopTab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: { position: "absolute", width: 0, height: 0 },
//       }}
//     >
//       <TopTab.Screen name="HomeTabScreen" component={HomeStack} />
//       <TopTab.Screen name="MessagesScreen" component={MessagesScreen} />
//     </TopTab.Navigator>
//   );
// }

export const SignedInStack = () => {
  console.log(store); // 检查 store 是否为一个有效的对象
  //BottomTabNavigator  管理底部导航栏
  function BottomTabNavigator() {
    return (
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        {/* <Tab.Screen name="HomeTabStack" component={HomeTabStack} /> */}
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
         <Tab.Screen name="ChoiceScreen" component={ChoiceScreen} />
         
        <Tab.Screen name="SelectExercisesScreen" component={SelectExercisesScreen}/>
        <Tab.Screen name="MessagesScreen" component={MessagesScreen} /> 
        {/* <Tab.Screen name="ReelsScreens" component={SearchScreen} /> */}
        {/* <Tab.Screen name="UserProfileScreen" component={UserProfileScreen} /> */}
      </Tab.Navigator>
    );
  }
  return (
    <AppContextProvider>
           <Provider store={store}>
    {/* //NavigationContainer 是必需的，表示这是一个导航应用 */}
      <NavigationContainer>
      {/* 使用 Stack.Navigator 来管理应用中的多个屏幕 */}
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
          //意味在登录后会看到底部标签导航   用户可以在不同的功能页面之间进行切换
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
           {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
          <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          
           {/*<Stack.Screen name="AddStoryScreen" component={AddStoryScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />

          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          /> */}
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          {/* <Stack.Screen
            name="NotificationsScreen"
            component={NotificationsScreen}
          /> */}
          {/* <Stack.Screen name="UsersListScreen" component={UsersListScreen} /> */}
          <Stack.Screen
            name="UserProfileScreen"
            component={UserProfileScreen}
          />
           <Stack.Screen name="SearchScreen" component={SearchScreen} />

          {/*<Stack.Screen name="MessagesScreen" component={MessagesScreen} />
          <Stack.Screen name="ViewStoryScreen" component={ViewStoryScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </AppContextProvider>
  );
};

//用于处理未登录用户的导航
export const SignedOutStack = () => (
  //这是一个必需的组件，用于包裹整个导航结构，使 React Navigation 能够正常工作。
  <NavigationContainer>
    <Stack.Navigator
    //这意味着应用启动时会首先显示 LoginScreen，即登录界面
      initialRouteName="LoginScreen"
      //传递一些通用的屏幕选项，例如标题、头部的显示与否等
      screenOptions={screenOptions}
    >
      {/* 可以看到LoginScreen 和SignupScreen的屏幕 */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
