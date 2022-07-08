import { makeAutoObservable } from "mobx";
import { http, setToken, getToken, removeToken } from "@/utils";
class LoginStore {
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  getToken = async ({ mobile, code }) => {
    //存入token
    let res = await http.post("/authorizations", {
      mobile,
      code,
    });
    //存入token
    this.token = res.data.token;
    setToken(this.token);
  };
  loginOut = () => {
    this.token = "";
    removeToken();
  };
}

export default LoginStore;
