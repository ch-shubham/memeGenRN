import {configureStore} from '@reduxjs/toolkit';
import memeDataReducer, {currentMemeReducer} from './memeDataReducer';

const rootReducer = {
  memeData: memeDataReducer,
  currentMemeReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
