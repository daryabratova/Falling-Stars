import { createAction, ActionType } from "typesafe-actions";

const play = createAction("PLAY")();
const pause = createAction("PAUSE")();
const restart = createAction("RESTART")();
const setScore = createAction("SET_SCORE")<number>();
const setTime = createAction("SET_TIME")<number>();

export const actions = {
  play,
  pause,
  restart,
  setScore,
  setTime,
};

export type Actions = ActionType<typeof actions>;
