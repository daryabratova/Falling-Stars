import { createReducer } from "typesafe-actions";

import { actions, Actions } from "./actions";

export type State = {
  isActive: boolean;
  score: number;
  time: number;
};

export const initialState: State = {
  isActive: false,
  score: 0,
  time: 0,
};

export const reducer = createReducer<State, Actions>(initialState)
  .handleAction(actions.play, (state) => {
    return {
      ...state,
      isActive: true,
    };
  })
  .handleAction(actions.pause, (state) => {
    return {
      ...state,
      isActive: false,
    };
  })
  .handleAction(actions.restart, (state) => {
    return {
      ...state,
      isActive: false,
      score: 0,
      time: 0,
    };
  })
  .handleAction(actions.setScore, (state, action) => {
    const { payload } = action;

    return {
      ...state,
      score: payload,
    };
  })
  .handleAction(actions.setTime, (state, action) => {
    const { payload } = action;

    return {
      ...state,
      time: payload,
    };
  });
