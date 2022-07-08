//集中管理模块
import LoginStore from "./login.store";
import React from "react";
import UserStore from "./user.store";
import ChannelStore from "./channel.store";

import { configure } from "mobx";
configure({
  enforceActions: "never",
});
class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
    this.userStore = new UserStore();
    this.channelStore = new ChannelStore();
  }
}
const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);
export { useStore };
