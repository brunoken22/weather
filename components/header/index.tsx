'use client';

import React, {useState} from 'react';
import {Nav, DivNav, DivEnlces, Enlaces, DivHamburg, MiniDiv} from './styled';
import {Hamburg} from '../hamburg';
import SunSVG from '@/public/sun.svg';
export function Header() {
  const [active, setActive] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };
  return (
    <Nav>
      <DivNav>
        <SunSVG />
        <DivEnlces>
          <Enlaces href='#'>Mapa</Enlaces>
          <Enlaces href='#'>Sobre nosotros</Enlaces>
        </DivEnlces>
        <DivHamburg onClick={handleClick}>
          <MiniDiv $rotate='rotate(316deg)' $origin='center' $active={active} />
          <MiniDiv $display='none' $active={active} />
          <MiniDiv
            $rotate='rotate(225deg)'
            $origin='center'
            $position='absolute'
            $active={active}
          />
        </DivHamburg>
        {active ? <Hamburg /> : null}
      </DivNav>
    </Nav>
  );
}
