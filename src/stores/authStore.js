import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  signup = async (userData) => {
    try {
      await instance.post("http://localhost:8000/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);

      console.log("authStore -> signin -> res.data", res.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();

export default authStore;
