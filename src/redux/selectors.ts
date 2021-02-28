import { createSelector } from "reselect";
import { State } from "./reducer";

export const getRootState: (state: State) => State = (state) => state;

export const getIsRunning = createSelector(
  getRootState,
  (state) => state.isRunning
);

export const getIsPaused = createSelector(
  getRootState,
  (state) => state.isPaused
);

export const getScore = createSelector(getRootState, (state) => state.score);

export const getTime = createSelector(getRootState, (state) => state.time);
