//集中管理模块
import LoginStore from "./login.store";
import React from "react";
import UserStore from "./user.store";
class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
    this.userStore = new UserStore();
  }
}
const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);
export { useStore };
