import { REQUEST_STATUS } from "../../utils/storage";

export const selectChackLoading = (state) =>
  state.norris.request.status === REQUEST_STATUS.PENDING;
export const selectChack = (state) => state.norris.chack;
export const selectChackError = (state) => state.norris.request.error;
