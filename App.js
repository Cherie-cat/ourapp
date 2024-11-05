//该组件负责初始化应用，管理用户的登录状态，并根据状态显示加载指示器或导航界面

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import AuthNavigation from "./AuthNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import AuthContentProvider, { AuthContext } from "./store/auth-context";
import { GlobalStyles } from "./constants/Styles";
import Loader from "./components/UI/Loader";

export default function App() {
  LogBox.ignoreAllLogs();
  function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);
    //使用 useContext 从 AuthContext 获取认证状态
    const authCtx = useContext(AuthContext);
//useEffect 钩子用于模拟获取认证令牌的过程。这里用 setTimeout 模拟了一个 2 秒的延迟
//在 2 秒后，setIsTryingLogin 被设置为 false，表示登录尝试完成
    useEffect(() => {
      async function fetchToken() {
        setTimeout(() => {
          setIsTryingLogin(false);
        }, 2000);
      }

      fetchToken();
    }, []);

    //如果仍在尝试登录，渲染一个居中的加载指示器（Loader 组件）
    if (isTryingLogin) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: GlobalStyles.colors.primary,
          }}
        >
          <Loader />
        </View>
      );
    }

    return <AuthNavigation />;
  }

  return (
 
    <AuthContentProvider>
      
      <StatusBar backgroundColor={GlobalStyles.colors.primary} />
 
      <Root />

    </AuthContentProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
