import axiosInstances from "../utils/axios";

const signUp = async (authData) => {
  try {
    const response = await axiosInstances.post("register", {
      email: authData.email,
      password: authData.password,
    });

    // return response;
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
      message: "Successfully Sign Up",
    });
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
      message: "Invalid credentials!",
    });
  }
};
const logIn = async (authData) => {
  try {
    const response = await axiosInstances.post("login", {
      email: authData.email,
      password: authData.password,
    });
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
      message: "Logged In successfully.",
    });
  } catch (error) {
    console.log(error);
    return Promise.resolve({
      isSuccess: false,
      data: null,
      message: "Wrong Username or Mail id!",
    });
  }
};
export { signUp, logIn };
