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
