import { Storage } from "../../utils/storage";

import { ref, onValue, set, remove } from "firebase/database";
import { db } from "../../services/firebase";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_CHAT = "MESSAGES::ADD_MESSAGE_CHAT";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessage = (chatId, messageId, text, source) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    messageId,
    text,
    source,
  },
});

export const addMessageChat = (id) => ({
  type: ADD_MESSAGE_CHAT,
  payload: id,
});

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

let timeout;

export const addMessageAndReply = (chatId, messageId, text, source) => (
  dispatch
) => {
  dispatch(addMessage(chatId, messageId, text, source));
  dispatch(addMessageFb(chatId, messageId, text, source));

  if (source === "you") {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const reply =
        Storage.botMessageList[
          Math.floor(Math.random() * (Storage.botMessageList.length - 1))
        ];
      dispatch(addMessage(chatId, messageId + 1, reply, "bot"));
      dispatch(addMessageFb(chatId, messageId + 1, reply, "bot"));
    }, 1500);
  }
};

export const initMessages = () => (dispatch) => {
  const messagesDbRef = ref(db, "messages");
  onValue(messagesDbRef, (snapshot) => {
    const data = snapshot.val();

    dispatch(setMessages(data || {}));
  });
};

export const addMessageFb = (chatId, messageId, text, source) => () => {
  const messagesDbRef = ref(db, `messages/${chatId}/${messageId}`);
  set(messagesDbRef, {
    text,
    source,
    messageId,
  });
};

export const addMessageChatFb = (chatId) => () => {
  const messagesDbRef = ref(db, `messages/${chatId}/0`);
  set(messagesDbRef, { source: "(-", text: "chat created" });
};

export const removeMessagesFb = (chatId) => () => {
  const messagesDbRef = ref(db, `messages/${chatId}`);
  remove(messagesDbRef);
};
