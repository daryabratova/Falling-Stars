import React from 'react';
import { AppProps } from "next/app";

export const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};
