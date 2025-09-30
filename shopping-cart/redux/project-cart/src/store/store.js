import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";

import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only persist cart slice
};

/*export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});*/

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
