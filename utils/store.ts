import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../Modules/messages';
import userReducer from '../Modules/users';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    user:userReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;