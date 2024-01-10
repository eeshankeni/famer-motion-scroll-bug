"use client";

import HomePage from "../pages/HomePage";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Garet-Book';
  src: url('/Garet-Book.otf') format('opentype');
}`;

export default function Home() {
  const theme = {
    breakpoints: {
      minimum: 0,
      mobileS: 320,
      mobileM: 375,
      mobileL: 425,
      phablet: 550,
      tablet: 768,
      tabletL: 900,
      laptop: 1024,
      laptopM: 1250,
      laptopL: 1440,
      desktop: 2560,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer theme="colored" />

      <GlobalStyle />

      <HomePage />
    </ThemeProvider>
  );
}
