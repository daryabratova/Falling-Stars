import React from "react";

import * as Styles from "./Controls.styles";

export const Controls: React.FC = () => {
  return (
    <Styles.Layout>
      <Styles.Button>play</Styles.Button>
      <Styles.Button>restart</Styles.Button>
    </Styles.Layout>
  );
};
