import { createAction, ActionType } from "typesafe-actions";

const play = createAction("PLAY")();
const pause = createAction("PAUSE")();
const restart = createAction("RESTART")();
const addScore = createAction("ADD_SCORE")<number>();
const setTime = createAction("SET_TIME")<number>();

export const actions = {
  play,
  pause,
  restart,
  addScore,
  setTime,
};

export type Actions = ActionType<typeof actions>;
