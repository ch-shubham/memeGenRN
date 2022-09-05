import {
  FETCH_MEME_DATA_FAILED,
  FETCH_MEME_DATA_SUCCESS,
  NEXT_MEME,
  PREVIOUS_MEME,
  SET_CURRENT_MEME,
} from './actionType';

const initState = {
  success: true,
  data: {
    memes: [],
  },
};

const memeDataReducer = (initialState = initState, action) => {
  switch (action.type) {
    case FETCH_MEME_DATA_SUCCESS:
      return action.payload;
    case FETCH_MEME_DATA_FAILED:
      return {...action.payload, success: false};
    default:
      return initialState;
  }
};

export const currentMemeReducer = (state = 0, action = {payload: []}) => {
  // console.log('Current Meme Reducer : ', action.payload);
  switch (action.type) {
    case NEXT_MEME:
      return action.payload;
    case PREVIOUS_MEME:
      return action.payload;
    case SET_CURRENT_MEME:
      return action.payload;
    default:
      return state;
  }
};
export default memeDataReducer;
