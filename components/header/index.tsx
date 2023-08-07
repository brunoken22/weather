"use client";

import React from "react";
import { Nav, DivNav, DivEnlces, Enlaces, DivHamburg, MiniDiv } from "./styled";
import SunSVG from "@/public/sun.svg";
export function Header() {
   return (
      <Nav>
         <DivNav>
            <SunSVG />
            <DivEnlces>
               <Enlaces href='#'>Mapa</Enlaces>
               <Enlaces href='#'>Sobre nosotros</Enlaces>
            </DivEnlces>
            <DivHamburg>
               <MiniDiv />
               <MiniDiv />
               <MiniDiv />
            </DivHamburg>
         </DivNav>
      </Nav>
   );
}
