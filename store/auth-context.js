// 这个组件为应用提供了认证上下文，允许在整个组件树中管理用户的认证状态和数据。它提供了认证、注销和更新用户数据的功能，并使用 AsyncStorage 来持久化用户信息


//用于在设备上存储数据，类似于本地存储
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { USER_DATA } from "../data/USER";

// 创建一个上下文，包含认证相关的状态和方法的默认值
export const AuthContext = createContext({
  updateUserData: () => {},
  userData: {},
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});


function AuthContentProvider({ children }) {
  const [userData, setUserData] = useState(USER_DATA[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //authenticate：设置用户为已认证，并可以在控制台输出用户数据（注释掉的行可以保存用户数据到本地存储）
  function authenticate(userData) {
    setIsAuthenticated(true);
    console.log(userData);
    // setUserData(userData);
    // AsyncStorage.setItem("userData", JSON.stringify(userData));
  }
  //logout：将用户数据设置为 null，从 AsyncStorage 中删除存储的用户数据，并在控制台打印“logout”
  function logout() {
    setUserData(null);
    AsyncStorage.removeItem("userData");
    console.log("logout");
  }
  function updateUserData(newData) {
    setUserData((prevData) => {
      return { ...prevData, user: newData };
    });
  }
  const value = {
    userData: userData,
    isAuthenticated: isAuthenticated,
    authenticate: authenticate,
    logout: logout,
    updateUserData: updateUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContentProvider;
