import {configureStore} from '@reduxjs/toolkit';
import memeDataReducer from './memeDataReducer';

const rootReducer = {
  memeData: memeDataReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
