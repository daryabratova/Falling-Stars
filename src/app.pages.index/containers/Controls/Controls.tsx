import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../../redux/actions";
import { getIsRunning } from "../../../redux/selectors";

import * as Styles from "./Controls.styles";

export const Controls: React.FC = () => {
  const isRunning = useSelector(getIsRunning);
  const dispatch = useDispatch();

  const renderPlayPauseButton = () => {
    if (isRunning) {
      const handlePause = () => {
        dispatch(actions.pause());
      };

      return <Styles.Button onClick={handlePause}>pause</Styles.Button>;
    }

    const handlePlay = () => {
      dispatch(actions.play());
    };

    return <Styles.Button onClick={handlePlay}>play</Styles.Button>;
  };

  const handleRestart = () => {
    dispatch(actions.restart());
  };

  return (
    <Styles.Layout>
      {renderPlayPauseButton()}
      <Styles.Button onClick={handleRestart}>restart</Styles.Button>
    </Styles.Layout>
  );
};
