import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { norrisReducer } from "./norris/reducer";

const persistConfig = {
  key: "humbleApp",
  storage: storageSession,
};

const rootReducer = combineReducers({
  norris: norrisReducer,
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

const persistedReduser = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReduser,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
