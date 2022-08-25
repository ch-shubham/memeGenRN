import memeData from '../data/meneData.json';
import {FETCH_MEME_DATA_SUCCESS} from './actionType';

export const getMemeData = () => {
  return {
    type: FETCH_MEME_DATA_SUCCESS,
    payload: memeData,
  };
};
