import axios from "axios";
export const GET_ALL_CHANEL = "GET_ALL_CHANEL";
export const GET_CHANEL_DETAILS = "GET_CHANEL_DETAILS";
export const CLEAN = "CLEAN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT ="LOGOUT"


export function getAllChanel() {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/canales`);
    dispatch({ type: GET_ALL_CHANEL, payload: data.data });
  };
}

export function getChanelDetails(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/canales/${id}`);
    return dispatch({ type: GET_CHANEL_DETAILS, payload:json.data });
  };
}

export function Clean() {
  return function (dispatch) {
    dispatch({
      type: CLEAN,
    });
  };
}


export const loginSuccess = (user) => {
  const userJSON = JSON.stringify(user);
  localStorage.setItem('user', userJSON);
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};