import React from "react";
import { AppProps } from "next/app";

import "reset-css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};
