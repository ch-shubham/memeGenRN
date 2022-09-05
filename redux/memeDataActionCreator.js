import {
  FETCH_MEME_DATA_FAILED,
  FETCH_MEME_DATA_SUCCESS,
  NEXT_MEME,
  PREVIOUS_MEME,
  SET_CURRENT_MEME,
} from './actionType';
const axios = require('axios').default;
let size;
export const getMemeData = () => async dispatch => {
  try {
    const {data} = await axios.get('https://api.imgflip.com/get_memes');
    size = data.data.memes.length;
    dispatch({
      type: FETCH_MEME_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_MEME_DATA_FAILED,
      payload: err,
    });
  }
};

export const getNextMeme = currIndex => dispatch => {
  // console.log('GET Next Meme: ', currIndex);
  // console.log(size);
  if (currIndex === size - 1) {
    dispatch({
      type: NEXT_MEME,
      payload: 0,
    });
  } else {
    dispatch({
      type: NEXT_MEME,
      payload: ++currIndex,
    });
  }
};

export const getPreviousMeme = currIndex => dispatch => {
  // console.log('GET Previous Meme: ', currIndex);

  if (currIndex === 0) {
    dispatch({
      type: PREVIOUS_MEME,
      payload: size - 1,
    });
  } else {
    dispatch({
      type: PREVIOUS_MEME,
      payload: --currIndex,
    });
  }
};

export const setCurrentIndex = currIndex => dispatch => {
  // console.log('SET current Meme: ', currIndex);

  dispatch({
    type: SET_CURRENT_MEME,
    payload: currIndex,
  });
};
