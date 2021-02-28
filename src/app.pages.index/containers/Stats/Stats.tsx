import React from "react";
import { useSelector } from "react-redux";

import { getTime } from "../../../redux/selectors";

import { formatTime } from "../../helpers/format-time";

import * as Styles from "./Stats.styles";

export const Stats: React.FC = () => {
  const time = useSelector(getTime);

  return (
    <Styles.Layout>
      <Styles.Stat>{formatTime(time)}</Styles.Stat>
      <Styles.Stat>score: 0</Styles.Stat>
    </Styles.Layout>
  );
};
