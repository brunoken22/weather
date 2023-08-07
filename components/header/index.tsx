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
               <MiniDiv $rotate='rotate(62deg)' $origin='center' />
               <MiniDiv $display='none' />
               <MiniDiv
                  $rotate='rotate(313deg)'
                  $origin='center'
                  position='absolute'
               />
            </DivHamburg>
         </DivNav>
      </Nav>
   );
}

// transform: rotate(62deg);
// transform-origin: center;

// transform: rotate(313deg);
//     transform-origin: center;
//     position: absolute;
