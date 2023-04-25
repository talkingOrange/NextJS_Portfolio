import React from "react";
import NavBar from "../components/NavBar";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
