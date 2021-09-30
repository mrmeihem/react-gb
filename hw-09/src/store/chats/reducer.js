import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "./actions";

const initialState = {
  chats: [],
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        chats: [...state.chats, { id: payload.id, name: payload.name }],
      };
    }
    case DELETE_CHAT: {
      const newChats = state.chats.filter((obj) => obj.id !== payload);
      return {
        ...state,
        chats: newChats,
      };
    }
    case SET_CHATS: {
      return {
        ...state,
        chats: payload,
      };
    }
    default:
      return state;
  }
};
