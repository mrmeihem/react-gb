import { Storage } from "../../utils/storage";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_CHAT = "MESSAGES::ADD_MESSAGE_CHAT";

export const addMessage = (chatId, text, source) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    text,
    source,
  },
});

export const addMessageChat = (id) => ({
  type: ADD_MESSAGE_CHAT,
  payload: id,
});

let timeout;

export const addMessageAndReply = (chatId, text, source) => (dispatch) => {
  dispatch(addMessage(chatId, text, source));
  if (source === "you") {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const reply =
        Storage.botMessageList[
          Math.floor(Math.random() * (Storage.botMessageList.length - 1))
        ];
      dispatch(addMessage(chatId, reply, "bot"));
    }, 1500);
  }
};
