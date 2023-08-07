"use client";
import { StyledComponentsRegistry } from "./registry";
import { ThemeProvider } from "styled-components";
import { Footer } from "../footer";
import { Header } from "../header";
import React, { useState, useEffect } from "react";

const themes: any = {
   dia: {
      dia: "linear-gradient(#3d3df9, #14dcff)",
      bg: "#000",
      color: "#000",
   },
   tarde: {
      dia: "linear-gradient(#f9823d, #dbbd5b)",
      bg: "#000",
      color: "#000",
   },
   noche: {
      dia: "linear-gradient(#3d3df9, #0a005f)",
      bg: "#fff",
      color: "#fff",
   },
};
export function Layout({ children }: { children: React.ReactNode }) {
   const [theme, setTheme] = useState("noche");
   useEffect(() => {
      const hora = new Date();
      if (hora.getHours() > 6 && hora.getHours() < 13) {
         setTheme("dia");
         return;
      }
      if (hora.getHours() > 13 && hora.getHours() < 19) {
         setTheme("tarde");
         return;
      }
      if (hora.getHours() > 19 && hora.getHours() < 6) {
         setTheme("noche");
         return;
      }
   }, []);
   return (
      <StyledComponentsRegistry>
         <ThemeProvider theme={themes[theme]}>
            <Header />
            {children}
            <Footer />
         </ThemeProvider>
      </StyledComponentsRegistry>
   );
}
