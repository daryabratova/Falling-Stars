import { createReducer } from "typesafe-actions";

import { actions, Actions } from "./actions";

export type State = {
  isRunning: boolean;
  isPaused: boolean;
  score: number;
  time: number;
};

export const initialState: State = {
  isRunning: false,
  isPaused: false,
  score: 0,
  time: 0,
};

export const reducer = createReducer<State, Actions>(initialState)
  .handleAction(actions.play, (state) => {
    return {
      ...state,
      isRunning: true,
      isPaused: false,
    };
  })
  .handleAction(actions.pause, (state) => {
    return {
      ...state,
      isRunning: false,
      isPaused: true,
    };
  })
  .handleAction(actions.restart, (state) => {
    return {
      ...state,
      isRunning: false,
      isPaused: false,
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
