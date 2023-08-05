import {
  GET_ALL_CHANEL,
  GET_CHANEL_DETAILS,
  CLEAN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT

} from "../action/index";

const initialState = {
  chanel: [],
  allchanel: [],
  details: {},
  user:[],

};
console.log(initialState.user)

export default function rootReducer(state = initialState, actyon) {
  switch (actyon.type) {
    case GET_ALL_CHANEL:
      return {
        ...state,
        chanel: actyon.payload,
        allchanel: actyon.payload,
      };
    case GET_CHANEL_DETAILS:
      return {
        ...state,
        details: actyon.payload,
      };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: actyon.payload,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          user: null,
        };
        case LOGOUT:
      return {
        ...state,
        user: null,
      };
    case CLEAN:
      return {
        ...state,
        details: {},
      };

    default:
      return { ...state };
  }
}
