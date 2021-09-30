import { Storage } from "../../utils/storage.js";

export const GET_CHACK_PENDING = "NORRIS::GET_PENDING";
export const GET_CHACK_SUCCESS = "NORRIS::GET_SUCCESS";
export const GET_CHACK_FAILURE = "NORRIS::GET_FAILURE";

const getChackPending = () => ({
  type: GET_CHACK_PENDING,
});

const getChackSuccess = (data) => ({
  type: GET_CHACK_SUCCESS,
  payload: data,
});

const getChackFailure = (error) => ({
  type: GET_CHACK_FAILURE,
  payload: error,
});

export const getChack = () => async (dispatch) => {
  dispatch(getChackPending());

  try {
    const response = await fetch(Storage.URL);

    if (!response.ok) {
      throw new Error(`error ${response.status}`);
    }

    const result = await response.json();
    dispatch(getChackSuccess(result));
  } catch (ev) {
    dispatch(getChackFailure(ev.message));
  }
};
