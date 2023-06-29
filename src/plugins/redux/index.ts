// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Redux Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Middlewares
import { rtkQueryErrorLoggerMiddleware } from "./middleware";

// API
import { authApi } from "@/features/auth/redux/rtk";

// Reducers
import { reducers } from "./combineReducer";

// Config for Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rtkQueryErrorLoggerMiddleware, authApi.middleware),
});

// Persist Store
const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };

// App Store
export type TRootState = ReturnType<typeof store.getState>;

// Root State
export type TRootDispatch = typeof store.dispatch;
