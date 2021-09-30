import { ADD_MESSAGE, SET_MESSAGES, ADD_MESSAGE_CHAT } from "./actions";

const initialState = {
  messages: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  },
};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.chatId]: [
            ...(state.messages[payload.chatId] || []),
            {
              text: payload.text,
              source: payload.source,
            },
          ],
        },
      };
    }
    case ADD_MESSAGE_CHAT: {
      const newMessages = state.messages;
      newMessages[payload] = [];
      return {
        ...state,
        messages: newMessages,
      };
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messages: payload,
      };
    }
    default:
      return state;
  }
};
