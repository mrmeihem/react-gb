import {
  GET_CHACK_PENDING,
  GET_CHACK_SUCCESS,
  GET_CHACK_FAILURE,
} from "./actions";
import { REQUEST_STATUS } from "../../utils/storage";

const initialState = {
  chack: {},
  request: {
    error: null,
    status: REQUEST_STATUS.IDLE,
  },
};

export const norrisReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHACK_PENDING: {
      return {
        ...state,
        request: {
          error: null,
          status: REQUEST_STATUS.PENDING,
        },
      };
    }
    case GET_CHACK_SUCCESS: {
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.SUCCESS,
        },
        chack: payload,
      };
    }
    case GET_CHACK_FAILURE: {
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    }
    default:
      return state;
  }
};
