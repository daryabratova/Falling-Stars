import React from "react";
import Head from "next/head";

import * as Styles from "./Page.styles";

export const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Styles.Heading>Falling Stars</Styles.Heading>
      </main>
    </>
  );
};
