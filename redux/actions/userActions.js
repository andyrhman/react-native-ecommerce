import axios from "axios";

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });

    const { data } = await axios.post(`user/new`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({
      type: "registerSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "registerFail",
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const { data } = await axios.post(
      `user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "loginSuccess",
      payload: data.message,
    });
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : "Something went wrong. Please try again.";

    dispatch({
      type: "loginFail",
      payload: errorMessage,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const { data } = await axios.get(`user/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    const { data } = await axios.get(`user/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};