import React from "react";
import { useSelector } from "react-redux";

import { getTime, getScore } from "../../../redux/selectors";

import { formatTime } from "../../helpers/format-time";

import * as Styles from "./Stats.styles";

export const Stats: React.FC = () => {
  const time = useSelector(getTime);
  const score = useSelector(getScore);

  return (
    <Styles.Layout>
      <Styles.Stat>{formatTime(time)}</Styles.Stat>
      <Styles.Stat>score: {score}</Styles.Stat>
    </Styles.Layout>
  );
};
