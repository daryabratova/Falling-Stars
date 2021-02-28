import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Timer as EasyTimer } from "easytimer.js";

import { getIsRunning, getIsPaused } from "../../../redux/selectors";
import { actions } from "../../../redux/actions";

export const Timer: React.FC = () => {
  const timer = useMemo(() => new EasyTimer(), []);

  const isRunning = useSelector(getIsRunning);
  const isPaused = useSelector(getIsPaused);

  const dispatch = useDispatch();

  useEffect(() => {
    const handler = () => {
      dispatch(actions.setTime(timer.getTotalTimeValues().seconds));
    };

    timer.addEventListener("secondsUpdated", handler);

    return () => {
      timer.removeEventListener("secondsUpdated", handler);
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      if (!timer.isRunning()) {
        timer.start();
      }
    } else {
      if (timer.isRunning()) {
        timer.pause();
      }
    }
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning && !isPaused) {
      timer.stop();
    }
  }, [isRunning, isPaused]);

  return null;
};
