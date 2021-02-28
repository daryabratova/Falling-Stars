import { createSelector } from "reselect";
import { State } from "./reducer";

export const getRootState: (state: State) => State = (state) => state;

export const getIsActive = createSelector(
  getRootState,
  (state) => state.isActive
);

export const getScore = createSelector(getRootState, (state) => state.score);

export const getTime = createSelector(getRootState, (state) => state.time);
