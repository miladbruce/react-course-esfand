import { fromJS } from "immutable";
import { createReducer } from "redux-immutablejs";
import * as constants from "./constants";

const initialState = fromJS({});

export default {
  [constants.USER]: createReducer(initialState, {
    [constants.SET]: (state, action) =>
      state.merge({
          ...action.payload.data
      })
  })
};
