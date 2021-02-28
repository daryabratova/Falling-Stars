import React from "react";
import Head from "next/head";

import { Stars } from "../Stars";
import { Stats } from "../Stats";
import { Controls } from "../Controls";

import * as Styles from "./Page.styles";

export const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styles.Main>
        <Styles.Playground>
          <Stars />
        </Styles.Playground>
        <Stats />
        <Controls />
      </Styles.Main>
    </>
  );
};
