import memeData from '../data/meneData.json';
import {FETCH_MEME_DATA_FAILED, FETCH_MEME_DATA_SUCCESS} from './actionType';
const axios = require('axios').default;

export const getMemeData = () => async dispatch => {
  try {
    const {data} = await axios.get('https://api.imgflip.com/get_memes');

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
