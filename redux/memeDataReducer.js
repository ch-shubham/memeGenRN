import {FETCH_MEME_DATA_FAILED, FETCH_MEME_DATA_SUCCESS} from './actionType';

const initState = {
  success: true,
  data: {
    memes: [],
  },
};

const memeDataReducer = (initialState = initState, action) => {
  console.log('INITIAL::', initialState);
  switch (action.type) {
    case FETCH_MEME_DATA_SUCCESS:
      return action.payload;
    case FETCH_MEME_DATA_FAILED:
      return {...action.payload, success: false};
    default:
      return initialState;
  }
};

export default memeDataReducer;
