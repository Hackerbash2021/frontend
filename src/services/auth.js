import api from "../axios";

// ! Use promises instead of async await

const login = async (email, password) => {
  try {
    return await api.post("login/", {
      email: email,
      password: password,
    });
  } catch (error) {
    console.log(error);
  }
};

const register = async (email, password) => {
  try {
    return await api.post("register/", {
      email: email,
      password: password,
    });
  } catch (error) {
    console.log(error);
  }
};

const signOut = async () => {
  try {
    return await api.get("signOut/");
  } catch (error) {
    console.log(error);
  }
};

const forgotPassword = async (email) => {
  try {
    return await api
      .post("forgotPassword/", { email: email })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export { login, register, signOut, forgotPassword };
