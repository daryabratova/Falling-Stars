import React from "react";

import * as Styles from "./Stats.styles";

export const Stats: React.FC = () => {
  return (
    <Styles.Layout>
      <Styles.Stat>00:00</Styles.Stat>
      <Styles.Stat>score: 0</Styles.Stat>
    </Styles.Layout>
  );
};
