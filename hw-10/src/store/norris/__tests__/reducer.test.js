import { norrisReducer } from "../reducer";
import { REQUEST_STATUS } from "../../../utils/storage";
import {
  GET_CHACK_PENDING,
  GET_CHACK_SUCCESS,
  GET_CHACK_FAILURE,
} from "../actions";

describe("reducers", () => {
  const initialState = {
    chack: {},
    request: {
      error: null,
      status: REQUEST_STATUS.IDLE,
    },
  };

  it("norrisReducer GET_CHACK_PENDING test", () => {
    const received = norrisReducer(initialState, {
      type: GET_CHACK_PENDING,
    });
    const expected = {
      ...initialState,
      request: {
        error: null,
        status: REQUEST_STATUS.PENDING,
      },
    };

    expect(received).toEqual(expected);
  });

  it("norrisReducer GET_CHACK_SUCCESS test", () => {
    const action = { type: GET_CHACK_SUCCESS, payload: "test" };
    const received = norrisReducer(initialState, action);
    const expected = {
      ...initialState,
      chack: action.payload,
      request: {
        error: null,
        status: REQUEST_STATUS.SUCCESS,
      },
    };

    expect(received).toEqual(expected);
  });
  it("norrisReducer GET_CHACK_FAILURE test", () => {
    const action = { type: GET_CHACK_FAILURE, payload: "error txt" };
    const received = norrisReducer(initialState, action);
    const expected = {
      ...initialState,
      request: {
        error: action.payload,
        status: REQUEST_STATUS.FAILURE,
      },
    };

    expect(received).toEqual(expected);
  });
});
