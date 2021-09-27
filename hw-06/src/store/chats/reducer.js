import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = {
  chats: [
    { id: 1, name: "Squarrelz" },
    { id: 2, name: "Elephantis" },
    { id: 3, name: "Magnus" },
    { id: 4, name: "Stradivus" },
    { id: 5, name: "Somali" },
  ],
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
    default:
      return state;
  }
};
