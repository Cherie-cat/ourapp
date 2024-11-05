import React, { useContext } from "react";
import { SignedOutStack, SignedInStack } from "./navigation";
//导入用于管理用户认证状态的上下文
import { AuthContext } from "./store/auth-context";
//用于根据用户的认证状态决定显示哪个导航栈（已登录或未登录）。
const AuthNavigation = () => {
  //使用 useContext 钩子从 AuthContext 中获取认证状态（authCtx）
  const authCtx = useContext(AuthContext);

  return (
    //authCtx.isAuthenticated表示有没有认证，有认证就返回显示登录后的界面 还是登录前的界面
    // <>{authCtx.isAuthenticated ? <SignedInStack /> : <SignedOutStack />}</>

    <>{<SignedInStack />}</>

  );
};

export default AuthNavigation;
